import { Container, Row, Col } from 'react-bootstrap'
import rabbit_png from '../images/rabbit.png'

const referenceData = [
  {
    text: 'It was an absolute pleasure to work with Suwon. One of her many talents is that she’s great at communicating with others and coordinating multiple parties. Always willing to pull a lot more weight than expected is a plus. I would strongly recommend her to any future employer as a high performer with very quick response.',
    author: 'Siena Kim',
    position: 'UX & Digital content Team leader, Shinsegae',
  },
  {
    text: 'Suwon is a talented and dedicated software developer. She was an asset to her dev teams while completing group work at Dev Academy and was unafraid to challenge herself with new technologies and ways of doing things. She is self-motivated and committed to producing high quality work.',
    author: 'John Gray',
    position: 'Bootcamp Facilitator, Dev Academy Aotearoa',
  },
]

const References = () => {
  return (
    <div id="references" className="reference">
      <p className="title">Reference</p>
      <div>
        <Container>
          <div className="reference-container">
            <Row>
              <Col xs={12} md={3} xl={3}>
                <div className="circle">
                  <img
                    className="img-circle"
                    src={rabbit_png}
                    alt="reference1"
                  />
                </div>
              </Col>
              <Col xs={12} md={9} xl={9}>
                <p className="reference1">
                  {referenceData[0].text}
                  <br />
                  <br />
                  <span>{referenceData[0].author}</span>
                  <br />
                  <span>{referenceData[0].position}</span>
                </p>
              </Col>
            </Row>
            <Row style={{ marginTop: '100px' }}>
              <Col xs={12} md={9} xl={9}>
                <p className="reference1">
                  {referenceData[1].text}
                  <br />
                  <br />
                  <span>{referenceData[1].author}</span>
                  <br />
                  <span>{referenceData[1].position}</span>
                </p>
              </Col>
              <Col xs={12} md={3} xl={3}>
                <div className="circle">
                  <img
                    className="img-circle"
                    src={rabbit_png}
                    alt="reference1"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="end_line"></div>
      </div>
    </div>
  )
}

export default References
