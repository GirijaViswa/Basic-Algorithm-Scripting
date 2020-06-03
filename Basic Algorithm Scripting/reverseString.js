// Basic Algorithm Scripting: Reverse a String
// Reverse the provided string.

// You may need to turn the string into an array before you can 
// reverse it.

// Your result must be a string.


function reverseString(str) {
    let len = str.length -1;
    var new_str = '';
    for(var i=len;i>=0;i--){
      new_str += str[i]
    }
    str = new_str;
    return str;
  }
  
  reverseString("hello");

// reverseString("hello") should return a string.
// reverseString("hello") should become "olleh".
// reverseString("Howdy") should become "ydwoH".
// reverseString("Greetings from Earth") should return "htraE morf sgniteerG".