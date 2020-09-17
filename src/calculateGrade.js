let calculateGrade = (studentScore, totalMaxScore) => {

  if (typeof studentScore !== "number" || typeof totalMaxScore !== "number") {
    console.log(`I can only work with numbers!`);
    return;
  }

  if (studentScore < 0 || totalMaxScore < 0) {
    console.log(`Score can't be negative!`);
    return;
  }

  if (studentScore > totalMaxScore) {
    console.log(`Student score (${studentScore}) can't greater than max score (${totalMaxScore})!`);
    return;
  }

  let percent = (studentScore / totalMaxScore) * 100;
  let letterGrade = '';

  if (percent >= 90) {
    letterGrade = 'A';
  } else if (percent >= 80) {
    letterGrade = 'B';
  } else if (percent >= 70) {
    letterGrade = 'C';
  } else if (percent >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }

  return letterGrade;
}

module.exports = calculateGrade;