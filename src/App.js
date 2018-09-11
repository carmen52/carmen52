import React, { Component } from 'react';
import linkedin from './photos/linkedin.png';
import github from './photos/github.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="tab-bar">
            
          </div>
          <h1 className="App-title">Louisa Beckwith</h1>
          <h2 className="App-title-sub">Developer</h2>
        </header>
        <div className="Values">
          <div className="quote"> 
           <span className="italic"> "It's chaos; be kind."</span>
            <br/>
            - Michelle McNamara
          </div>
        </div>
        <div className="About"> 
          <h1 className="header"> About Me </h1>
          <div className="p-about">
            Hello, my name is Louisa Beckwith. I am a Computer Engineering and Computer Science Major at Northeastern University in Boston, MA. 
            I enjoy learning new things, reading, biking, hiking, and coding. 
            I started coding in high school when I joined a computer programming club, and I fell in love with it. 
            I'm excited to continue to learn and grow as a developer. 
          </div>
        </div>
        <div className="Skills">
          <h1 className="header"> Skills </h1>
        </div> 
        <div className="Interests">
          <h1 className="header"> Interests </h1>
        </div>
        <div className="Footer" hidden={false}>
          <div className="contact-items">
            <div className="item">
              <a href="https://www.linkedin.com/in/louisa-beckwith-2a301110a">
                 <img src={linkedin} height="60px" padding-right="40px"  alt="linkedin logo"/> </a>
            </div>
            <div className="item">
              <a href="https://github.com/carmen52">
                 <img src={github} height="50px"  alt="gitub logo"/> </a>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}



export default App;
