import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Personal from './components/Personal.js';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';


class App extends Component {
  constructor() {
    super();
  

    this.state = {
      personalInfo: {
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        phone: "",
        email: "",
        link: ""
      },

      education: {
        school: "",
        degree: "",
        major: "",
        from: "d",
        to: ""
      },

      work: {
        jobTitle: "",
        employer: "",
        workFrom: "",
        workTo: "",
        description: ""
      },
      
      previewMode: false
    }
  }

  render() {

    return(
      <div id='root'>
        <div className='header'>
          <div> CV Builder App </div>
          <div className="by">by Willie Zeng</div>
        </div>
        <div className='buttons'>
          <button className='working'>Work Mode</button>
          <button className='preview'>Preview Mode</button>
        </div>
        <div className='login'>
          <button className='login'>Login</button>
        </div>
        {this.state.previewMode ? (
        <div>
          <Personal></Personal>
        </div>
      ) : (
        <div>
          <Personal personalInfo={this.state.personalInfo}></Personal>
          <Education education={this.state.education}></Education>
          <WorkExperience workList={this.state.work}></WorkExperience>
        </div>
      )}
        
      </div>
    )
  }
}



export default App;
