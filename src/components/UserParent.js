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

function validatePassword(password) {
  let passwordError = ''
  if (password.length < 3) {
    passwordError = 'Please enter a valid password'
  }
  return passwordError
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
      emailError: '',
      passwordError: ''
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
    const passwordError = validatePassword(password)



    if (nameError.length > 0) {
      this.setState({ nameError })
    } else {
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
