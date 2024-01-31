import blogLog from '../images/blog-log.png'

const BlogNavBar = () => {
  return (
    <nav>
      <div className="line"></div>
      <a href="/">
        <img id="home" src={blogLog} alt="number1" />
      </a>
      <ul>
        <li className="blog-show">
          <a href="/blog/Code">Code Canvas</a>
        </li>
        <li className="blog-show">
          <a href="/blog/tech">Byte Craft</a>
        </li>
        <li className="blog-show">
          <a href="/blog/arin">For Arin</a>
        </li>
        <li className="blog-show">
          <a href="/">Portfolio</a>
        </li>
      </ul>
    </nav>
  )
}

export default BlogNavBar
