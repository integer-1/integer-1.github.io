import { Container, Row, Col } from 'react-bootstrap'

const listOfDid1 = ['HTML', 'CSS', 'React.js', 'JavaScript', 'TypeScript','Git']
const listOfDid2 = ['Redux', 'HandleBar', 'Knex.js', 'SQLite', 'JSON', 'Dokku']
const listOfDid3 = [
  'RESTful APIs',
  'node.js',
  'Express.js',
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
