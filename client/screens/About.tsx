import MySkill from '../components/MySkill.tsx'

const cvFileUrl = 'https://drive.google.com/file/d/1ststtnpCDfwu4LXLae6cSS1nVbUL8PBD/view?usp=drive_link'
const cvFileName = 'Suwon_Jeong_CV.pdf'

const About = () => {
  const downloadPDF = (url: string) => {
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', cvFileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <div id="about" className="about">
      <p className="contact-title">About me</p>

      <div className="box">
        <p>
          Hi, I&apos;m Suwon
          <br />
          A business-savvy software developer <br />
          seasoned in business analysis and brand management.
        </p>
      </div>

      <MySkill />

      <button
        className="download"
        onClick={() => {
          downloadPDF(cvFileUrl)
        }}
      >
        CV download
      </button>

      <div className="end_line"></div>
    </div>
  )
}

export default About
