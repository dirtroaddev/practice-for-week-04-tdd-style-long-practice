function returnsThree() {
  // Your code here
    return 3;
}

function reciprocal(n) {
  // Your code here

  if( n < 1 || n > 100) throw new RangeError();
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};