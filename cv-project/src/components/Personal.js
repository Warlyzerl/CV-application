import React from "react";

const Personal = (props) => {
    const {personalInfo} = props;

    return (
        <div id='main'>
        <div className='personalInfo by'> Personal Information </div>
        <form className='formGrid' >
          <label htmlFor='name' className="label">Name</label>
          <input type="text" id="name"></input>

          <label htmlFor='lastName'>Last Name</label>
          <input type="text" id="lastName"></input>

          <label htmlFor='address1'>Address 1</label>
          <input type="text" id="address1"></input>

          <label htmlFor='address2'>Address 2</label>
          <input type="text" id="address2"></input>

          <label htmlFor='phone'>Phone Number</label>
          <input type="text" id="phone"></input>

          <label htmlFor='email'>Email Address</label>
          <input type="text" id="email"></input>

          <label htmlFor='linkedIn'>LinkedIn</label>
          <input type="text" id="linkedIn"></input>
          <button type="submit">Save</button>
        </form>
      </div>
    )
}

export default Personal;