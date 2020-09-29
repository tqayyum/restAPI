/*
2. Write a function that takes two strings (say s and t) and determines if one string is an anagram of another.
For example:
Input: s = "anagram", t = "nagaram" // Output: true
Input: s = "rat", t = "car" // Output: false
Note:
You may assume the string contains only lowercase alphabets.
*/
let anagram = (s,t) => {
    if (s.split("").sort().join("") === t.split("").sort().join("")){
      return true
    } else { 
      return false
    }
}
module.exports = anagram;