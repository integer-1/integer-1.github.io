import { Container, Row, Col } from 'react-bootstrap'

const groupProjects = [
  {
    title: 'LUXROOM',
    explain: `User-friendly web platform for buying chairs, featuring an intuitive interface to explore and purchase products, view detailed descriptions, and easily manage shopping carts for logged-in users`,
    url: 'https://luxloom.pushed.nz/',
    src: '../../Public/home/home1.png',
  },
  {
    title: 'IntelliChef',
    explain: `Designed to help you decide what to cook based on the ingredients you have in your kitchen. It utilizes the ChatGPT API and React to provide a seamless experience in generating, saving, and managing recipes`,
    url: 'https://intelli-chef.pushed.nz/',
    src: '../../Public/home/home2.png',
  },
  {
    title: 'ArcadePulse',
    explain: `Discover a handpicked selection of games to keep you entertained during busy or dull moments. Dive in for a quick mental boost and enjoy the pulse of ArcadePulse!`,
    url: 'http://the-space-guys.devacademy.nz/',
    src: '../../Public/home/home3.png',
  },
]

const ListOfProjects = () => {
  return (
    <div className="list">
      <Container>
        <div className="list-detail">
          <Row>
            <Col>
              <p className="title">{groupProjects[0].title}</p>
              <p className="explain">{groupProjects[0].explain}</p>
              <a href={groupProjects[0].url}>View &#187;</a>
            </Col>
            <Col>
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
            <Col>
              <img
                className="d-block w-100"
                src={groupProjects[1].src}
                alt={groupProjects[1].title}
              />
            </Col>
            <Col>
              <p className="title">{groupProjects[1].title}</p>
              <p className="explain">{groupProjects[1].explain}</p>
              <a href={groupProjects[1].url}>View &#187;</a>
            </Col>
          </Row>
        </div>
        <div className="list-detail">
          <Row>
            <Col>
              <p className="title">{groupProjects[2].title}</p>
              <p className="explain">{groupProjects[2].explain}</p>
              <a href={groupProjects[2].url}>View &#187;</a>
            </Col>
            <Col>
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
