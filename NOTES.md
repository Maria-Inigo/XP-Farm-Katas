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
- The input of the fucntion is the number of digits in the summary
- The summary of a book is made by adding all the number of pages of the book
- The result of the function is the number of pages in the book

### User Story 1
- AS A reader
- I WANT TO give the number of digits in a summary
- SO THAT I can get the number of pages in a book

#### UAT 1.1
- GIVEN the getNumberOfPages function
- WHEN we enter the number of digits in a summary 
- THEN the function should calculate the sum of ordered page numbers 

#### Pomodoro 1
- ✅ Write the domain
- ✅ Write the user stories and UATs
- Write the test for 0 pages