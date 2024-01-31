import { EmailIcon, GithubIcon, LinkedinIcon } from '../components/Icon.tsx'

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <p className="contact-title">Get it touch </p>
      <div className="contact-box">
        <p className="email">
          <EmailIcon /> E -mail | integer.won@gmail.com
        </p>
        <p className="github">
          <a href="https://github.com/integer-1">
            <GithubIcon /> GitHub | https://github.com/integer-1
          </a>
        </p>
        <p className="github">
          <a href="https://www.linkedin.com/in/suwon-jeong-225959171/">
            <LinkedinIcon /> Linkedin 
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
