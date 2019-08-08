import React from 'react'

class UserBasicDetails extends React.Component {

  constructor(props) {
    super(props)



  }





  render() {
    // console.log(this.props.values.errors)
    const { handleChange, handleSubmit, values } = this.props

    return(



      <div className="form-wrapper">

        <h1>USER</h1>

        <form onSubmit={handleSubmit} noValidate>

          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter your full name"
              type="text"
              name="name"
              noValidate
              onChange={handleChange}
              value={values.name}
            />
            {values.nameError && <div>{values.nameError}</div>}
          </div>

          <div className="role">
            <label htmlFor="role">Role</label>
            <input
              placeholder="Enter your current role"
              type="text"
              name="role"
              noValidate
              onChange={handleChange}
              value={values.role}
            />
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter your email address"
              type="email"
              name="email"
              noValidate
              onChange={handleChange}
              value={values.email}
            />
            {values.emailError && <div>{values.emailError}</div>}
          </div>


          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter a password"
              type="password"
              name="password"
              noValidate
              onChange={handleChange}
              value={values.password}
            />
            {values.passwordError && <div>{values.passwordError}</div>}
          </div>







          <div className="createAccount">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>




    )
  }
}


export default UserBasicDetails
