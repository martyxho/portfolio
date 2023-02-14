import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home;