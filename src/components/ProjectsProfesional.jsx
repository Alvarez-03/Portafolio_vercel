import React from "react";
import HTML from '../../assets/Icons/html5.svg'
import CSS from '../../assets/Icons/css_old.svg'
import JavaScript from '../../assets/Icons/javascript.svg'
import ReactIcon from '../../assets/Icons/react_light.svg'
import PostgreSQLIcon from '../../assets/Icons/postgresql.svg'
import BootstrapIcon from '../../assets/Icons/bootstrap.svg'
import TailwindIcon from '../../assets/Icons/tailwindcss.svg'
import TypeScriptIcon from '../../assets/Icons/typescript.svg'
import FirebaseIcon from '../../assets/Icons/firebase.svg'
import VideoTerapia from "../../public/videos/AppTerapias.mp4"
import "../styles/projectsProfesional.css"

function ProjectsProfesional() {

  return (
    <div id="projects-profesional" className="container d-flex flex-column justify-content-center aling-items-center">
      <h2  className="text-center mb-4 text-white">
        <strong>Proyectos Profesionales</strong>
      </h2>
      <div className="content__project">
        <div id="content__1">
            <div>
              <video autoPlay loop muted playsInline className=" rounded">
                <source src={VideoTerapia} type="video/mp4" />
              </video>
            </div>
            {/* Descripción encima del video */}
            <div 
              className="text-white fs-5 text-start p-3 rounded w-100" 
              style={{ 
                backgroundColor: "rgba(0,0,0,0.55)", 
                backdropFilter: "blur(8px)" 
              }}
            >
              <div className="content__card">
                <p>
                  Proyecto desarrollado para una asociación con la necesidad 
                  de automatizar parte de su servicio. Como programador del equipo 
                  de App Web Terapias AMPDC, participé en el desarrollo del frontend y 
                  en varias partes de la lógica, siempre priorizando la calidad y la experiencia 
                  del usuario final.
                </p>
                <p>
                  La aplicación permite que los terapeutas registren su disponibilidad 
                  y creen un perfil donde destacan sus habilidades.
                  Por el lado del usuario, se ofrece una búsqueda dinámica para encontrar
                  el terapeuta ideal y reservar una cita según los días y horarios disponibles. 
                  El proceso de reserva incluye: Pago mediante la pasarela de STRIPE, 
                  Confirmación de la cita vía correo electrónico, 
                  Creación automática de reuniones virtuales en caso de sesiones online.
                </p>
              </div>

              <footer>
                <div className="d-flex flex-wrap gap-2">
                  <a href="https://github.com/JDSCast/App-Terapias" target="_blank">
                    <p className="btn btn-outline-success btn-sm">Repositorio</p>
                  </a>
                  <a href="https://app-terapias-5b131.web.app/" target="_blank">
                    <p className="btn btn-outline-success btn-sm">Visitar</p>
                  </a>
                </div>
                <h5 className="mt-3">Tecnologías</h5>
                <div className="d-flex flex-wrap gap-3">
                  <span><img src={TypeScriptIcon} alt="" width={30} /> Typescript</span>
                  <span><img src={ReactIcon} alt="" width={30} /> React</span>
                  <span><img src={FirebaseIcon} alt="" width={30} /> Firebase</span>
                  <span><img src={TailwindIcon} alt="" width={30} /> Tailwind</span>
                </div>
              </footer>
            </div>
          </div>
      </div>
    </div>

       
  );
}

export default ProjectsProfesional;
