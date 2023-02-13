import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function SignIn(props) {
  const [form, setForm] = useState({
    email: "",
    emailErr: false,
    password: "",
    passwordErr: false,
  });

  // Update form state without overwriting
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // Submit form to server and update localUser
  const handleSignIn = async e => {
    e.preventDefault();

    await fetch("http://localhost:5000/account/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: form.email, password: form.password }),
    }).then((res) => {
      res.json()
      .then((resJSON) => {
        if (res.status == 404) {
          // Account not found
          updateForm({ emailErr: true, passwordErr: false})
        } else if (res.status == 401) {
          // Incorrect password
          updateForm({ emailErr: false, passwordErr: true})
        } else {
          // Valid login
          updateForm({ emailErr: false, passwordErr: false });
          props.userState.setUser(resJSON.name);
          props.tokenState.setToken(resJSON.tkn);
          localStorage.setItem("user", resJSON.name)
          localStorage.setItem("token", resJSON.tkn);
        }
      })
    });
  }

  const handleSignOut = () => {
    setForm({ email: "", password: "" });
    localStorage.clear();
  }

  // Display current user and sign out button
  if (localStorage.getItem("token")) {
    return (
      <div className="inner">
        <form onSubmit={handleSignOut}>
          <h3>Current User: {props.userState.user}</h3>
            <div className="form-group">
              <input
                type="submit"
                className="noSelect"
                value="Sign Out"
              />
            </div>
        </form>
      </div>
    );
  // Display sign in form
  } else {
    return (
      <div className="inner">
        <form onSubmit={handleSignIn}>
          <h3>Sign In</h3>
          <div className="form-group">
            {!form.emailErr 
             ? <label htmlFor="email">Email</label>
             : <label htmlFor="email">Sorry, we couldn't find that account</label>}
            <input
              type="email"
              className="noSelect"
              id="email"
              required
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
            />
          </div>
          <div className="form-group">
            {!form.passwordErr 
             ? <label htmlFor="password">Password</label>
             : <label htmlFor="password">Password does not match email</label>}
            <input
              type="password"
              className="noSelect"
              id="password"
              required
              value={form.password}
              onChange={(e) => updateForm({ password: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="noSelect"
              value="Sign In"
            />
          </div>
          <div className="form-group">
            <label>
              <NavLink to="/">Forgot Your Password?</NavLink>
            </label>
          </div>
        </form>
      </div>
    );
  }
}