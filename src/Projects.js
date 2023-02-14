import Project from "./components/Project";
import instaClone from './assets/images/insta-clone.png';
import waldo from './assets/images/wheres-waldo.png';
import shoppingCart from './assets/images/shopping-cart.png';
import battleship from './assets/images/battleship.png';

function Projects() {
  const proj1 = {
    name: 'Instagram Clone',
    imgSrc: instaClone,
    siteUrl: 'https://martyxho.github.io/insta-clone/',
    github: 'https://github.com/martyxho/insta-clone/'
  };

  const proj2 = {
    name: "Where's Waldo",
    imgSrc: waldo,
    siteUrl: 'https://martyxho.github.io/wheres-waldo/',
    github: 'https://github.com/martyxho/wheres-waldo'
  };

  const proj3 = {
    name: 'Shopping Cart', 
    imgSrc: shoppingCart,
    siteUrl: 'https://martyxho.github.io/shopping-cart/',
    github: 'https://github.com/martyxho/shopping-cart'
  }

  const proj4 = {
    name: 'Battleship',
    imgSrc: battleship,
    siteUrl: 'https://martyxho.github.io/battleship/',
    github: 'https://github.com/martyxho/battleship'
  }

  return (
    <section className="projects">
      <div className="projects_wrapper">
        <h1 className="projects_title">
          <span>02.</span>
          <span>Projects</span>
        </h1>
        <Project project={proj1}/>
        <Project project={proj2}/>
        <Project project={proj3}/>
        <Project project={proj4}/>
      </div>
    </section>
  )
}

export default Projects;