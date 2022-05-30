import React from "react";

const Education = (props) => {
    const {education} = props;

    return (
        <div id='main'>
        <div className='personalInfo by'> Education </div>
        <form className='formGrid' >
          <label htmlFor='school' className="label">School</label>
          <input type="text" id="school"></input>

          <label htmlFor='degree'>Degree</label>
          <input type="text" id="degree"></input>

          <label htmlFor='major'>Major / Field of Study</label>
          <input type="text" id="major"></input>

          <label htmlFor='from'>From 'Date'</label>
          <input type="text" id="from"></input>

          <label htmlFor='to'>To 'Date'</label>
          <input type="text" id="to"></input>
          <button type="submit">Save</button>
        </form>
      </div>
     
    )
}

export default Education;