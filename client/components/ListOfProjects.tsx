import { Container, Row, Col } from 'react-bootstrap'

const groupProjects = [
  {
    title: 'LUXROOM',
    explain: `User-friendly web platform for buying chairs, featuring an intuitive interface to explore and purchase products, view detailed descriptions, and easily manage shopping carts for logged-in users`,
    url: 'https://luxloom.pushed.nz/',
    src: '../../Public/home/home1.png',
    skills:
      'TypeScript · JavaScript · React.js · SQLite · Express.js · Knex.js · Docker · CSS · HTML5 · Node.js',
  },
  {
    title: 'IntelliChef',
    explain: `Designed to help you decide what to cook based on the ingredients you have in your kitchen. It utilizes the ChatGPT API and React to provide a seamless experience in generating, saving, and managing recipes`,
    url: 'https://intelli-chef.pushed.nz/',
    src: '../../Public/home/home2.png',
    skills:
      'TypeScript · JavaScript · React.js · SQLite · Express.js · Knex.js · Docker · CSS · HTML5 · Node.js',
  },
  {
    title: 'ArcadePulse',
    explain: `Discover a handpicked selection of games to keep you entertained during busy or dull moments. Dive in for a quick mental boost and enjoy the pulse of ArcadePulse!`,
    url: 'http://the-space-guys.devacademy.nz/',
    src: '../../Public/home/home3.png',
    skills: 'JavaScript · Matter.js · HTML5 · Vite· Node.js',
  },
]

const ListOfProjects = () => {
  return (
    <div className="list">
      <Container>
        <div className="list-detail">
          <Row>
            <Col sm={12} xl={6}>
              <p className="title">{groupProjects[0].title} </p>
              <p className="date">Oct 2023 - Current</p>
              <p className="explain">{groupProjects[0].explain}</p>
              <p className="skill_of_project">{groupProjects[0].skills}</p>
              <a href={groupProjects[0].url}>View &#187;</a>
            </Col>
            <Col sm={12} xl={6}>
              <img
                className="d-block w-100"
                src={groupProjects[0].src}
                alt={groupProjects[0].title}
              />
            </Col>
          </Row>
        </div>
        <div className="list-detail">
          <Row>
          <Col sm={12} xl={6}>
              <p className="title">{groupProjects[1].title}</p>
              <p className="date">Nov 2023</p>
              <p className="explain">{groupProjects[1].explain}</p>
              <p className="skill_of_project">{groupProjects[1].skills}</p>
              <a href={groupProjects[1].url}>View &#187;</a>
            </Col>
            <Col sm={12} xl={6}>
              <img
                className="d-block w-100"
                src={groupProjects[1].src}
                alt={groupProjects[1].title}
              />
            </Col>
          </Row>
        </div>
        <div className="list-detail">
          <Row>
          <Col sm={12} xl={6}>
              <p className="title">{groupProjects[2].title}</p>
              <p className="date">Dec 2023 - Current</p>
              <p className="explain">{groupProjects[2].explain}</p>
              <p className="skill_of_project">{groupProjects[2].skills}</p>
              <a href={groupProjects[2].url}>View &#187;</a>
            </Col>
            <Col sm={12} xl={6}>
              <img
                className="d-block w-100"
                src={groupProjects[2].src}
                alt={groupProjects[2].title}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default ListOfProjects
