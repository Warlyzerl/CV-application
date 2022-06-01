import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Personal from './components/Personal.js';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Preview from './components/Preview';
import html2pdf from 'html2pdf.js';


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
        schoolTo: "",
        gpa: ""
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

  generatePdf = () => {
    var element = document.getElementById('pdf');
    html2pdf(element);
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

  handleSchoolChange = (value) => {
    this.setState({
      education: {
      ...this.state.education,
      school : value}
    })
    console.log(this.state.education);
  }

  handleDegreeChange = (value) => {
    this.setState({
      education: {
      ...this.state.education,
      degree : value}
    })
    console.log(this.state.education);
  }

  handleGPAChange = (value) => {
    this.setState({
      education: {
      ...this.state.education,
      gpa : value}
    })
    console.log(this.state.education);
  }

  handleMajorChange = (value) => {
    this.setState({
      education: {
      ...this.state.education,
      major : value}
    })
    console.log(this.state.education);
  }

  handleSchoolFromChange = (value) => {
    this.setState({
      education: {
      ...this.state.education,
      schoolFrom : value}
    })
    console.log(this.state.education);
  }
  
  handleSchoolToChange = (value) => {
    this.setState({
      education: {
      ...this.state.education,
      schoolTo : value}
    })
    console.log(this.state.education);
  }

  handleJobTitleChange = (value) => {
    this.setState({
      work: {
      ...this.state.work,
      jobTitle : value}
    })
    console.log(this.state.work);
  }

  handleEmployerChange = (value) => {
    this.setState({
      work: {
      ...this.state.work,
      employer : value}
    })
    console.log(this.state.work);
  }

  handleWorkFromChange = (value) => {
    this.setState({
      work: {
      ...this.state.work,
      workFrom : value}
    })
    console.log(this.state.work);
  }

  handleWorkToChange = (value) => {
    this.setState({
      work: {
      ...this.state.work,
      workTo : value}
    })
    console.log(this.state.work);
  }

  handleDescriptionChange = (value) => {
    this.setState({
      work: {
      ...this.state.work,
      description : value}
    })
    console.log(this.state.work);
  }

  render() {

    return(
      <div id='root'>
        <div className='notsticky'>
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
        </div>
        {this.state.previewMode ? (
        <div>
          <div className='genPDF'>
            <button onClick={this.generatePdf}>Generate PDF</button>
          </div>
          <div id="pdf">
              <Preview personalInfo={this.state.personalInfo}
                       education={this.state.education}
                       work={this.state.work} 
                       ></Preview>
          </div>
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
          <Education education={this.state.education}
                     onSchoolChange={this.handleSchoolChange}
                     onDegreeChange={this.handleDegreeChange}
                     onMajorChange={this.handleMajorChange}
                     onGPAChange={this.handleGPAChange}
                     onSchoolFromChange={this.handleSchoolFromChange}
                     onSchoolToChange={this.handleSchoolToChange}></Education>
          <WorkExperience work={this.state.work}
                          onJobTitleChange={this.handleJobTitleChange}
                          onEmployerChange={this.handleEmployerChange}
                          onWorkFromChange={this.handleWorkFromChange}
                          onWorkToChange={this.handleWorkToChange}
                          onDescriptionChange={this.handleDescriptionChange}></WorkExperience>
          
        </div>
      )}
        
      </div>
    )
  }
}


export default App;
