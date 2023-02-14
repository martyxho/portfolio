import ProjectLink from "./ProjectLink";

function ProjectLinks({siteUrl, github}) {
  return (
    <div className="project_links">
      <ProjectLink url={siteUrl} text='Live Site' />
      <ProjectLink url={github} text='Github' />
    </div>
  )
}

export default ProjectLinks;