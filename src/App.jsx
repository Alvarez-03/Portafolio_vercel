import Footer from "./components/footer"
import Header from "./components/header"
import Projects from "./components/projects"
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
        <Projects/>
      </main>
      <Footer/>
    </>
  )
}

export default App
