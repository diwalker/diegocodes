import Avatar from "../img/eu.png";
import "../styles/components/sidebar.sass"
import Social from "../components/Social"
import Information from "../components/Information"

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Diego Silva" />
    <p className="title">Desenvolvedor</p>
    <Social />
    <Information />
    <a href ="" className="btn" value="download">Download Curriculo</a>

  </aside>
}

export default Sidebar