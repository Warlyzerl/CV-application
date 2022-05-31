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

  handleNameChange = (value) => {
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        firstName : value}
    })
    console.log(this.state.personalInfo);
  }

  handleLastNameChange = (value) => {
    this.setState({
      personalInfo: {
      ...this.state.personalInfo,
      lastName : value}
    })
    console.log(this.state.personalInfo);
  }

  handleAddress1Change = (value) => {
    this.setState({
      personalInfo: {
      ...this.state.personalInfo,
      address1 : value}
    })
    console.log(this.state.personalInfo);
  }

  handleAddress2Change = (value) => {
    this.setState({
      personalInfo: {
      ...this.state.personalInfo,
      address2 : value}
    })
    console.log(this.state.personalInfo);
  }

  handlePhoneChange = (value) => {
    this.setState({
      personalInfo: {
      ...this.state.personalInfo,
      phone : value}
    })
    console.log(this.state.personalInfo);
  }

  handleEmailChange = (value) => {
    this.setState({
      personalInfo: {
      ...this.state.personalInfo,
      email : value}
    })
    console.log(this.state.personalInfo);
  }

  handleLinkChange = (value) => {
    this.setState({
      personalInfo: {
      ...this.state.personalInfo,
      link : value}
    })
    console.log(this.state.personalInfo);
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
          <Personal personalInfo={this.state.personalInfo} 
                    onNameChange={this.handleNameChange} 
                    onLastNameChange={this.handleLastNameChange}
                    onAddress1Change={this.handleAddress1Change}
                    onAddress2Change={this.handleAddress2Change}
                    onPhoneChange={this.handlePhoneChange}
                    onEmailChange={this.handleEmailChange}
                    onLinkChange={this.handleLinkChange}
                    togglePreview={this.togglePreview}
                    ></Personal>
          <Education education={this.state.education}></Education>
          <WorkExperience workList={this.state.work}></WorkExperience>
          
        </div>
      )}
        
      </div>
    )
  }
}



export default App;
