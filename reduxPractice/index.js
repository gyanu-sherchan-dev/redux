import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

//action name constant:
const init = "init";
const inc = "increment";
const dec = "decrement";
const incByAmount = "incrementByAmount";

//Store: first we will create store

const store = createStore(
  reducer,
  applyMiddleware(logger.default, thunk.default) // we have to use .default because we are using it on node, if we use it on react may be might not need to use .default
); // there is a cross sign, because it has been depericated, and everyone use configureStore these days, but we will use it to understand this example. If there is no reducer, then the createStore in store is no use.

//what is reducer. Reducer is simply a function. Has two paramter, state and action in same order as below.

const history = [];

function reducer(state = { amount: 1 }, action) {
  //action type increament.
  // if (action.type === inc) {
  //   //immutable
  //   return { amount: state.amount + 1 }; // this is the right way to update the sate, this creates the reference or copy of state and update.
  //   // state.amount = state.amount + 1; this way of changing state is mutable way, it it wrong way of doing it
  // }

  // //inside reducer there can be many action type, ie:
  // if (action.type === dec) {
  //   return { amount: state.amount - 1 };
  // }

  // if (action.type === incByAmount) {
  //   return { amount: state.amount + action.payload };
  // }

  //switching above if conditons to switch

  switch (action.type) {
    case init:
      return { amount: state.amount + action.payload };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }

  // return state; // reducer always return a state. in case of switch we do not need this return statement, default return statement will handle this if there is not any case matched.
}

// store.subscribe(() => {
//   console.log(store.getState());
//   history.push(store.getState());
//   console.log(history);
// });

// global state
// console.log(store.getState());

//Async API Call
// async function getUser() {
//   const { data } = await axios.get("http://localhost:3000/accounts/1");
//   console.log(data);
// }

// getUser(); //through this we can get access to data, but this is purely just axios getting calling API and getting the server data. we want this functionality when we dispatch the action. For that we going to call the api from action creator.

//process of sending action to reducer.
// setInterval(() => {
//   store.dispatch({ type: "increamentByAmount", payload: 4 }); // inside dispatch we have action.
// }, 7000);

//now process of sending action with Action creator, above way of sending action could be abit complicated lets make it simple:

// Action Creator
function getUser(id) {
  // return { type: init, payload: value };
  //calling api directly from action creator
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(initUser(data.amount));
  };
}

function initUser(value) {
  return { type: init, payload: value };
}

//if we use call api directly with async funcion using action then following error occour:
//Error: Actions must be plain objects. Instead, the actual type was: 'Promise'. You may need to add middleware to your store setup to handle dispatching other values, such as'redux-thunk' to handle dispatching functions.
//so lets install thunk and explore

function increment() {
  return { type: inc };
}
function decrement() {
  return { type: dec };
}
function increamentByAmount(value) {
  return { type: incByAmount, payload: value };
}

//dispatching action:
// setInterval(() => {
//   store.dispatch(initUser(500)); // inside dispatch we have action.
// }, 20000);

//dispatching action with thunk
//when you have to make dispatch wait, then you send their a funtion instead calling function as action(see below), as you have already use thunk above, it will already know that you have send the defination of function, not data with function, so thunk will give access to dispatch and getState, see on the action creater.

store.dispatch(getUser(2));
// console.log(store.getState()); //if you console after dispatch and do not make any change in reducer, then the action will be same as above console. But we going to change and see.

//Three principle of redux:

// 1. Single Source of Truth: Global State.
// 2. Immutable Updates: State ready only, do not change the state directly
// 3. Reducer should be Pure: No side-effects.

// now we going to see how middleware are used:

// so far we have done, synchronous request which is easy, now we going to do asynchronous like api call

//for api call we going to use Thunk middleware, first we will see why we need it and then we will understand thunk middleware.
//for this created a sample data resource server as db.json once we created that we going to access the server with fetch or axios, for now we going to use axios.
