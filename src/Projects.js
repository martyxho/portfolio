import Project from "./components/Project";
import SectionTitle from "./components/SectionTitle";
import instaClone from './assets/images/insta-clone.png';
import waldo from './assets/images/wheres-waldo.png';
import battleship from './assets/images/battleship.png';

function Projects() {
  const proj1 = {
    name: 'Instagram Clone',
    imgSrc: instaClone,
    siteUrl: 'https://martyxho.github.io/insta-clone/',
    github: 'https://github.com/martyxho/insta-clone/',
    text: 'A clone of instagram built using React and Firebase. Has most functions including creating posts, commenting, liking, and following. Responsive to any screen size.'
  };

  const proj2 = {
    name: "Where's Waldo",
    imgSrc: waldo,
    siteUrl: 'https://martyxho.github.io/wheres-waldo/',
    github: 'https://github.com/martyxho/wheres-waldo',
    text: `A where's waldo app built using React and Firebase. Has timer and leaderboard functions.`
  };

  const proj3 = {
    name: 'Battleship',
    imgSrc: battleship,
    siteUrl: 'https://martyxho.github.io/battleship/',
    github: 'https://github.com/martyxho/battleship',
    text: 'A battleship app built with Javascript and Jest for unit tests. Has a computer AI that plays intelligent moves.'
  }

  return (
    <section className="projects">
      <div className="projects_wrapper">
        <SectionTitle classname='projects_title' num='02.' title='Projects' />
        <Project project={proj1}/>
        <Project project={proj2}/>
        <Project project={proj3}/>
      </div>
    </section>
  )
}

export default Projects;