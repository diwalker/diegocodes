import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontent";
import './styles/components/app.sass';

function App() {
  return (
    <div id="portfolio">
      <h1>DIEGO SILVA</h1>
      <Sidebar />
      <Maincontent />
    </div>
  )
}

export default App
