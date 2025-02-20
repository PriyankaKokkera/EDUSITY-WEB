import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomottow's Leaders Today</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, incidunt. Maiores consequatur fugiat eligendi accusamus unde culpa, at explicabo deleniti, praesentium perferendis quam ea voluptate consequuntur ad. Assumenda, maxime neque.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, nam doloribus cum dolor deleniti tempore alias nisi quam odio sint accusantium delectus sit repellendus itaque harum laborum ut nesciunt dolorum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam culpa voluptate magni quam temporibus voluptas, quasi ratione aspernatur similique placeat repellendus doloremque totam nobis reprehenderit sunt quidem minus ab.</p>
      </div>
    </div>
  )
}


export default About
