import React, { useState } from 'react'
import '../../App.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("naem")
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <p>Login</p>
        <input type="email" name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="password" placeholder='Password'  onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login