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
        schoolFrom: "",
        schoolTo: ""
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

  togglePreview = (e) => {
    if (!this.state.previewMode) {
      this.setState({previewMode: true});
    }
  }

  toggleWorking = (e) => {
    if (this.state.previewMode) {
      this.setState({previewMode: false});
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
          <button onClick={this.toggleWorking} className='working'>Work Mode</button>
          <button onClick={this.togglePreview} className='preview'>Preview Mode</button>
        </div>
        <div className='login'>
          <button className='login'>Login</button>
        </div>
        {this.state.previewMode ? (
        <div>
          
        </div>
      ) : (
        <div>
          <Personal personalInfo={this.state}></Personal>
          <Education education={this.state.education}></Education>
          <WorkExperience workList={this.state.work}></WorkExperience>
        </div>
      )}
        
      </div>
    )
  }
}



export default App;
