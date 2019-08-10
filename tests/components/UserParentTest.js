
// import React from 'react'
import { assert } from 'chai'
// const assert = require('chai').assert
// const sayHello = require('../app').sayHello   // where to find the file containing the functions to test
// const addNumbers = require('../app').addNumbers   // where to find the file containing the functions to test
import UserParent from '../../src/components/UserParent.js'


//results

validateName = UserParent.validateName()


describe('userParent', () => {

  describe('validateName()', () => {

    //•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    it('function validateName should return type string', () => {

      // let result = app.sayHello()
      assert.typeOf(validateName, 'string')

    })
  })
})
