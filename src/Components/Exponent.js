function Exponent() {
    let n = 10;
    let base = 2;
    let res = 1;
    let final = 1;
    let sqrt = Math.sqrt(n);
    let integerSqrt = Math.floor(sqrt);
  
    console.log(integerSqrt)
    for (let i = 1; i <= integerSqrt; i++) {
      res *= base;
    }
    console.log(res)
  
    if (integerSqrt * integerSqrt === n) {
      final = Math.pow(res, integerSqrt)
    } else {
      let diff = n - integerSqrt * integerSqrt ;
      let init = Math.pow(base, diff)
      final *= res * res * res * init;
    }
    console.log(final)
    return final;
  }
  
 export default Exponent();
  