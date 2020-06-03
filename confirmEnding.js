// Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function reverseString(str) {
    let len = str.length -1;
    var new_str = '';
    for(var i=len;i>=0;i--){
      new_str += str[i]
    }
    str = new_str;
    return str;
  }
function confirmEnding(str, target) {
  let tLen = target.length-1;
  let sLen = str.length-1;
  let result = '';
  let j = sLen;
  while( tLen >= 0){
      result +=str[j];
      j--;
      tLen--;
  }
  console.log(reverseString(result))
  if(reverseString(result) === target){
    return true
  }
  return false;
}

confirmEnding("Bastian", "n");



// confirmEnding("Bastian", "n") should return true.
// confirmEnding("Congratulation", "on") should return true.
// confirmEnding("Connor", "n") should return false.
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
// confirmEnding("He has to give me a new name", "name") should return true.
// confirmEnding("Open sesame", "same") should return true.
// confirmEnding("Open sesame", "pen") should return false.
// confirmEnding("Open sesame", "game") should return false.
// confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
// confirmEnding("Abstraction", "action") should return true.
// Your code should not use the built-in method .endsWith() to solve the challenge.