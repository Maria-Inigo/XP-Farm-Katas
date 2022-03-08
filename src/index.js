function leastLarger(a,i) {
  if (a && a.length > 0) {
    let numberAtIndex = a[i];
    let nextNumber = a[i+1];
    let nextIndex = i+1;
    if (nextNumber > numberAtIndex) return nextIndex;
  }
  return -1;
}
