import React from "react";
import '../styles/skills.css'
import HTML from '../../assets/Icons/html5.svg'
import CSS from '../../assets/Icons/css_old.svg'
import JavaScript from '../../assets/Icons/javascript.svg'
import ReactIcon from '../../assets/Icons/react_light.svg'
import PostgreSQLIcon from '../../assets/Icons/postgresql.svg'
import BootstrapIcon from '../../assets/Icons/bootstrap.svg'
import TailwindIcon from '../../assets/Icons/tailwindcss.svg'
import TypeScriptIcon from '../../assets/Icons/typescript.svg'
import FirebaseIcon from '../../assets/Icons/firebase.svg'

function Skills(){
    const icons = [
        { src: HTML, label: "HTML" },
        { src: CSS, label: "CSS" },
        { src: JavaScript, label: "JAVASCRIPT" },
        { src: ReactIcon, label: "REACT" },
        { src: PostgreSQLIcon, label: "POSTGRESQL" },
        { src: BootstrapIcon, label: "BOOTSTRAP" },
        { src: TailwindIcon, label: "TAILWIND" },
        { src: TypeScriptIcon, label: "TYPESCRIPT" },
        { src: FirebaseIcon, label: "FIREBASE" },
    ];

    return(
        <section className="skills-section" id="herramientas-content">
            <h2 id="titulo-herramientas"><strong>Skills</strong></h2>
            <h4 id="titulo-basico">Conocimiento Basico</h4>

            <div className="skills-marquee">
                <div className="marquee-track">
                    {icons.concat(icons).map((icon, index) => (
                        <div key={index} className="skill-item">
                            <img src={icon.src} alt={icon.label} />
                            <span>{icon.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;
