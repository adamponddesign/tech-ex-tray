/* global describe, it, expect */

import '../test_setup'

import React from 'react'
import UserParent from './UserParent'
import UserBasicDetails from './UserBasicDetails'
import UserPrivacy from './UserPrivacy'
import { mount } from 'enzyme'



describe('<UserParent />', () => {
  it('should display <UserBasicDetails /> component by default', () => {
    const wrapper = mount(<UserParent />)
    expect(wrapper.find(UserBasicDetails).length).toBe(1)
  })

  it('should display errors when submitted with no data', () => {
    const wrapper = mount(<UserParent />)
    wrapper.find('form').simulate('submit')
    wrapper.update()

    expect(wrapper.find('.error-text').length).toBe(3)

  })

  it('should render the <UserPrivacy> component if no errors', () => {
    const wrapper = mount(<UserParent />)
    wrapper.setState({ name: 'Adam Pond', email: 'adam.pond@gmail.com', password: 'Abcdef1230' })
    wrapper.find('form').simulate('submit')
    wrapper.update()

    expect(wrapper.find(UserPrivacy).length).toBe(1)

  })

})
