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
  let numberOfPages;

  if (digitsInSummary >= 0 && digitsInSummary <= 9) {
    numberOfPages = digitsInSummary;
  }
  if (digitsInSummary > 9 && digitsInSummary <= 99) {
    numberOfPages = 9 + (digitsInSummary - 9) / 2;
  }
  if (digitsInSummary > 99 && digitsInSummary <= 999) {
    numberOfPages = 54 + digitsInSummary - 99 - (digitsInSummary - 99) / 2;
  }

  return numberOfPages;
}

module.exports = {
  leastLarger,
  getNumberOfPages,
};
