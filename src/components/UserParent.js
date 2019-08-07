import React from 'react'
import UserBasicDetails from './UserBasicDetails'
// import UserPrivacy from './UserPrivacy'
// import Success from './Success'

class UserParent extends React.Component {

  constructor() {
    super()

    this.state = {
      page: 1,
      name: '',
      role: '',
      email: '',
      password: '',
      receiveUpdates: false,
      recieveComms: false
    }

    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  // move to next page
  nextPage() {
    const { page } = this.state
    this.setState({
      page: page + 1
    })
  }

  // move to prev page
  prevPage() {
    const { page } = this.state
    this.setState({
      page: page - 1
    })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }







  render() {
    console.log(this.state)
    const { page, name, role, email, password, receiveUpdates, recieveComms } = this.state
    const values = { page, name, role, email, password, receiveUpdates, recieveComms }


    switch (page) {
      case 1:
        return (
          <UserBasicDetails
            nextPage={this.nextPage}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <h1>page 2</h1>
        )
      case 3:
        return (

          <h1>page 3</h1>

        )
    }
  }
}

export default UserParent




















{/*  // <UserPrivacy
  //   nextPage={this.nextPage}
  //   prevPage={this.prevPage}
  //   handleChange={this.handleChange}
  //   values={values}
  // /> */}
