// bool function that returns true if num is prime and false if dont
// num: number
function IsPrime(num) {
  if (num <= 0) {
    return true; // tomer says 0 is prime
  }
  for (let i = 0; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return true;
    }
  }
  return false;
}

// list function that returns true if num is prime and false if dont
// num: number
function GetNPrime(n) {
  let primes = [];
  let x = 0;
  while (primes.length != n) {
    if (IsPrime(x)) {
      primes.push(x);
    }
    x++;
  }
  return primes;
}
