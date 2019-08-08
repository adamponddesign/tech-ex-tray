import React from 'react'


const Success = (props) => {
  console.log(JSON.stringify(props.values))
  return (
    <div>
      <h1>Success</h1>
      <p>Please verify your email address, you should have received an email from us already!</p>
    </div>
  )
}

export default Success
