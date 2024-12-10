import React from "react";
import '../styles/header.css'

function Header(){
    return(
        <header className="" id="header">
            <nav className="navbar container">
                <h1>Portafolio</h1>
                <div id="links-content">
                    <a href="#content-sobremi">Sobre mi</a>
                    <a href="#herramientas-content">Skills</a>
                    <a href="#section-projects">Proyectos</a>
                    <a href="">Contactame</a>
                </div>
            </nav>
        </header>
    )
}
export default Header