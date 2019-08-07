import React from 'react'

class UserPrivacy extends React.Component {

  constructor(props) {
    super(props)


    this.continue = this.continue.bind(this)
    this.back = this.back.bind(this)
  }

  continue(e) {
    e.preventDefault()
    this.props.nextPage()
  }

  back(e) {
    e.preventDefault()
    this.props.prevPage()
  }



  render() {
    const { toggleUpdates, toggleComms } = this.props

    return(



      <div className="form-wrapper">

        <h1>Privacy</h1>

        <form onSubmit={this.continue} noValidate>

          <div>
            <input
              type="checkbox"
              name="receiveUpdates"
              noValidate
              onChange={toggleUpdates}
            />
            <label htmlFor="recUpdates">Receive updates about tray.io products by email</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="receiveComms"
              noValidate
              onChange={toggleComms}
            />
            <label htmlFor="recUpdates">Receive communication by email for other products created by the tray.io team</label>
          </div>












          <div className="createAccount">
            <button type="submit">Submit</button>
          </div>

          <div className="createAccount">
            <button
              onClick={this.back}
            >Go Back</button>
          </div>
        </form>


      </div>




    )
  }
}


export default UserPrivacy
