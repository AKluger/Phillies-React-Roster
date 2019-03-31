import React from "react";
import "./Main.css";

function Main(props) {
  return <div className="container">{props.children}</div>;
}

export default Main;