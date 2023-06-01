import "./App.css";
import Header from "./components/layout/Header";
import { store } from "./redux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
