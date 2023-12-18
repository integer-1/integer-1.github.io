import { Container, Row, Col } from 'react-bootstrap'

const References = () => {
  return (
    <div id="references" className="reference-box">
      <Container>
        <div className="reference-container">
          <Row>
            <Col sm={4}>
              <div className="circle"></div>
            </Col>
            <Col sm={8}>
              <p>
                It was an absolute pleasure to work with Suwon. One of her many
                talents is that she’s great at communicating with others and
                coordinating multiple parties. Always willing to pull a lot more
                weight than expected is a plus. I would strongly recommend her
                to any future employer as a high performer with very quick
                response.
                <br />
                <br />
                <span>Siena Kim</span>
                <br />
                <span>UX & Digital content Team leader, Shinsegae</span>
              </p>
            </Col>
          </Row>
        </div>
        <div className="reference-container">
          <Row>
            <Col sm={8}>
              <p>
                Once upon a time, in the heart of the dense Amazon rain forest,
                there existed a forgotten expedition that would change the
                course of history. It all began when Dr. Amelia Thornton, a
                brilliant archaeologist, stumbled upon an ancient manuscript in
                a dusty corner of a library in Oxford.
                <br />
                <br />
                <span>
                  Sara james back
                  <br />
                  As a new software developer
                </span>
              </p>
            </Col>
            <Col sm={4}>
              <div className="circle"></div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default References
