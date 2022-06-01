import React from "react";

const WorkExperience = (props) => {

    const handleTitleChange = (e) => {
        props.onJobTitleChange(e.target.value);
    }
    const handleEmployerChange = (e) => {
        props.onEmployerChange(e.target.value);
    }
    const handleWorkFromChange = (e) => {
        props.onWorkFromChange(e.target.value);
    }
    const handleWorkToChange = (e) => {
        props.onWorkToChange(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        props.onDescriptionChange(e.target.value);
    }

    return (
        <div id='main'>
        <div className='personalInfo by'> Work Experience </div>
        <form className='formGrid' >
          <label htmlFor='jobTitle' className="label">Job Title</label>
          <input onChange={handleTitleChange} type="text" value={props.work.jobTitle} id="jobTitle"></input>

          <label htmlFor='employer' className="label">Employer</label>
          <input onChange={handleEmployerChange} type="text" value={props.work.employer} id="employer"></input>

          <label htmlFor='workFrom'>From</label>
          <input onChange={handleWorkFromChange} type="text" value={props.work.workFrom} id="workFrom"></input>

          <label htmlFor='workTo'>To</label>
          <input onChange={handleWorkToChange} type="text" value={props.work.workTo} id="workTo"></input>

          
          <label htmlFor='descriptionBox'>Description of Duties</label>
          <input className="descriptionsquare" onChange={handleDescriptionChange} type="text" value={props.work.description} id="description"></input>
          
          <button type="submit">Add</button>
        </form>
      </div>
    )
}

export default WorkExperience;
