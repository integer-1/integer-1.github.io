import { Container, Row, Col } from 'react-bootstrap'

const skillCategories = [
  { skills: ['HTML', 'CSS', 'React.js', 'JavaScript', 'TypeScript', 'Git'] },
  { skills: ['Redux', 'HandleBar', 'Knex.js', 'SQLite', 'JSON', 'Dokku'] },
  {
    skills: ['RESTful APIs', 'node.js', 'Express.js', 'vitest', 'API testing'],
  },
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
          {skillCategories.map((category, index) => (
            <Col key={index}>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default MySkill
