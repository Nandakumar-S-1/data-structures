function primeFunction(arr) {
  let prime = [];

  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;
    if (arr[i] <= 1) {
      isPrime = false;
    } else {
      for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
        if (arr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      prime.push(arr[i]);
    }
  }
  return prime;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9];
console.log(primeFunction(arr));
