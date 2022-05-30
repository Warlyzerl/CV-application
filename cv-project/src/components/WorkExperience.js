import React from "react";

const WorkExperience = (props) => {
    const {workList} = props;

    const handleInputChange = (e) => {
        let category = e.target.id;
        this.setState({
            work: {category : e.target.value}
        })
    }

    return (
        <div id='main'>
        <div className='personalInfo by'> Work Experience </div>
        <form className='formGrid' >
          <label htmlFor='jobTitle' className="label">Job Title</label>
          <input onChange={handleInputChange} type="text" id="jobTitle"></input>

          <label htmlFor='employer' className="label">Employer</label>
          <input onChange={handleInputChange} type="text" id="employer"></input>

          <label htmlFor='workFrom'>From</label>
          <input onChange={handleInputChange} type="text" id="workFrom"></input>

          <label htmlFor='workTo'>To</label>
          <input onChange={handleInputChange} type="text" id="workTo"></input>

          <label htmlFor='description'>Description of Duties</label>
          <input onChange={handleInputChange} type="text" id="description"></input>
          <button type="submit">Save</button>
        </form>
      </div>
    )
}

export default WorkExperience;
