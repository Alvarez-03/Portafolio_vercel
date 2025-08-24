import React from "react";
import TeatroApolo from "../../public/img/proyectoTeatroApolo.png"
import Parqueadero from "../../public/img/parqueadero.png"
import Restaurante from "../../public/img/Restaurante.png"
import '../styles/projects.css'

function Projects (){
    const projectsAca = [
        {
            src:TeatroApolo,
            title:"TeatroApolo",
            description:" Proyecto para un cine que permite gestionar películas, funciones y la compra de boletos. Los usuarios pueden registrarse como clientes y reservar asientos para tus funciones favoritas.",
            tecnologias:"REACT, HTML, CSS, JAVASCRIPT, POSTGRESQL, BOOTSTRAP",
            repositorio:"https://github.com/Alvarez-03/Teatro-Apolo-React",
            deploy:""
        },
        {
            src:Parqueadero,
            title:"App web Parqueadero",
            description:"Una aplicación web diseñada para la gestión eficiente de vehículos en un parqueadero. Permite organizar el estacionamiento por zonas, configurandola cantidad de bahías en cada una. Además, ofrece la opción de personalizar tarifas y calcular automáticamente el costo según el tiempo que cada vehículo permanezca estacionado.",
            repositorio:"https://github.com/Alvarez-03/Tareas",
            tecnologias:"HTML, CSS, JAVASCRIPT",
            deploy:"https://proyectosalvarez.vercel.app/Parking/index.html"
        },
        {
            src:Restaurante,
            title:"App web Restaurante",
            description:"Dashboard: Permite gestionar y configurar la carta del restaurante, visualizar los pedidos y administrar el carrito de compras en tiempo real. Página principal del usuario: Aquí los clientes pueden consultar la carta del restaurante, agregar productos al carrito de compras y realizar pedidos. Toda la información de pedidos se reflejará y podrá gestionarse desde el dashboard. ",
            repositorio:"https://github.com/Alvarez-03/WebApp_Restaurante",
            tecnologias:"HTML, CSS, JAVASCRIPT, POSTGRESQL",
            deploy:""
        },
    ]
    return(
        <>
            <div id="container-projects">
                <h2 id="tittle-projects"><strong>Proyectos academicos</strong></h2>
                    <section className="container d-flex flex-row flex-nowrap overflow-auto" id="section-projects">
                        {projectsAca.map((project, index) => (
                        <div className="card mx-2 flex-shrink-0" id="projectsCard" key={index}>
                            <img src={project.src} alt={project.title} />
                            <div className="card__content">
                            <header className="card_header">
                                <p className="card__title">{project.title}</p>
                            </header>
                            <p className="card__description">
                                {project.description}
                                <h4>
                                <strong>Tecnologias: </strong>
                                {project?.tecnologias}
                                </h4>
                            </p>
                            <footer className="card_footer">
                                <a href={project.repositorio}>
                                <button>
                                    <i className="fa-brands fa-github"></i> Repositorio
                                </button>
                                </a>
                                {project.deploy && (
                                <a href={project.deploy}>
                                    <button>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                                    Visitar
                                    </button>
                                </a>
                                )}
                            </footer>
                            </div>
                        </div>
                        ))}
                    </section>
            </div>
        </>
    )
}

export default Projects