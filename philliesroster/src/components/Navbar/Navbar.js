import React from "react";
import "./navbar.css"
// pass down game state if new game "" else if guess correct or guess wrong...

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg d-flex justify-content-between">
            <span className="navbar-brand">Phillies Clicky</span>
            <span className="nav-item">
                {props.message}
            </span>
            <span className="nav-item">
                Score: {props.score} | Top Score: {props.topScore}
            </span>
        </nav>
    )
}

export default Navbar;