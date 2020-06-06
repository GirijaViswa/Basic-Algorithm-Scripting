// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function isPrime(number){
    for (let i = 2; i <= number; i++) {
        if (number % i === 0 && number != i) {
          return false;
        }
      }
      return true;
  }
  function sumPrimes(num) {
    if (num === 1) {
      return 0;
    }
    // Check if your number is not prime
    if (isPrime(num) === false) {
      // for non primes check the next number down from your maximum number, do not add anything to your answer
      return sumPrimes(num - 1);
    }
  
    // Check if your number is prime
    if (isPrime(num) === true) {
      // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
      return num + sumPrimes(num - 1);
    }
  }
  
  sumPrimes(10);
  



// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.