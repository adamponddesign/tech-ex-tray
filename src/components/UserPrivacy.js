import React from 'react'

const UserPrivacy = (props) => {

  const { toggleUpdates, toggleComms, handleSubmit, prevPage, values } = props

  return(
    <div className="wrapper">
      <div className="form-wrapper">

        <div className="header-bar">
          <span>Basic Info</span>
          <span className="active-tab">Privacy</span>
          <span>Success</span>
        </div>

        <form className="active-form" onSubmit={handleSubmit} noValidate>
          <div className="checkbox-area">
            <input
              type="checkbox"
              name="receiveUpdates"
              noValidate
              onChange={toggleUpdates}
              checked={values.receiveUpdates}
            />
            <div>
              <label className="checkbox-label" htmlFor="recUpdates">Receive updates about tray.io products by email</label>
            </div>
          </div>

          <div className="checkbox-area">
            <input
              type="checkbox"
              name="receiveComms"
              noValidate
              onChange={toggleComms}
              checked={values.receiveComms}
            />
            <div>
              <label className="checkbox-label" htmlFor="recUpdates">Receive communication by email for other products created by the tray.io team</label>
            </div>
          </div>


          <div className="back">
            <button
              type="button"
              onClick={prevPage}
            >Go Back</button>
          </div>

          <div className="submit">
            <button
              type="submit"
            >Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserPrivacy
