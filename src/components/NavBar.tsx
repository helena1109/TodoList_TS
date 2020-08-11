import React from "react";
import {Link} from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper pink darken-4 px1">
                <a href="#" className="brand-logo">TS</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Todo list</Link></li>
                    <li><Link to='/about'>About me</Link></li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;