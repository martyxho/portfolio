import { useState, useEffect } from "react";

function Hero () {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className={`title name`}>MARTY</div>
        <div className="title name">HO</div>
        <div className="title"><span className="title-color">WEB</span></div>
        <div className="title"><span className="title-color">DEV</span>ELOPER</div>
      </div>
    </section>
  )
}

export default Hero;