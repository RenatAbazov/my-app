import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import { Helmet } from 'react-helmet'
import logo from '../../Images/MeGraduated.png';

const TITLE = 'About Me'
function About () {
  return(
    <>
      <div className='about'>
        <h1> About Me </h1>
          <div className='aboutMeText'>
          <img src={logo} className="myPersonalImage"/>
          <p>
            Hi, my name is Renat. I'm a software developer working for Epic Systems.
            I graduated from the University of Virginia in May 2020 with a bachelor of science in
            computer science. I've always been fascinated with the ability to create something virtual
            that people can actually use, this website being an example of that. If you want to see
            some of my past work check out the projects pages.
          </p>
          <br/>
          <p>
            Aside from computer science I enjoy photography, playing the piano, and playing basketball.
            I've added a photography section that I will add to occasionally
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;
