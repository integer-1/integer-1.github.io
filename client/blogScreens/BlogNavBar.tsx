import blogLog from '../images/blog-log.png'

const BlogNavBar = () => {
  return (
    <nav>
      <div className="line"></div>
      <a href="/blog">
        <img id="home" src={blogLog} alt="number1" />
        <span className="blog-log">&apos;s BLOG</span>
      </a>
      <ul>
        <li className="blog-show">
          <a className="blog-hover" href="/blog/Code">
            💬
            <p className="tooltiptext">Code Canvas</p>
          </a>
        </li>
        <li className="blog-show">
          <a className="blog-hover" href="/blog/tech">
            💾
            <p className="tooltiptext">Byte Crafts</p>
          </a>
        </li>
        <li className="blog-show">
          <a className="blog-hover" href="/blog/arin">
            🧚
            <p className="tooltiptext">For Arin</p>
          </a>
        </li>
        <li className="blog-show">
          <a className="blog-hover" href="/">
            🚀
            <p className="tooltiptext">Portfolio</p>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default BlogNavBar
