import React, { Component } from 'react';
import linkedin from './photos/linkedin.png';
import github from './photos/github.png';
import underline from './photos/underline.png';
import react from './photos/react.png';
import java from './photos/java.png';
import javascript from './photos/javascript.png';
import html from './photos/html.png';
import css from './photos/css.png';
import git from './photos/git.png';
import csharp from './photos/c#.png';
import cplusplus from './photos/c++.png';
import python from './photos/python.png';
import sql from './photos/sql.png';
import reading from './photos/reading.jpg';
import waterpolo from './photos/waterpolo.jpg';
import biking from './photos/biking.jpg';
import gardening from './photos/gardening.jpg';
import coding from './photos/coding.jpg';
import lifting from './photos/lifting.jpg';
import about_1 from './photos/about_1.jpg';
import about_2 from './photos/about_2.jpg';
import about_3 from './photos/about_3.jpg';
import about_4 from './photos/about_4.JPG';
import about_5 from './photos/about_5.jpg';
import about_6 from './photos/about_6.jpg';
import about_8 from './photos/about_8.jpg';
import about_imgs from './photos/about_imgs.PNG';
import gmail from './photos/gmail.png';
import './App.css';

import Fade from 'react-reveal/Fade';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="tab-bar">
            
          </div>
          <Fade >
          <h1 className="App-title">Louisa Beckwith</h1>
          <h2 className="App-title-sub">Developer</h2>
          </Fade>
        </header>
        <div className="Values">
        <Fade >
          <div className="quote"> 
           <span className="italic"> "It's chaos. Be kind."</span>
            <br/>
            <span className="person" > - Michelle McNamara </span>
            
          </div>
          
        </Fade>
        </div>
        <div className="photoset_1">
        <Fade>
            <img src={about_imgs} width="100%" />
              {/* <img src={about_1} className="about-img"/>
              <img src={about_5} className="about-img"/>
              <img src={about_2} className="about-img"/>
              <img src={about_4} className="about-img"/>
              <img src={about_3} className="about-img"/>
              <img src={about_6} className="about-img"/>
              <img src={about_8} className="about-img"/> */}
        </Fade>
        </div>
        <div className="About"> 
          <Fade >
          
          <h1 className="header"> About Me </h1>
          <div className="p-about">
            Hello, my name is Louisa Beckwith. I am a Computer Engineering and Computer Science Major at Northeastern University in Boston, MA. 
            I enjoy learning new things, reading, biking, hiking, and coding. 
            I started coding in high school when I joined a computer programming club, and I fell in love with it. 
            I'm excited to continue to learn and grow as a developer. 
          </div>
          
          </Fade>
        </div>
        <div className="Skills">
          <Fade >
          <h1 className="header"> Skills </h1>
          <div className="skills-items">
            <img src={react} className="skills-icon"/>
            <img src={javascript} className="skills-icon"/>
            <img src={html} className="skills-icon"/>
            <img src={css} className="skills-icon"/>
            <img src={java} className="skills-icon"/>
            <img src={cplusplus} className="skills-icon"/>
            <img src={csharp} className="skills-icon"/>
            <img src={python} className="skills-icon"/>
            <img src={sql} className="skills-icon"/>
            <img src={git} className="skills-icon"/>
          </div> 
          </Fade>
        </div> 
        <div className="Projects">
        <Fade >
          <h1 className="header"> Projects </h1>
          <div className="project-item">
              <a className="project-item-l" href="https://nugwc.ccs.neu.edu" target="_blank" > NU Grad Women Coders Website </a>
            </div> 
          <div className="project-item">
              <a className="project-item-l" href="https://kenbeckwithauctions.com" target="_blank"  > Ken Beckwith Auctions Website </a>
          </div> 
        </Fade>
        </div>
        <div className="Interests">
          <Fade >
          <h1 className="header"> Interests </h1>
          <div className="photoset">
            <div id="gardening" className="interests-img"> 
              <div className="interest-desc"> Urban Gardening </div> </div>
            <div id="reading" className="interests-img"> 
              <div className="interest-desc"> Reading Sci Fi and Mystery </div></div>
            <div id="biking" className="interests-img"> 
              <div className="interest-desc"> Biking around Boston </div></div>
            <div id="coding" className="interests-img">
              <div className="interest-desc">  Designing and Coding </div></div>
            <div id="waterpolo" className="interests-img"> 
              <div className="interest-desc"> Water Polo </div></div>
            <div id="lifting" className="interests-img">
              <div className="interest-desc">  Lifting </div></div>
            {/* <img src={gardening} className="interests-img"/>
            <img src={reading} className="interests-img"/>
            <img src={biking} className="interests-img"/>
            <img src={coding} className="interests-img"/>
            <img src={waterpolo} className="interests-img"/>
            <img src={lifting} className="interests-img"/> */}
          </div>
          </Fade>
        </div>
        <div className="Footer" hidden={false}>
          <div className="contact-items"> 
            <div className="item">
              <a href="https://www.linkedin.com/in/louisa-beckwith-2a301110a">
                 <img src={linkedin} height="20px" alt="linkedin logo"/> </a>
            </div>
            <div className="item">
              <a href="mailto:beckwith.l@husky.neu.edu">
                 <img src={gmail} height="17px"  alt="gitub logo"/> </a>
            </div> 
            <div className="item">
              <a href="https://github.com/carmen52">
                 <img src={github} height="17px"  alt="gitub logo"/> </a>
            </div> 
            
          </div>
          <div className="copyright"> © Louisa Beckwith 2018 </div>
        </div>
      </div>
    );
  }
}



export default App;
