import React from "react";

const Education = (props) => {
    
    const handleSchoolChange = (e) => {
        props.onSchoolChange(e.target.value);
    }
    const handleDegreeChange = (e) => {
        props.onDegreeChange(e.target.value);
    }
    const handleMajorChange = (e) => {
        props.onMajorChange(e.target.value);
    }
    const handleGPAChange = (e) => {
        props.onGPAChange(e.target.value);
    }
    const handleSchoolFromChange = (e) => {
        props.onSchoolFromChange(e.target.value);
    }
    const handleSchoolToChange = (e) => {
        props.onSchoolToChange(e.target.value);
    }



    return (
        <div id='main'>
        <div className='personalInfo by'> Education </div>
        <form className='formGrid' >
          <label htmlFor='school' className="label">School</label>
          <input type="text" onChange={handleSchoolChange} value={props.education.school} id="school"></input>

          <label htmlFor='degree'>Degree</label>
          <input type="text" onChange={handleDegreeChange} value={props.education.degree} id="degree"></input>

          <label htmlFor='major'>Major / Field of Study</label>
          <input type="text" onChange={handleMajorChange} value={props.education.major} id="major"></input>

          <label htmlFor='GPA'>GPA</label>
          <input type="text" onChange={handleGPAChange} value={props.education.gpa} id="GPA"></input>

          <label htmlFor='from'>From "Year"</label>
          <input type="text" onChange={handleSchoolFromChange} value={props.education.schoolFrom} id="from"></input>

          <label htmlFor='to'>To "Year"</label>
          <input type="text" onChange={handleSchoolToChange} value={props.education.schoolTo} id="to"></input>

        </form>
        
      </div>
     
    )
}



export default Education;