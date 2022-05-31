import React from "react";

const Personal = (props) => {
    const { stateTest } = props;

    const handleNameChange = (e) => {
        stateTest.setState({previewMode: true});
        this.setState(stateTest);
            // Using this to test if the state in App.js is actually changing
        
    }

    const handleLastNameChange = (e) => {
        props.setState ({
            lastName: e.target.value
        })
    }

    const handleAddress1Change = (e) => {
        props.setState ({
            address1: e.target.value
        })
    }

    const handleAddress2Change = (e) => {
        props.setState ({
            address2: e.target.value
        })
    }

    const handlePhoneChange = (e) => {
        props.setState ({
            phone: e.target.value
        })
    }

    const handleEmailChange = (e) => {
        props.setState ({
            email: e.target.value
        })
    }

    const handleLinkedInChange = (e) => {
        props.setState ({
            link: e.target.value
        })
    } 

    return (
        <div id='main'>
        <div className='personalInfo by'> Personal Information </div>
        <form className='formGrid' >
          <label htmlFor='name' className="label">Name</label>
          <input type="text" onChange={handleNameChange} value={props.name} id="name"></input>

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

          <button type="submit">Save</button>
        </form>
      </div>
    )
}

export default Personal;