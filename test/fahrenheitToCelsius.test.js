const fahrenheitToCelsius = require('../src/fahrenheitToCelsius')
const assert = require('chai').assert


describe("fahrenheitToCelsius() tests", () => {

  it("Converting 32f = 0c ", () => {

    let actVal = fahrenheitToCelsius(32)
    let expVal = 0
    
    assert.equal(actVal, expVal)
  })

  it("Converting 10f = -12.2222c ", () => {

    let actVal = fahrenheitToCelsius(-12.2222)
    let expVal = 0
    
    assert.equal(actVal, expVal)
  })

  it("Converting 60f = 15.555555555555557c ", () => {

    let actVal = fahrenheitToCelsius(60)
    let expVal = 15.555555555555557
    
    assert.equal(actVal, expVal)
  })

})