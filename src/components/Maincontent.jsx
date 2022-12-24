import "../styles/components/maincontent.sass";
import About from "./About"
import Tecnologias from"./Tecnologias"
import Projetos from  "./Projetos"


const maincontent = () => {
  return <main id="main-content">
    <About />
    <Tecnologias />
    <Projetos />

  </main>
  
}

export default maincontent