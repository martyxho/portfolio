import { useState, useEffect } from "react";

function Hero () {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className={`title name`}>MARTY</div>
        <div className="title name">HO</div>
        <div className="title">WEB</div>
        <div className="title">DEVELOPER</div>
      </div>
    </section>
  )
}

export default Hero;