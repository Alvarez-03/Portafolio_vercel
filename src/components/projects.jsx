import React from "react";
import TeatroApolo from "../../public/img/proyectoTeatroApolo.png"
import ListaTarea from "../../public/img/ListaTarea.png"
import Restaurante from "../../public/img/Restaurante.jpg"
import '../styles/projects.css'

function Projects (){
    return(
        <>
            <h2 id="tittle-projects">Proyectos</h2>
            <section className=" container" id="section-projects">

                <div className="card">
                    <img src={TeatroApolo} alt="" />
                    <div className="card__content">
                        <header className="card_header">
                            <p className="card__title">Teatro Apolo</p>
                        </header>
                        <p className="card__description">
                            Proyecto para un cine que permite gestionar películas, 
                            funciones y la compra de boletos. Los usuarios pueden
                            registrarse como clientes y reservar asientos para tus 
                            funciones favoritas.
                            <h4>REACT, HTML, CSS, JAVASCRIPT, POSTGRESQL, BOOTSTRAP </h4>
                        </p>
                        <footer className="card_footer">
                            <a href="https://github.com/Alvarez-03/Teatro-Apolo-React">
                                <button>Repositorio</button>
                            </a>
                        </footer>
                    </div>
                </div>

                <div className="card">
                    <img src={ListaTarea} alt="" />
                    <div className="card__content">
                        <header className="card_header">
                            <p className="card__title">Gestor de tareas</p>
                        </header>
                        <p className="card__description">
                            Una aplicacion web diseñada para organizar y priorizar tareas, 
                            ayudándote a gestionar tu tiempo de manera más eficiente y productiva
                            <h4>HTML, CSS, JAVASCRIPT </h4>
                        </p>
                        <footer className="card_footer">
                            <a href="https://github.com/Alvarez-03/Tareas">
                                <button>Repositorio</button>
                            </a>
                        </footer>
                    </div>
                </div>

                <div className="card">
                    <img src={Restaurante} alt="" />
                    <div className="card__content">
                        <header className="card_header">
                            <p className="card__title">App web restaurante</p>
                        </header>
                        <p className="card__description">
                        El sistema consta de dos páginas principales:
                        <br />
                        Dashboard: Permite gestionar y configurar la carta del restaurante, 
                        visualizar los pedidos y administrar el carrito de compras en tiempo real. <br /> <br />
                        Página principal del usuario: Aquí los clientes pueden consultar la carta 
                        del restaurante, agregar productos al carrito de compras y realizar pedidos. 
                        Toda la información de pedidos se reflejará y podrá gestionarse desde el dashboard. 
                            <h4>HTML, CSS, JAVASCRIPT, POSTGRESQL </h4>
                        </p>
                        <footer className="card_footer">
                            <a href="https://github.com/Alvarez-03/WebApp_Restaurante">
                                <button>Repositorio</button>
                            </a>
                        </footer>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Projects