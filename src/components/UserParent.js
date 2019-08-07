import React from 'react'
import UserBasicDetails from './UserBasicDetails'
import UserPrivacy from './UserPrivacy'
import Success from './Success'


// email regex test
const emailRegex = RegExp(
  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

function validateName(name) {
  let nameError = ''
  if (name.length === 0) {
    nameError = 'Name is required'
  }
  return nameError
}

function validateEmail(email) {
  let emailError = ''
  if (!emailRegex.test(email)) {
    emailError = 'Please enter a valid email address'
  }
  return emailError
}

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
      receiveComms: false,
      nameError: '',
      emailError: ''
    }

    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleUpdates = this.toggleUpdates.bind(this)
    this.toggleComms = this.toggleComms.bind(this)

  }

  handleSubmit(e) {
    e.preventDefault()

    const { name, email, password } = this.state

    const nameError = validateName(name)
    const emailError = validateEmail(email)



    if (nameError.length > 0) {
      this.setState({ nameError })

    }
    if (emailError.length > 0) {
      this.setState({ emailError })
    }


    if (nameError.length > 0 || emailError.length > 0 ) {
      return
    } else (

      // if all form fields pass validation move onto next page
      this.nextPage()

    )


  }

  // move to next page function
  nextPage() {
    const { page } = this.state
    this.setState({
      page: page + 1
    })
  }

  // move to prev page function
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


    const { page, name, role, email, password, receiveUpdates, receiveComms, errors } = this.state
    const values = { name, role, email, password, receiveUpdates, receiveComms, errors }


    switch (page) {
      case 1:
        return (
          <UserBasicDetails
            nextPage={this.nextPage}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
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
