import React from 'react'

class UserBasicDetails extends React.Component {

  constructor(props) {
    super(props)


    this.continue = this.continue.bind(this)
  }

  continue(e) {
    e.preventDefault()
    this.props.nextPage()
  }



  render() {
    const { handleChange } = this.props

    return(



      <div className="form-wrapper">

        <h1>USER</h1>

        <form onSubmit={this.continue} noValidate>

          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter your full name"
              type="text"
              name="name"
              noValidate
              onChange={handleChange}
            />
          </div>

          <div className="role">
            <label htmlFor="role">Role</label>
            <input
              placeholder="Enter your current role"
              type="text"
              name="role"
              noValidate
              onChange={handleChange}
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
            />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter a password"
              type="password"
              name="password"
              noValidate
              onChange={handleChange}
            />
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
