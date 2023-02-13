import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Outlet, NavLink } from "react-router-dom";

import "../style.css";
import logoImg from "../images/Brand_01.png";
import userImg from "../images/user.svg"
import baskImg from "../images/basket.svg"

// Navigation centre for users
export default function Navbar(props) {

  return (
    <>
      <header>
        <div className="inner">
          <NavLink className="brand" to="/">
            <img src={logoImg} alt="Sophie Chappell"></img>
          </NavLink>
          <div className="nav-wrapper">
            <nav className="nav-desktop">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/">
                Pens
              </NavLink>
              <NavLink className="nav-link" to="/">
                Books
              </NavLink>
            </nav>
            <nav className="nav-desktop">
            {props.user
              ? /*<NavLink className="nav-link" to="/signin">
                  <img className="nav-icon" src={userImg}></img>
                  Hi, {props.user}
                </NavLink>*/
                <div className="nav-dropdown">
                  <NavLink className="nav-link">
                    <img className="nav-icon" src={userImg}></img>
                    Hi, {props.user}
                  </NavLink>
                  <div className="nav-drop-cont">
                    <NavLink className="nav-link-drop">
                      Account
                    </NavLink>
                    <NavLink className="nav-link-drop" to="/signin">
                      Sign Out
                    </NavLink>
                  </div>
                </div>
              : <NavLink className="nav-link" to="/signin">
                  <img className="nav-icon" src={userImg}></img>
                  Sign In
                </NavLink>}

              <NavLink className="nav-link" to="/create">
                <img className="nav-icon" src={baskImg}></img>
                Basket 
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}