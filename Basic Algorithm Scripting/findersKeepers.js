// Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
function findElement(arr, func) {
    let num = 0;
    let newArr= [];
    arr.forEach(ele => {
      if(func(ele)){
        newArr.push(ele)
      }
    })
    if(newArr.length > 0){
      return newArr[0];
    }
    else{
      return undefined;
    }
  }
  
//   findElement([1, 2, 3, 4], num => num % 2 === 0);
//   findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
//   findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.  