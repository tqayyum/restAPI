/*
2. Write a function that takes two strings (say s and t) and determines if one string is an anagram of another.
For example:
Input: s = "anagram", t = "nagaram" // Output: true
Input: s = "rat", t = "car" // Output: false
Note:
You may assume the string contains only lowercase alphabets.
*/

let s = 'anagram'
let t = 'nagaram'

let anagram = () => {
    if (s.split("").sort().join("") === t.split("").sort().join("")){
      console.log(`This is an anagram`)
    } else { 
      console.log(`This is not an anagram`)}
}

console.log(anagram())