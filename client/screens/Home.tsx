import HomeImageSlide from '../components/HomeImageSlide.tsx'

export default function Home() {
  return (
    <div className="home">
      <p className="main-title">
        Stylishly chronicling my journey <br /> as a budding software developer
      </p>
      <HomeImageSlide />

      <a href="/#projects" className="project-path">
        Discover my projects &#187;
      </a>

      <div className="line"></div>

    </div>
  )
}
