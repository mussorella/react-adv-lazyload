import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"

import logo from "../logo.svg";
export const Navigation = () => {
  return (
   //el class name es para activar cuando tocamos el boton
   //en navlink pongo los links a navegar
   //en routes van las rutas de los archivos, que se puedne colocar los componentes
   <BrowserRouter>
    
    <div className="main-layout">
        <nav>
            <img src={logo} alt="React Logo" />
            <ul>
            <li>
                <NavLink to="home" className={({isActive})=> isActive ? 'nav-active' : ''}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive})=> isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
                <NavLink to="/users" className={({isActive})=> isActive ? 'nav-active' : ''}>Users</NavLink> 
            </li>
        </ul>
        </nav>

    <Routes>
    <Route path="about" element={<h1>About Page</h1>}/>
    <Route path="users" element={<h1>Users Page</h1>}/>
    <Route path="home" element={<h1>Home Page</h1>}/>
    <Route path="/*" element={<Navigate to="/" replace/>}/>
    </Routes>

    </div>
    </BrowserRouter>
  )
}