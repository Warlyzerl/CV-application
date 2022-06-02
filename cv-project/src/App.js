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

      education1: {
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

      work1: {
        jobTitle: "",
        employer: "",
        workFrom: "",
        workTo: "",
        description: ""
      },

      work2: {
        jobTitle: "",
        employer: "",
        workFrom: "",
        workTo: "",
        description: ""
      },

      previewMode: false,

      eduAdd1: false,

      workAdd1: false,

      workAdd2: false
      
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

  handleEduAddChange = () => {
    if (!this.state.eduAdd1) {
      this.setState({eduAdd1: true})
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

  handleSchoolChange1 = (value) => {
    this.setState({
      education1: {
      ...this.state.education1,
      school : value}
    })
    console.log(this.state.education);
  }

  handleDegreeChange1 = (value) => {
    this.setState({
      education1: {
      ...this.state.education1,
      degree : value}
    })
    console.log(this.state.education);
  }

  handleGPAChange1 = (value) => {
    this.setState({
      education1: {
      ...this.state.education1,
      gpa : value}
    })
    console.log(this.state.education);
  }

  handleMajorChange1 = (value) => {
    this.setState({
      education1: {
      ...this.state.education1,
      major : value}
    })
    console.log(this.state.education);
  }

  handleSchoolFromChange1 = (value) => {
    this.setState({
      education1: {
      ...this.state.education1,
      schoolFrom : value}
    })
    console.log(this.state.education);
  }
  
  handleSchoolToChange1 = (value) => {
    this.setState({
      education1: {
      ...this.state.education1,
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

  handleJobTitleChange1 = (value) => {
    this.setState({
      work1: {
      ...this.state.work1,
      jobTitle : value}
    })
    console.log(this.state.work);
  }

  handleEmployerChange1 = (value) => {
    this.setState({
      work1: {
      ...this.state.work1,
      employer : value}
    })
    console.log(this.state.work);
  }

  handleWorkFromChange1 = (value) => {
    this.setState({
      work1: {
      ...this.state.work1,
      workFrom : value}
    })
    console.log(this.state.work);
  }

  handleWorkToChange1 = (value) => {
    this.setState({
      work1: {
      ...this.state.work1,
      workTo : value}
    })
    console.log(this.state.work);
  }

  handleDescriptionChange1 = (value) => {
    this.setState({
      work1: {
      ...this.state.work1,
      description : value}
    })
    console.log(this.state.work);
  }

  handleJobTitleChange2 = (value) => {
    this.setState({
      work2: {
      ...this.state.work2,
      jobTitle : value}
    })
    console.log(this.state.work);
  }

  handleEmployerChange2 = (value) => {
    this.setState({
      work2: {
      ...this.state.work2,
      employer : value}
    })
    console.log(this.state.work);
  }

  handleWorkFromChange2 = (value) => {
    this.setState({
      work2: {
      ...this.state.work2,
      workFrom : value}
    })
    console.log(this.state.work);
  }

  handleWorkToChange2 = (value) => {
    this.setState({
      work2: {
      ...this.state.work2,
      workTo : value}
    })
    console.log(this.state.work);
  }

  handleDescriptionChange2 = (value) => {
    this.setState({
      work2: {
      ...this.state.work2,
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
                       eduAdd1={this.state.eduAdd1}
                       education1={this.state.education1}
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
                     onSchoolToChange={this.handleSchoolToChange}>
                     </Education>
          {this.state.eduAdd1 ? (
          <Education 
          education={this.state.education1}
          onSchoolChange={this.handleSchoolChange1}
          onDegreeChange={this.handleDegreeChange1}
          onMajorChange={this.handleMajorChange1}
          onGPAChange={this.handleGPAChange1}
          onSchoolFromChange={this.handleSchoolFromChange1}
          onSchoolToChange={this.handleSchoolToChange1}>
          </Education>) 
          : (<div></div>)}
          <button onClick={this.handleEduAddChange}>Add</button>
          <WorkExperience work={this.state.work}
                          onJobTitleChange={this.handleJobTitleChange}
                          onEmployerChange={this.handleEmployerChange}
                          onWorkFromChange={this.handleWorkFromChange}
                          onWorkToChange={this.handleWorkToChange}
                          onDescriptionChange={this.handleDescriptionChange}>
                          </WorkExperience>
          
        </div>
      )}
        
      </div>
    )
  }
}


export default App;
