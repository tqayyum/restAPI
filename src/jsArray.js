/*
1. Given an array numbers, write a function to move all 0's to the end of it while
maintaining the relative order of the non-zero elements.
Example:
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
Note:
Try to:
- Do this in-place without making a copy of the array
- Minimize the total number of operations
*/

let zero = (array) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element === 0){
      let temp = array.splice(i,1)
       array.push(temp[0])
    }
  }
  return array
}

module.exports = zero;