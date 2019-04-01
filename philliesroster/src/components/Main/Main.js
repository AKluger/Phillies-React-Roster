import React from "react";
import "./Main.css";

function Main(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Main;