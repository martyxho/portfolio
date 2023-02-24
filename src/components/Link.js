import arrow from '../assets/images/arrow.png';

function Link({url, text}) {
  return (
    <a className="link_wrapper" href={url} target="_blank" rel="noopener noreferrer">
      <div className="link">
        <span>{text}</span>
      </div>
      <div className="link_arrow">
        <img src={arrow} />
      </div>
    </a>
  )
}

export default Link;

