import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4567/auth/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(resData);
        navigate("/login");
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <p>SignUp</p>
        <input
          type="text"
          name="firstName"
          placeholder="FirstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="LastName"
          placeholder="LastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}

export default SignUp;
