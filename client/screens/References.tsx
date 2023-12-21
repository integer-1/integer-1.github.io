import { Container, Row, Col } from 'react-bootstrap'
import reference_icon1 from '../images/reference_icon1.png'
import reference_icon2 from '../images/reference_icon2.png'
import reference_icon3 from '../images/reference_icon3.png'

const referenceData = [
  {
    text: 'It was an absolute pleasure to work with Suwon. One of her many talents is that she’s great at communicating with others and coordinating multiple parties. Always willing to pull a lot more weight than expected is a plus. I would strongly recommend her to any future employer as a high performer with very quick response.',
    author: 'Siena Kim',
    position: 'UX & Digital content Team leader, Shinsegae',
    icon: reference_icon1,
  },
  {
    text: 'Suwon is a talented and dedicated software developer. She was an asset to her dev teams while completing group work at Dev Academy and was unafraid to challenge herself with new technologies and ways of doing things. She is self-motivated and committed to producing high quality work.',
    author: 'John Gray',
    position: 'Bootcamp Facilitator, Dev Academy Aotearoa',
    icon: reference_icon2,
  },
  {
    text: 'Suwon is a very hard-working and conscientious developer. She is a joy to work with and is a talented problem-solver. Suwon is a curious learner and has a great attitude towards tackling coding challenges.',
    author: 'Shrena Patel',
    position: 'Bootcamp Facilitator, Dev Academy Aotearoa',
    icon: reference_icon3,
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
              {referenceData.map((data, index) => (
                <Col key={index} xs={12} md={12} xl={4}>
                  <div className="reference-box">
                    <div className="circle">
                      <img
                        className="img-circle"
                        src={data.icon}
                        alt={`reference icon${index}`}
                      />
                    </div>
                    <p className="reference-text">
                      {data.text}
                      <br />
                      <br />
                    </p>
                    <p className="reference-author">{data.author}</p>
                    <p className="reference-position">{data.position}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        <div className="end_line"></div>
      </div>
    </div>
  )
}

export default References
