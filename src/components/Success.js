import React from 'react'


const Success = (props) => {

  // console.log form data in JSON format
  console.log(JSON.stringify(props.values))

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <div className="header-bar">
          <span>Basic Info</span>
          <span>Privacy</span>
          <span id="success-tab">Success</span>
        </div>

        <div className="active-form success-container">
          <img id="tick" src="https://i.imgur.com/papjooT.png" alt="Green Tick" height="100" width="100" />
          <p id="success-text">Please verify your email address, you should have received an email from us already!</p>
        </div>
      </div>
    </div>
  )
}

export default Success
