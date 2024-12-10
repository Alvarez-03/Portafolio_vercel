import React from "react";
import '../styles/skills.css'

function Skills(){
    return(
        <section class="container " id="herramientas-content" >
            <h2 id="titulo-herramientas"><strong>Skills</strong></h2>
            <h4 id="titulo-basico">Conocimiento Basico</h4>
            <div class="container p-5 row" id="herramientas">
                
                <p class="col" >
                    <i class="fa-brands fa-html5"></i> 
                    HTML
                </p>
                <p class="col" >
                    <i class="fa-brands fa-css3-alt"></i>
                    CSS
                </p>
                <p class="col">
                    <i class="fa-brands fa-js"></i>
                    JAVASCRIPT
                </p>
                <p class="col">
                    <i class="fa-brands fa-react"></i>
                    REACT
                </p>
                <p class="col">
                    <i class="fa fa-database" aria-hidden="true"></i>
                    POSTGRESQL
                </p>
                <p class="col">
                    <i class="fa-brands fa-bootstrap"></i>
                    BOOTSTRAP
                </p>
            </div>
        </section>
    )
}
export default Skills