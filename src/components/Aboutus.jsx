import React from 'react'
import herovid from "./../assets/aboutus_hero.mp4"
import solar from "./../assets/solar.png"
import batteires from "./../assets/batteries.png"
import vehicles from "./../assets/electricVehicles.png"
import { useState } from 'react'
import game from "./../assets/game.mp4"
import machine from "./../assets/machine.png"
import team from "./../assets/team.png"
import yay from "./../assets/yay.mp4"
const Aboutus = () => {
  const [activeImage, setActiveImage] = useState(solar)
  const [join, setJoin] = useState(false)
  function handleClick(img){
    setActiveImage(img)
  }
  return (
    <div className='about-us-container'>
        <video autoPlay loop muted playsInline className="hero-video">
            <source src={herovid} type="video/mp4" />
        </video>
        <div className="random-txt">
          <h1>The Future is Sustainable</h1>
          <p className="contact-sm-txt">We are building a world powered by solar energy, running on batteries and transported by electric vehicles. Explore the most recent impact of our products, people and supply chain.</p>
          <button>Explore Impact</button>
        
        </div>  
        <div class="fade-image-container"></div>
        <div className="black-background-container">
          <div className="leftTitle_rightText">
            <h2>Power Earth</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla ducimus autem consequatur omnis eos, alias recusandae error molestias. Ut, odit laudantium officia totam, ex blanditiis aut distinctio laboriosam dignissimos aliquid cupiditate accusantium ad beatae. Assumenda ipsa omnis iste facilis dicta recusandae corrupti, harum saepe nesciunt nemo fugit beatae sunt sequi aut temporibus magni. Maxime iste, quis laboriosam cumque ipsam rem ullam, quam veritatis nam porro quas explicabo cupiditate sed voluptatibus!</p>
          </div>
          <div className="changing-img">
            <img src={solar} alt="" className={activeImage == solar ? "active" : "" } />
            <img src={batteires} alt="" className={activeImage == batteires ? "active" : "" } />
            <img src={vehicles} alt="" className={activeImage == vehicles ? "active" : "" } />
          </div>

          <div className="clicking-container">
            <div className={`clicker ${activeImage == solar? "active" : ""}`} onClick={() => handleClick(solar)}>
              <h4>Lorem, ipsum.</h4>
              <p className="content-sm-txt">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className={`clicker ${activeImage == batteires? "active" : ""}`} onClick={() => handleClick(batteires)}>
              <h4>Lorem, ipsum.</h4>
              <p className="content-sm-txt">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
            <div className={`clicker ${activeImage == vehicles? "active" : ""}`} onClick={() => handleClick(vehicles)}>
              <h4>Lorem, ipsum.</h4>
              <p className="content-sm-txt">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <video autoPlay loop muted playsInline className="hero-video">
            <source src={game} type="video/mp4" />
        </video>
        <div className="leftTitle_rightText">
            <h2>Make it (Ridiculously) Fun</h2>
            <p>Our vehicles are some of the safest in the world. After safety, our goal is to make every Tesla the most fun you could possibly have in a vehicle. We build features that make being in your vehicle more enjoyable—from gaming to movies, easter eggs and more. With over-the-air software updates, we regularly introduce features at the push of a button.</p>
        </div>
          <img src={machine} alt="" className='aboutus-img'/>
          <div className="leftTitle_rightText">
            <h2>The Machine That Builds the Machine</h2>
            <p>To shift humanity away from fossil fuels, we need extreme scale. Headquartered in Texas, we operate six huge, vertically integrated factories across three continents. With over 100,000 employees, our teams design, build, sell and service our products in-house.</p>
        </div>
          <img src={team} alt="" className='aboutus-img'/>
          <div className="leftTitle_rightText">
            <h2>The Tesla Team</h2>
            <p>Using a first-principles approach, we solve some of the world’s biggest problems. If you’ve done exceptional work, join us in tackling the next generation of engineering, manufacturing and operational challenges.</p>
        </div>
        <video autoPlay loop muted playsInline className="hero-video">
            <source src={yay} type="video/mp4" />
        </video>
        <div className="random-txt">
          <h1 style={{color: "white"}}>Join Us</h1>
          <button className='bottom-btn' onClick={() => setJoin(true)}>See Jobs</button>
          {join && <div className="join">
            <h2>No Jobs Available</h2>
          </div>}
        </div>
        
        </div>
        
    </div>
  )
}

export default Aboutus
