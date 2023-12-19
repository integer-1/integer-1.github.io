import { Container, Row, Col } from 'react-bootstrap'
import home1 from '../images/home1.png'
import home2 from '../images/home2.png'
import home3 from '../images/home3.png'

const groupProjects = [
  {
    title: 'LUXROOM',
    date: 'Oct 2023 - Current',
    explain: `User-friendly web platform for buying chairs, featuring an intuitive interface to explore and purchase products, view detailed descriptions, and easily manage shopping carts for logged-in users`,
    url: 'https://luxloom.pushed.nz/',
    code: 'https://github.com/integer-1/luxroom',
    src: home1,
    skills:
      'TypeScript · JavaScript · React.js · SQLite · Express.js · Knex.js · Docker · CSS · HTML5 · Node.js',
  },
  {
    title: 'IntelliChef',
    date: 'Nov 2023',
    explain: `Designed to help you decide what to cook based on the ingredients you have in your kitchen. It utilizes the ChatGPT API and React to provide a seamless experience in generating, saving, and managing recipes`,
    url: 'https://intelli-chef.pushed.nz/',
    code: '/',
    src: home2,
    skills:
      'TypeScript · JavaScript · React.js · SQLite · Express.js · Knex.js · Docker · CSS · HTML5 · Node.js',
  },
  {
    title: 'ArcadePulse',
    date: 'Dec 2023 - Current',
    explain: `Discover a handpicked selection of games to keep you entertained during busy or dull moments. Dive in for a quick mental boost and enjoy the pulse of ArcadePulse!`,
    url: 'http://the-space-guys.devacademy.nz/',
    code: 'https://github.com/integer-1/sum-game',
    src: home3,
    skills: 'JavaScript · Matter.js · HTML5 · CSS · Vite· Node.js',
  },
]

const ListOfProjects = () => {
  return (
    <div className="list">
      <Container>
        {groupProjects.map((project, index) => (
          <div className="list-detail" key={index}>
            <Row>
              <Col sm={12} xl={6}>
                <p className="title">
                  {project.title}
                  {index === 1 && (
                    <span style={{ fontSize: '18px' }}> | Group</span>
                  )}
                </p>
                <p className="date">{project.date}</p>
                <p className="explain">{project.explain}</p>
                <p className="skill_of_project">{project.skills}</p>
                <a href={project.url}>View &#187;</a>
                {project.code && <a href={project.code}>Code &#187;</a>}
              </Col>
              <Col sm={12} xl={6} className="project_image_box">
                <img
                  className="d-block w-100"
                  src={project.src}
                  alt={project.title}
                />
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default ListOfProjects
