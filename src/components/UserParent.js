import React from 'react'
import UserBasicDetails from './UserBasicDetails'
import UserPrivacy from './UserPrivacy'
import Success from './Success'

// email regex test
const emailRegex = RegExp( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ )
// password regex test
const passwordRegex = RegExp( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/ )


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
      emailError: '',
      passwordError: ''
    }

    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleUpdates = this.toggleUpdates.bind(this)
    this.toggleComms = this.toggleComms.bind(this)
    this.validateName = this.validateName.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    this.validatePassword = this.validatePassword.bind(this)


  }






  // validation functions ••••••••••••••••••••••••••••••••••••••••••••••••••••••••
  validateName(name) {
    let nameError = ''
    if (name.length === 0) {
      nameError = 'Name is required'
    }
    return nameError
  }

  validateEmail(email) {
    let emailError = ''
    if (!emailRegex.test(email)) {
      emailError = 'Please enter a valid email address'
    }
    return emailError
  }

  validatePassword(password) {
    let passwordError = ''
    if (!passwordRegex.test(password)) {
      passwordError = 'Please enter a valid password - must be more than 9 characters long, have at least one number, one uppercase character and one lowercase character'
    }
    return passwordError
  }
  // ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

  // move to next page function
  nextPage() {
    const { page } = this.state
    this.setState({
      page: page + 1,
      emailError: '',
      nameError: '',
      passwordError: ''

    })
  }

  // move to prev page function
  prevPage() {
    const { page } = this.state
    this.setState({
      page: page - 1
    })
  }

  // toggle check boxes on privacy page •••••••••••••••••••••••••••••••
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
  // ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

  handleSubmit(e) {
    e.preventDefault()

    const { name, email, password } = this.state
    // use validate functions to check if any errors
    // set result to variable
    const nameError = this.validateName(name)
    const emailError = this.validateEmail(email)
    const passwordError = this.validatePassword(password)


    // if variable contains an error, set the error to state
    if (nameError.length > 0) {
      this.setState({ nameError })
    } else {
    // or if it doesn't contain an error, reset the state to an empty string
      this.setState({ nameError: '' })
    }


    if (emailError.length > 0) {
      this.setState({ emailError })
    } else {
      this.setState({ emailError: '' })
    }

    if (passwordError.length > 0) {
      this.setState({ passwordError })
    } else {
      this.setState({ passwordError: '' })
    }


    if (nameError.length > 0 || emailError.length > 0 || passwordError.length > 0 ) {
      return
    } else (

      // if all form fields pass validation move onto next page
      this.nextPage()
    )
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {

    const { page, name, role, email, password, receiveUpdates, receiveComms, nameError, emailError, passwordError } = this.state
    const values = { name, role, email, password, receiveUpdates, receiveComms, nameError, emailError, passwordError }



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
            handleSubmit={this.handleSubmit}
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
