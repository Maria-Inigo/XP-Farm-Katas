function leastLarger(a,i) {
  if (a && a.length > 0) {
    let numberAtIndex = a[i];

    let nextIndex = i+1;
    let nextNumber = a[nextIndex];
    if (nextNumber > numberAtIndex) return nextIndex;

    nextIndex = nextIndex+1;
    nextNumber = a[nextIndex];
    if (nextNumber > numberAtIndex) return nextIndex;
  }
  return -1;
}

module.exports = {
  leastLarger
};