import React from "react";
import '../styles/index.css'

function Footer (){
    return(
        <footer className="d-md-flex " id="footer-page">
            <div id="text">
                <p>© 2024 Cristian David Alvarez Tigreros.</p>
            </div>
                
            
            <div class="d-grid gap-2 d-md-flex justify-content-md-center" id="redes-sociales-footer">
                <a class="btn btn-social" id="btn-github" type="button" href="https://github.com/Alvarez-03">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a class="btn btn-social" id="btn-linkedin" type="button" href="https://www.linkedin.com/in/cristian-alvarez-software/">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a class="btn btn-social" id="btn-correo" type="button" href="https://mail.google.com/mail/?view=cm&fs=1&to=alvareztigreros2006@gmail.com" target="_blank"> 
                    <i class="fa-solid fa-envelope"></i>
                </a>
                
            </div>

            
            
        </footer>
        
    )
}

export default Footer