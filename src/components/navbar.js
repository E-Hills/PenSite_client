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
        <NavLink className="brand" to="/">
            <img src={logoImg} alt="Sophie Chappell"></img>
        </NavLink>
        
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/pens">
                Pens
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                Books
              </NavLink>
            </li>
          </ul>
          <ul>
            { props.user
              ? <li>
                  <NavLink>
                    <img className="icon" src={userImg}></img>
                    Hi, {props.user}
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink to="/">
                        Account
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/signin">
                        Sign Out
                      </NavLink>
                    </li>
                  </ul>
                </li>
              : 
                <li>
                  <NavLink to="/signin">
                    <img className="icon" src={userImg}></img>
                    Sign In
                  </NavLink>
                </li>
            }
            <li>
              <NavLink to="/create">
                <img className="icon" src={baskImg}></img>
                Basket 
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}