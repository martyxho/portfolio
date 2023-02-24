function scrollTrigger() {
  const element = document.querySelector('.darkTrigger');
  const bounding = element.getBoundingClientRect();
  console.log(bounding);
  if (bounding.y < 1423) {
    document.documentElement.classList = 'dark';
    if (bounding.y < -518) {
      window.addEventListener('scroll', scrollTriggerContact);
    } else {
      window.removeEventListener('scroll', scrollTriggerContact);
    }
  } else {
    document.documentElement.classList = '';
  }
}

function scrollTriggerContact() {
  const element = document.querySelector('.contact');
  const bounding = element.getBoundingClientRect();
  const home = document.querySelector('.home');
  const contact = document.querySelector('.contact');
  if (bounding.y < 1000) {
    if (bounding.y < 400) {
      home.style.transform = 'scale(.9, 1)';
    } else {
      const y = bounding.y - 400;
      const perc = y / 600;
      const scalePerc = (perc * .1) + .9;
      home.style.transform = `translate3d(0px, 0px, 0px) scale(${scalePerc}, 1)`;
    }
  } else {
    home.style = '';
    contact.style = '';
  }
}

export default scrollTrigger;