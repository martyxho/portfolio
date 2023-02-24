import SectionTitle from "./components/SectionTitle";

function About() {
  return (
    <section className="about">
      <div className="about_wrapper">
        <SectionTitle classname='about_title' num='01.' title='About'/>
        <div className="about_text">
          <p>
            Hi, my name is Marty. I'm an aspiring web developer. I've built apps using React, Javascript and Google Firebase. 
          </p>
        </div>
        <div className="about_skills">
        </div>
      </div>
    </section>
  )
}

export default About;