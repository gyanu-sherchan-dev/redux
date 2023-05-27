import React from "react";
import reactImg from "../images/reactImg.png";

const Header = () => {
  return (
    <div className="pt-3 p1-2">
      <img
        src={reactImg}
        style={{
          height: "35px",
          verticalAlign: "top",
        }}
        alt=""
      />
      <span className="h2 pt-4 text-white-50">React Practice - ReactPedia</span>
    </div>
  );
};

export default Header;
