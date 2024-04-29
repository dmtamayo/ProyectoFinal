/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
<nav id='main' className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link  to= '/'>
      <img src='./logoIUE.png' alt='Logo' width='100' />
    </Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <form id= 'search' className="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit">Buscar</button>
            <input className="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar" />    
            </form>                
      <ul  className="navbar-nav ">
        <li id='items-main' className="nav-item">
          <Link className="nav-link" to= '/' >Inicio</Link>
        </li>
        <li id='items-main' className="nav-item">
          <Link className="nav-link" to='/destacado'>Destacados</Link>
        </li>
        <li id='items-main'   className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contactanos
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='/contacto'>Contacto</Link></li>
            <li><Link className="dropdown-item" to='/informacion'>Información </Link></li>
          </ul>
        </li>
        <li><button className="btn btn-outline-success" type="submit">Buscar</button></li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
