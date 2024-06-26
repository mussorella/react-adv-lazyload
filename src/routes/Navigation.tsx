import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
import { routes } from "./routes";
import logo from "../logo.svg";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { Suspense } from "react";



export const Navigation = () => {
  return (
   //el class name es para activar cuando tocamos el boton
   //en navlink pongo los links a navegar
   //en routes van las rutas de los archivos, que se puedne colocar los componentes
   //el suspense nos eprmite mandar un msj emientras s ecarga una app, por ejemplo decir loading
   <Suspense fallback={<span>Loading...</span>}>
   <BrowserRouter>
    
    <div className="main-layout">
        <nav>
            <img src={logo} alt="React Logo" />
            <ul>
            {
              routes.map(({to, name})=>(
                <li key={to}>
                <NavLink to={to} className={({isActive})=> isActive ? 'nav-active' : ''}>{name}</NavLink>
                </li>
              ))
            }
            
            
            
        </ul>
        </nav>

    <Routes>
        {routes.map(({path, Component})=>(
            <Route 
            key={path}
            path={path} 
            element={<Component/>}/>
        ))}
    
    
    <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
    </Routes>

    </div>
    </BrowserRouter>
    </Suspense>
  )
}
