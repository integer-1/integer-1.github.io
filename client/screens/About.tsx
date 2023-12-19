import MySkill from '../components/MySkill.tsx'

const cvFileUrl = 'https://integer-1.github.io/Suwon_Jeong_CV.pdf'
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
