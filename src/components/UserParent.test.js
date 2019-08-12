/* global describe, it, expect */

import '../test_setup'

import React from 'react'
import UserParent from './UserParent'
import UserBasicDetails from './UserBasicDetails'
import UserPrivacy from './UserPrivacy'
import Success from './Success'
import { mount } from 'enzyme'



describe('<UserParent />', () => {
  // check UserBasicDetails component is rendering correctly **************************************
  it('should display <UserBasicDetails /> component by default', () => {
    const wrapper = mount(<UserParent />)
    expect(wrapper.find(UserBasicDetails).length).toBe(1)
  })


  // check UserBasicDetails displays errors correctly when empty form submitted ********************
  it('should display errors when UserBasicDetails form is submitted with no data', () => {
    const wrapper = mount(<UserParent />)
    wrapper.find('form').simulate('submit')
    wrapper.update()
    expect(wrapper.find('.error-text').length).toBe(3)
  })

  // check UserBasicDetails displays error when invalid email entered *******************
  it('should display error msg when invalid email is entered', () => {
    const wrapper = mount(<UserParent />)
    wrapper.setState({ name: 'Adam Pond', email: 'adam.pond@gmail', password: 'Abcdef1230' })
    wrapper.find('form').simulate('submit')
    wrapper.update()
    const error = wrapper.find('.error-text')
    expect(error.text()).toEqual('Please enter a valid email address')
  })

  // check UserBasicDetails displays error when invalid password entered ****************
  it('should display error msg when invalid password is entered', () => {
    const wrapper = mount(<UserParent />)
    wrapper.setState({ name: 'Adam Pond', email: 'adam.pond@gmail.com', password: 'Abcdef2' })
    wrapper.find('form').simulate('submit')
    wrapper.update()
    const error = wrapper.find('.error-text')
    expect(error.text()).toEqual('Please enter a valid password - must be more than 9 characters long, have at least one number, one uppercase character and one lowercase character')
  })

  // check UserPrivacy component renders when form passes validation *******************************
  it('should render the <UserPrivacy /> component if no errors', () => {
    const wrapper = mount(<UserParent />)
    wrapper.setState({ name: 'Adam Pond', email: 'adam.pond@gmail.com', password: 'Abcdef1230' })
    wrapper.find('form').simulate('submit')
    wrapper.update()
    expect(wrapper.find(UserPrivacy).length).toBe(1)
  })

  // check Success component renders when UserPrivacy submit button clicked **************************
  it('should render <Success /> component following submit of privacy form', () => {
    const wrapper = mount(<UserParent />)
    wrapper.setState({ name: 'Adam Pond', email: 'adam.pond@gmail.com', password: 'Abcdef1230' })
    wrapper.find('form').simulate('submit')
    wrapper.update()
    wrapper.find('form').simulate('submit')
    expect(wrapper.find(Success).length).toBe(1)
  })





})
