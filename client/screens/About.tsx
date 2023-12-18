import MySkill from '../components/MySkill.tsx'
import References from './References.tsx'

const About = () => {
  return (
    <div id="about" className="about">
      <div className="box">
        <p>
          Hi, I&apos;m Suwon.<br />
          Business-savvy software developer <br />
          seasoned in business analysis and brand management.
        </p>
      </div>

      <MySkill />
      
      <div className="end_line"></div>

    </div>
  )
}

export default About
