import React from 'react'

const NavBar = () => {
  return (
    <nav>
      <div className="line"></div>
      <a href="/">
        <img id="home" src="./Public/blog-log.png" alt="number1" />
      </a>
      <ul>
        <li>
          <a href="/#about">About</a>
        </li>
        <li className="show">
          <a href="/#skills">Skills</a>
        </li>
        <li className="show">
          <a href="/#projects">Projects</a>
        </li>
        <li className="show">
          <a href="/#references">Reference</a>
        </li>
        <li className="show">
          <a href="/#contact">Contact me</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
