import React from 'react'

class UserPrivacy extends React.Component {

  constructor(props) {
    super(props)




  }






  render() {
    const { toggleUpdates, toggleComms, handleSubmit, prevPage, values } = this.props

    return(



      <div className="form-wrapper">

        <h1>Privacy</h1>

        <form onSubmit={handleSubmit} noValidate>

          <div>
            <input
              type="checkbox"
              name="receiveUpdates"
              noValidate
              onChange={toggleUpdates}
              checked={values.receiveUpdates}
            />
            <label htmlFor="recUpdates">Receive updates about tray.io products by email</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="receiveComms"
              noValidate
              onChange={toggleComms}
              checked={values.receiveComms}
            />
            <label htmlFor="recUpdates">Receive communication by email for other products created by the tray.io team</label>
          </div>









          <div className="createAccount">
            <button
              type="button"
              onClick={prevPage}
            >Go Back</button>
          </div>



          <div className="createAccount">
            <button
              type="submit"
            >Submit</button>
          </div>

        </form>


      </div>




    )
  }
}


export default UserPrivacy
