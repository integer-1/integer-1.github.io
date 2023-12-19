import ListOfProjects from '../components/ListOfProjects.tsx'

const Projects = () => {
  return (
    <div className="project">
      <p id="projects" className="main-title">
        Projects
      </p>

      <ListOfProjects />
      <div className="end_line"></div>

    </div>
  )
}

export default Projects
