import blogLog from '../images/blog-log.png'

const NavBar = () => {
  return (
    <nav>
      <div className="line"></div>
      <a href="/">
        <img id="home" src={blogLog} alt="number1" />
      </a>
      <ul>
        <li>
          <a href="/#about">About</a>
        </li>
        <li className="show">
          <a href="/#projects">Works</a>
        </li>
        <li className="show">
          <a href="/#references">Reference</a>
        </li>
        <li className="show">
          <a href="/#contact">Contact</a>
        </li>
        {/* <li className="show">
          <a href="https://integer-1.github.io/blog">Blog</a>
        </li> */}
      </ul>
    </nav>
  )
}

export default NavBar
