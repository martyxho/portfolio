import ProjectLinks from "./ProjectLinks";

function Project ({ project }) {
  return (
    <article className="project">
      <div className="project_wrapper">
        <div className="project_imgContainer">
          <img className="project_img" src={project.imgSrc} />
        </div>
        <div className="project_info">
          <div className="project_text">
            <h2>{project.name}</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <ProjectLinks siteUrl={project.siteUrl} github={project.github}/>
        </div>
      </div>
    </article>
  )
}

export default Project;