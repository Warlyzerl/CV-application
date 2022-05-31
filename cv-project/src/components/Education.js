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
          <input type="text" onChange={handleSchoolChange} value={props.school} id="school"></input>

          <label htmlFor='degree'>Degree</label>
          <input type="text" onChange={handleDegreeChange} value={props.degree} id="degree"></input>

          <label htmlFor='major'>Major / Field of Study</label>
          <input type="text" onChange={handleMajorChange} value={props.major} id="major"></input>

          <label htmlFor='from'>From 'Date'</label>
          <input type="text" onChange={handleSchoolFromChange} value={props.schoolFrom} id="from"></input>

          <label htmlFor='to'>To 'Date'</label>
          <input type="text" onChange={handleSchoolToChange} value={props.schoolTo} id="to"></input>

          <button type="submit">Save</button>
        </form>
      </div>
     
    )
}

export default Education;