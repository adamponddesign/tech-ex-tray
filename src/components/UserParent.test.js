import React from 'react'
import UserParent from './UserParent'
import { shallow } from 'enzyme'

// test('add', () => {
//   const component = shallow(<UserParent />)
//   const value = component.add(1,2)
//
//   // 'expect' is an assertion
//   expect(value).toBe(3)
//
//
// })

describe('<UserParent />', () => {
  it('message', () => {
    const component = shallow(<UserParent />)
    const value = component.add(1,2)
    expect(value).toBe(3)
  })

})
