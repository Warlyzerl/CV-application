import React from "react";

const WorkExperience = (props) => {
    

    const handleTitleChange = (e) => {
        props.setState ({
            jobTitle: e.target.value
        })
    }

    const handleEmployerChange = (e) => {
        props.setState ({
            employer: e.target.value
        })
    }

    const handleWorkFromChange = (e) => {
        props.setState ({
            workFrom: e.target.value
        })
    }

    const handleWorkToChange = (e) => {
        props.setState ({
            workTo: e.target.value
        })
    }

    const handleDescriptionChange = (e) => {
        props.setState ({
            description: e.target.value
        })
    }

    return (
        <div id='main'>
        <div className='personalInfo by'> Work Experience </div>
        <form className='formGrid' >
          <label htmlFor='jobTitle' className="label">Job Title</label>
          <input onChange={handleTitleChange} type="text" value={props.jobTitle} id="jobTitle"></input>

          <label htmlFor='employer' className="label">Employer</label>
          <input onChange={handleEmployerChange} type="text" value={props.employer} id="employer"></input>

          <label htmlFor='workFrom'>From</label>
          <input onChange={handleWorkFromChange} type="text" value={props.workFrom} id="workFrom"></input>

          <label htmlFor='workTo'>To</label>
          <input onChange={handleWorkToChange} type="text" value = {props.workTo} id="workTo"></input>

          <label htmlFor='description'>Description of Duties</label>
          <input onChange={handleDescriptionChange} type="text" value = {props.description} id="description"></input>
          <button type="submit">Save</button>
        </form>
      </div>
    )
}

export default WorkExperience;
