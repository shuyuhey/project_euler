// Even Fibonacci numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

'use strict';
var ans = 0, prev = 1, current = 1, fibo_list = [];

while(ans = prev + current, ans < 4000000){
  prev = current;
  current = ans;
  fibo_list.push(ans);
}

console.log(fibo_list.reduce(function(prev, current){
  if (current % 2 === 0) {
    return prev + current;
  }
  return prev;
}));

// node javascript/002.js  0.04s user 0.02s system 97% cpu 0.062 total