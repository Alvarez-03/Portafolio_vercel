{/*import Certificaciones from "./components/certificaciones"*/}
import Footer from "./components/footer"
import Header from "./components/header"
import Projects from "./components/projects"
import ProjectsProfesional from "./components/ProjectsProfesional"
import Skills from "./components/skills"
import Sobremi from "./components/sobremi"
import './styles/index.css'


function App() {

  return (
    <>
      <Header/>
      <main>
        <Sobremi/>
        <Skills/>
        <ProjectsProfesional/>
        <Projects/>
        {/*Parte de certificaciones por ahora inhabilitado*/}
      </main>
      <Footer/>
    </>
  )
}

export default App
