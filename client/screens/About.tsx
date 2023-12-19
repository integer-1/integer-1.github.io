import MySkill from '../components/MySkill.tsx'

const cvFileUrl = 'http://localhost:5173/Suwon_Jeong_CV.pdf'

const About = () => {

  const downloadPDF = (url: string) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')

    if (fileName === undefined) return <p>Sorry can not download CV</p>

    aTag.href = url
    aTag.setAttribute('download', fileName)
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
      <button
        onClick={() => {
          downloadPDF(cvFileUrl)
        }}
      >download</button>
      <MySkill />

      <div className="end_line"></div>
    </div>
  )
}

export default About
