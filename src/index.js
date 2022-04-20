function leastLarger(a, i) {
  if (a && a.length > 0) {
    const numberAtIndex = a[i];

    let j = i;
    for (j; j <= a.length; j += 1) {
      if (a[j + 1] > numberAtIndex) return j + 1;
    }
  }
  return -1;
}

function getNumberOfPages(digitsInSummary) {
  if (digitsInSummary === 0) return 0;
  let numberOfPages = 1;

  for (let i = 1; i < digitsInSummary; i += 1) {
    numberOfPages += 1 / Math.trunc(numberOfPages).toString().length;
  }

  if (numberOfPages % 1 === 0.5) numberOfPages -= 0.5;

  return Math.round(numberOfPages);
}

module.exports = {
  leastLarger,
  getNumberOfPages,
};
