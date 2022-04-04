# 1. [Least Larger](https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4)

### Domain:
- The input must have a set of numbers and an index
- The function will return the index of the next larger number to the one indicated with the passed index
- If there is no larger number in the set, the function returns -1 

#### Pomodoro 1
- ✅ Define the domain
- ✅ The input must include a set of numbers and an index
- ✅ When there is only one number in the array the function returns -1
- ✅ When there are two numbers and there’s a larger one return that ones index

#### Pomodoro 2
- ✅ When there are 3 numbers and the next index number is lower, return the next larger [2,1,3]
- ✅ Refactor
- Review

# 2. [How many pages in a book?](https://www.codewars.com/kata/622de76d28bf330057cd6af8)

### Domain:
- The input of the function is the number of digits in the summary
- The summary of a book is made by adding all the number of pages of the book
- The result of the function is the number of pages in the book

### User Story 1
- AS A reader
- I WANT TO give the number of digits in a summary
- SO THAT I can get the number of pages in a book

#### UAT 1.1
- GIVEN the getNumberOfPages function
- WHEN we enter a summary with a number of digits lower than 9
- THEN the function result is the same number of pages

#### UAT 1.2
- GIVEN the getNumberOfPages function
- WHEN we enter a summary with a number of digits higher than 9
- THEN the function result is the sum of the consecutives numbers

#### Pomodoro 1
- ✅ Write the domain
- ✅ Write the user stories and UATs
- ✅ Write the test for 0 and 1 pages
- Write the test for 11 pages

#### Pomodoro 2 (wasn't able to test)
- Refactor tests: 
  - when the number is between 1 and 9 it sums 1 to the summary
  - when the number is between 10 and 99 it sums 2 to the summary

#### Pomodoro 3
- Refactor tests: 
  - ✅ when the number is between 1 and 9 it sums 1 to the summary
  - ✅ when the number is between 10 and 99 it sums 2 to the summary
  - when the number is between 10 and 99 it sums 2 to the summary

#### Pomodoro 4
- Refactor tests: 
  - ✅ when the number is between 10 and 99 it sums 2 to the summary
#### Tech debt
- Use test each for more test cases