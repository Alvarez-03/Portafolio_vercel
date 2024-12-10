import React from "react";
import avatar from "../../public/img/avatar.jpeg"
import '../styles/sobremi.css'
import cv from "../../public/CV_CristianAlvarez.pdf"

function Sobremi(){
    return(
        <div className="container " id="content-sobremi">
            <div id="content-img">
                <img src={avatar} alt="Avatar"  />
            </div>
            <div id="content-text">
                <header>
                    <h1>Cristian Alvarez</h1>
                </header>
                <section >
                    <p>Soy estudiante proximo a culminar la carrera tecnica
                    en Desarrollo de Software, actualmente me encuentro 
                    enfocado en fortalecer mis hablilidades como desarrollador, especialmente en 
                    el area de frontend. <br />
                    Estoy buscando una oportunidad para aplicar mis conocimientos y seguir aprendiendo y 
                    contribuyendo al desarrollo de soluciones innovadoras. </p>
                </section>
            </div>
            <footer id="redes-sociales" >
                <div class="d-grid gap-2 d-md-flex justify-content-md-center ">
                    <a class="btn btn-social" id="btn-github" type="button" href="https://github.com/Alvarez-03">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a class="btn btn-social" id="btn-linkedin" type="button" href="https://www.linkedin.com/in/cristian-alvarez-software/">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a class="btn btn-social" id="btn-correo" type="button" href="https://mail.google.com/mail/?view=cm&fs=1&to=alvareztigreros2006@gmail.com">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                    <a href={cv}  download="CV_CristianAlvarez.pdf">
                        <button className="btn btn-social" id="btn-cv">
                            <i class="fa-solid fa-download"></i> Hoja de vida
                        </button>
                    </a>
                </div>
            </footer>
        </div>
    )
}
export default Sobremi