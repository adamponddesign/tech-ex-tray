import React from 'react'
import UserBasicDetails from './UserBasicDetails'
import UserPrivacy from './UserPrivacy'
import Success from './Success'

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
      receiveComms: false      
    }

    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toggleUpdates = this.toggleUpdates.bind(this)
    this.toggleComms = this.toggleComms.bind(this)

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

  toggleUpdates() {
    this.setState(prevState => ({
      receiveUpdates: !prevState.receiveUpdates
    }))
  }

  toggleComms() {
    this.setState(prevState => ({
      receiveComms: !prevState.receiveComms
    }))
  }






  render() {
    console.log(this.state)


    const { page, name, role, email, password, receiveUpdates, receiveComms } = this.state
    const values = { name, role, email, password, receiveUpdates, receiveComms }


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
          <UserPrivacy
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            handleChange={this.handleChange}
            toggleUpdates={this.toggleUpdates}
            toggleComms={this.toggleComms}
            values={values}
          />
        )
      case 3:
        return (

          <Success
            values={values}
          />

        )
    }
  }
}

export default UserParent
