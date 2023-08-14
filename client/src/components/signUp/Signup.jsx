import React from 'react'

function SignUp() {
  const handleSubmit = () => {

  }
  return (
    <div className="signup">
      <form onSubmit={handleSubmit()}>
        <p>SignUp</p>
        <input type="text" name="firstName" placeholder='FirstName' />
        <input type="text" name="LastName" placeholder='LastName' />
        <input type="email" name="email" placeholder='Email' />
        <input type="password" name="password" placeholder='Password' />
        <button type="submit">SignUp</button>
      </form>
    </div>
  )
}

export default SignUp