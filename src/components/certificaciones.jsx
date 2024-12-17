import React from "react";
import "../styles/certificaciones.css"
import C_MetodologiasAgiles from '../../public/img/Certificado Metodologias_agiles.png'

function Certificaciones (){
    return(
        <section className="container" id="container-cards">
            <h2>Certificaciones</h2>
            <div id="content_card" className="container">
                <header>
                    <h3>Metodologias agiles</h3>
                </header>
                <section>
                    <img src={C_MetodologiasAgiles} alt="Certificado_MA" />
                </section>
                <footer>
                    <p>Certificado otorgado por Politecnico Internacional PIO</p>
                </footer>
            </div>
        </section>
    )
}

export default Certificaciones