import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    forename: ""
  });
  const [emailError, setEmailError] = useState(false);

  const navigate = useNavigate();
 
  // Update form state without overwriting
  function updateForm(value) {
     return setForm((prev) => {
       return { ...prev, ...value };
    });
  }
 
  // This function will handle the submission.
  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:5000/account/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        email: form.email, 
        password: form.password,
        forename: form.forename,
      }),
    }).then((res) => {
      if (res.status == 409) {
        setEmailError(true);
      } else {
        setEmailError(false);
        setForm({ email: "", password: ""});
        navigate("/signin");
      }
    });
  }
 
  // This following section will display the form that takes the input from the user.
  return (
  <div className="inner">
      <form onSubmit={handleSubmit}>
        <h3>Create Account</h3>
        <div className="form-group">
          {!emailError 
             ? <label htmlFor="email">Email</label>
             : <label htmlFor="email">That email is already associated with an account. </label>}
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
          <label htmlFor="password">Password</label>
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
          <label htmlFor="forename">Forename</label>
          <input
            type="text"
            className="noSelect"
            id="forename"
            required
            value={form.forename}
            onChange={(e) => updateForm({ forename: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="noSelect"
            value="Create Account"
          />
        </div>
      </form>
    </div>
  );
}