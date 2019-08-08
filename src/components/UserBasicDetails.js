import React from 'react'

const UserBasicDetails = (props) => {

  const { handleChange, handleSubmit, values } = props

  return (
    <div className="wrapper">
      <div className="form-wrapper">

        <div className="header-bar">
          <span className="active-tab">Basic Info</span>
          <span>Privacy</span>
          <span>Success</span>
        </div>

        <form className="active-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter your full name"
              type="text"
              name="name"
              noValidate
              onChange={handleChange}
              value={values.name}
            />
            {values.nameError && <div className="error-text">{values.nameError}</div>}
          </div>

          <div className="form-field">
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

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter your email address"
              type="email"
              name="email"
              noValidate
              onChange={handleChange}
              value={values.email}
            />
            {values.emailError && <div className="error-text">{values.emailError}</div>}
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter a password"
              type="password"
              name="password"
              noValidate
              onChange={handleChange}
              value={values.password}
            />
            {values.passwordError && <div className="error-text">{values.passwordError}</div>}
          </div>

          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>

  )
}


export default UserBasicDetails
