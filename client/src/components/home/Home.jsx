import React from 'react'
import logo from '../../assets/logo.png'
import image from '../../assets/image.png'

function Home() {
  return (
    <div className="home_container">
      <div className="home_nav">
        <div className="nav_image">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav_menu">
          <button>Login</button>
          <button>SignUp</button>
        </div>
      </div>
      <div className="home_body">
        <div className="home_text">
          <p>Inventory Management</p>
          <p>An inventory management system helps businesses track and organize their inventory efficiently.</p>
          <button>Get started</button>
        </div>
        <div className="home_image">
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Home