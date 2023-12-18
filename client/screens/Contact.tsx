import { EmailIcon, GithubIcon } from '../components/Icone.tsx'
import { Link } from 'react-router-dom'

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
      </div>
    </div>
  )
}

export default Contact
