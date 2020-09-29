const calTax = require('../src/int')
const expect = require('chai').expect

describe("calTax() ", () =>{
  it("342 should be 3039.52 ", () => {
    const actVal = calTax('342, 8.8875')
    const expVal = 3039.52
    expect(actVal).to.equal(expVal);
  });
  
  // it("1002 should be 8905.28 ", () => {
  //   const actVal = calTax('1002, 8.8875')
  //   const expVal = 8905.28
  //   expect(actVal).to.equal(expVal);
  // });
  
  // it("523 should be 4648.16 ", () => {
  //   const actVal = calTax('523, 8.8875')
  //   const expVal = 4648.16
  //   expect(actVal).to.equal(expVal);
  // });
  
})


