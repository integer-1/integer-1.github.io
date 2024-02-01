import BlogNavBar from '../blogScreens/BlogNavBar.tsx'
import { BallIcon } from '../components/Icon.tsx'

const Blog = () => {
  return (
    <div id="blog">
      <BlogNavBar />
      <div className="blog-home">
        <BallIcon />
      </div>
    </div>
  )
}

export default Blog
