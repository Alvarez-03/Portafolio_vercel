import React from "react";
import '../styles/header.css'

function Header(){
    return(
        <header className="" id="header">
            <nav className="navbar container">
                <h2><strong>Cristian Alvarez</strong></h2>
                <div id="links-content">
                    <a href="#content-text">Sobre mi</a>
                    <a href="#herramientas-content">Skills</a>
                    <a href="#section-projects">Proyectos</a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alvareztigreros2006@gmail.com" target="_blank">
                        Contactame
                    </a>
                </div>
            </nav>
        </header>
    )
}
export default Header