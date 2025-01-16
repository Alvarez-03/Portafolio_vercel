import React from "react";
import TeatroApolo from "../../public/img/proyectoTeatroApolo.png"
import Parqueadero from "../../public/img/parqueadero.png"
import Restaurante from "../../public/img/Restaurante.png"
import '../styles/projects.css'

function Projects (){
    return(
        <>
            <h2 id="tittle-projects"><strong>Proyectos</strong></h2>
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
                                <button><i class="fa-brands fa-github"></i> Repositorio</button>
                            </a>
                        </footer>
                    </div>
                </div>

                <div className="card">
                    <img src={Parqueadero} alt="" />
                    <div className="card__content">
                        <header className="card_header">
                            <p className="card__title">App Web Parqueadero</p>
                        </header>
                        <p className="card__description">
                            Una aplicación web diseñada para la gestión eficiente de vehículos en 
                            un parqueadero. Permite organizar el estacionamiento por zonas, configurando
                            la cantidad de bahías en cada una. Además, ofrece la opción de personalizar 
                            tarifas y calcular automáticamente el costo según el tiempo que cada vehículo 
                            permanezca estacionado.
                            <h4>HTML, CSS, JAVASCRIPT </h4>
                        </p>
                        <footer className="card_footer">
                            <a href="https://github.com/Alvarez-03/Tareas" >
                                <button><i class="fa-brands fa-github"></i> Repositorio</button>
                            </a>
                            <a href="https://proyectosalvarez.vercel.app/Parking/index.html" target="_blank">
                                <button><i class="fa-solid fa-arrow-up-right-from-square"></i> Ir ahora</button>
                            </a>
                        </footer>
                    </div>
                </div>

                <div className="card">
                    <img src={Restaurante} alt="" />
                    <div className="card__content">
                        <header className="card_header">
                            <p className="card__title">App Web Restaurante</p>
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
                                <button><i class="fa-brands fa-github"></i> Repositorio</button>
                            </a>
                        </footer>
                    </div>
                </div>

            </section>
            <footer className="container my-5">
                <a href="https://proyectosalvarez.vercel.app/" target="_blank">
                    <button id="btn-mp">Más Proyectos</button>
                </a>
            </footer>
        </>
    )
}

export default Projects