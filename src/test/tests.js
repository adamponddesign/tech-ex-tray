/* global describe, it */
/* eslint-disable no-undef */

const expect = chai.expect

// describe: The description of the tests that are about to be run. It is useful for grouping tests together.
// will be displayed above the test results

describe('Feet and Inches to CM tests', () => {


  // it: describes a single test. it generally begins a sentence: "it should be red", "it should be an object", etc.
  it('should return a number', done => {


    //expect: This is the actual test. Basically we are saying "I expect A to be B".
    expect(ftAndInchesToCm(5, 10)).to.be.a('number')

    //done: The done method tells mocha that this specific test is over, and it's time to move on to the next test. This is particularly useful if we need to test something asynchronously, eg a HTTP request or anything that takes a good amount of time.
    done()
  })
  
})
