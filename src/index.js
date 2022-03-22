function leastLarger(a,i) {
  if (a && a.length > 0) {
    let numberAtIndex = a[i];

    for(i; i<=a.length; i++) {
      if (a[i+1] > numberAtIndex) return i+1;
    }
  }
  return -1;
}

function getNumberOfPages(digitsInSummary){
  return digitsInSummary;
}

module.exports = {
  leastLarger,
  getNumberOfPages
};