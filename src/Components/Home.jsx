import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand">ICE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink to={'/'} className="nav-link active" aria-current="page">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to={'/LoginPage'} className="nav-link active">Login</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to={'/SignUp'} className="nav-link active">SignUp</NavLink>
        </li>  
        <li class="nav-item">
        <NavLink to={'/Employeetable'} className="nav-link active">EmployeeTable</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
<br /><br />
<div className='container'>
    <div className="row">
    <img src="https://c4.wallpaperflare.com/wallpaper/244/9/297/html-programming-code-blue-wallpaper-preview.jpg" alt="" />
</div>
</div>

    </div>
  )
}

export default Home
