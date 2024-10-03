import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Unknown from "../asset/unknown.jpg"

import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState("Home");

    return (
        <div className="navbar">
    
            <div className="nav-bar">
                <ul className="nav-bar2">
                    <li onClick={() => { setMenu("Home") }}>
                        <Link to="/">Home</Link>
                        {menu === "Home" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("Content") }}>
                        <Link to="/Content">Content</Link>
                        {menu === "Content" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("Campaig") }}>
                        <Link to="/Campaig">Campaign</Link>
                        {menu === "Campaig" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("Employee Management") }}>
                        <Link to="/Employee">Employee Management</Link>
                        {menu === "Employee Management" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("Finance Portal") }}>
                        <Link to="/Financee">Finance Portal</Link>
                        {menu === "Finance Portal" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("Human Resource Management") }}>
                        <Link to="/HRM">Human Resource Management</Link>
                        {menu === "Human Resource Management" ? <hr /> : null}
                    </li>
                </ul>
            </div>
            <div className="profile" onClick={() => { setMenu("profile") }}>
            <Link to="/profile"><img src={Unknown}/>
                <h1>profile</h1></Link>{menu === "profile" ? <hr /> : null}
                          
            </div>
        </div>
    );
}

export default Navbar;

