const calTax = require('../src/int')
const expect = require('chai').expect

describe("calTax() ", () =>{
  it("[342, 1002, 523] should be [3039.52, 8905.27, 4648.16]", () => {

    const actVal = parseFloat(calTax([342, 1002, 523], 8.8875))
    const expVal = [3039.52, 8905.27, 4648.16]
    expect(actVal).to.not.equal(expVal);
  });  
  
  it("342 should be 3039.52 ", () => {
    const actVal = parseFloat(calTax(342, 8.8875))
    const expVal = 3039.52
    expect(actVal).to.equal(expVal);
  });

  it("1002 should be 8905.27 ", () => {
    const actVal = parseFloat(calTax(1002, 8.8875))
    const expVal = 8905.27
    expect(actVal).to.equal(expVal);
  });
  
  it("523 should be 4648.16 ", () => {
    const actVal = parseFloat(calTax(523, 8.8875))
    const expVal = 4648.16
    expect(actVal).to.equal(expVal);
  });
  
})