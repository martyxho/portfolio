import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import scrollTrigger from "./utils/scrollTrigger";

function Home() {
  window.addEventListener('scroll', scrollTrigger);
  return (
    <div className="home">
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default Home;