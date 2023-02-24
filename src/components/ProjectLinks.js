import Link from "./Link";

function ProjectLinks({siteUrl, github}) {
  return (
    <div className="project_links">
      <Link url={siteUrl} text='Live Site' />
      <Link url={github} text='Github' />
    </div>
  )
}

export default ProjectLinks;