function SectionTitle({classname, num, title}) {
  return (
    <h1 className={classname}>
      <span className="color">{num}</span>
      <span>{title}</span>
    </h1>
  )
}

export default SectionTitle;