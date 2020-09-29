const jsArray = require('../src/jsArray')
const expect = require('chai').expect

describe("anagram() ", () =>{
  it("[0, 1, 0, 3, 12] should be [1, 3, 12, 0, 0]", () => {

    const actVal = jsArray([0, 1, 0, 3, 12])
    expect(actVal).to.have.ordered.members([1, 3, 12, 0, 0]);
  });  
})