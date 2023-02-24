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
              {project.text}
            </p>
          </div>
          <ProjectLinks siteUrl={project.siteUrl} github={project.github}/>
        </div>
      </div>
      <span className="darkTrigger"></span>
    </article>
  )
}

export default Project;