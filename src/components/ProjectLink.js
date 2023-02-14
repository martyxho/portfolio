function ProjectLink({url, text}) {
  return (
    <a className="link_wrapper" href={url} target="_blank" rel="noopener noreferrer">
      <div className="link">
        <span>{text}</span>
      </div>
      <div className="link_arrow">
      </div>
    </a>
  )
}

export default ProjectLink;

