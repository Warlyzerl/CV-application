import React from "react";

const Personal = (props) => {

    const handleNameChange = (e) => {
        props.onNameChange(e.target.value);
    }
    const handleLastNameChange = (e) => {
        props.onLastNameChange(e.target.value);
    }
    const handleAddress1Change = (e) => {
        props.onAddress1Change(e.target.value);
    }
    const handleAddress2Change = (e) => {
        props.onAddress2Change(e.target.value);
    }
    const handlePhoneChange = (e) => {
        props.onPhoneChange(e.target.value);
    }
    const handleEmailChange = (e) => {
        props.onEmailChange(e.target.value);
    }
    const handleLinkedInChange = (e) => {
        props.onLinkChange(e.target.value);
    } 

    return (
        <div id='main'>
        <div className='personalInfo by'> Personal Information </div>
        <form className='formGrid' >
          <label htmlFor='name' className="label">Name</label>
          <input type="text" onChange={handleNameChange} value={props.firstName} id="name"></input>

          <label htmlFor='lastName'>Last Name</label>
          <input type="text" onChange={handleLastNameChange} value={props.lastName} id="lastName"></input>

          <label htmlFor='address1'>Address 1</label>
          <input type="text" onChange={handleAddress1Change} value={props.address1} id="address1"></input>

          <label htmlFor='address2'>Address 2</label>
          <input type="text" onChange={handleAddress2Change} value={props.address2} id="address2"></input>

          <label htmlFor='phone'>Phone Number</label>
          <input type="text" onChange={handlePhoneChange} value={props.phone} id="phone"></input>

          <label htmlFor='email'>Email Address</label>
          <input type="text" onChange={handleEmailChange} value={props.email} id="email"></input>

          <label htmlFor='linkedIn'>LinkedIn</label>
          <input type="text" onChange={handleLinkedInChange} value={props.link} id="linkedIn"></input>

        </form>
      </div>
    )
}

export default Personal;