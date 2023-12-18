import { Container, Row, Col } from 'react-bootstrap'

const listOfDid1 = ['HTML', 'CSS', 'React', 'Redux', 'HandleBar']
const listOfDid2 = ['JavaScript', 'TypeScript', 'Knex', 'SQLite', 'JSON']
const listOfDid3 = [
  'RESTful APIs',
  'node.js',
  'express',
  'vitest',
  'API testing',
]

const MySkill = () => {
  return (
    <div id="skills" className="skills-list">
      <Container>
        <Row>
          <Col>
            <p>My Skiils</p>
          </Col>
          <Col>
            <div className="line"></div>
          </Col>
          <Col>
            <ul>
              {listOfDid1.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </Col>
          <Col>
            <ul>
              {listOfDid2.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </Col>
          <Col>
            <ul>
              {listOfDid3.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MySkill
