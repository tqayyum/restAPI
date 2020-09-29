const calculateGrade = require('../src/calculateGrade')
const expect = require('chai').expect;

describe("calculateGrade() tests", () => {

  it("Grade A returned for % >= 90", () => {

    const actualResult = calculateGrade(100, 100);

    expect(actualResult).to.equal('A');
  });

  it("Grade B returned for % >= 80 and <90", () => {

    const actualResult = calculateGrade(179, 200);

    expect(actualResult).to.equal('B');
  });

  it("Grade C returned for % >= 70 and <80", () => {

    const actualResult = calculateGrade(75, 100);

    expect(actualResult).to.equal('C');
  });
})