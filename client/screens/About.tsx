import MySkill from '../components/MySkill.tsx'

const About = () => {
  return (
    <div id="about" className="about">
      <p className="contact-title">About me</p>

      <div className="box">
        <p>
          Hi, I&apos;m Suwon<br />
          A business-savvy software developer <br />
          seasoned in business analysis and brand management.
        </p>
      </div>
      

      <MySkill />
      
      <div className="end_line"></div>

    </div>
  )
}

export default About
