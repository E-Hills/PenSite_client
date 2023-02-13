import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Components 
import Navbar from "./components/navbar";
import AccountList from "./components/accountList";
import Create from "./components/create";
import SignIn from "./components/signin";
import PenProducts from "./components/penProducts";

export default function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  useEffect (() => {
    const localUser = localStorage.getItem("user");
    const localToken = localStorage.getItem("token");

    if (localUser && localToken) {
      setUser(localUser);
      setToken(localToken);
    }
  }, []);

  /*
  useEffect (() => {
    // Verify token
    fetch("http://localhost:5000/verifyToken", {
      headers: { "x-access-token": localStorage.getItem("token") }
    })
    .then(res => res.json())
    .then(data => data.validToken ? null : localStorage.clear())
  }, []);*/

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar user={user}/>}>
          <Route index element={<AccountList />} />
          <Route path="pens" element={<PenProducts />} />
          <Route path="create" element={<Create />} />
          <Route path="signin" element={<SignIn userState={{user:user, setUser:setUser}} tokenState={{token:token, setToken:setToken}} />} />
        </Route>
      </Routes>
    </>
  );
}