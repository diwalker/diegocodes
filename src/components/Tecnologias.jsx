import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiPostgresql,
  DiReact,
  DiSass, 
  DiPhotoshop
}
  from 'react-icons/di'
  import '../styles/components/tecnologias.sass'

const tech = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "Javscript", icon: <DiJsBadge /> },
  { id: "node", name: "NodeJS", icon: <DiNodejsSmall /> },
  { id: "postgresql", name: "PostgreSQL", icon: <DiPostgresql /> },
  { id: "react", name: "ReacJS", icon: <DiReact /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "photoshop", name: "Photoshop", icon: <DiPhotoshop /> },
];

const Tecnologias = () => {
  return <section className="tecnologias-container">
      <h2>Tecnologias</h2>
      <div className="tecnologias-grid">
        {tech.map((tech) => (
            <div className="tecnologia-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="tecnologias-info">
                <h3>{tech.name}</h3>
              </div>
              </div>
        ))
}
            
      </div>
  </section>
}

export default Tecnologias