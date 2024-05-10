/*
Exercise 1: maxOfTwoNumbers()

In this exercise, 
xcreate a function named maxOfTwoNumbers. 
xIt should take two numbers as inputs and return the larger number. 
xIf they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

xWrite a function named isAdult. 

xIt should take an age (number) and return 'Adult' if the age is 18 or over 
and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
    if (age >= 21){
        return 'Adult';
    } else {
        return 'Minor';
    }
}


console.log('Exercise 2 Result:', isAdult(21));


/*
Exercise 3: isCharAVowel()

xWrite a function named isCharAVowel that takes a single character as an argument. 
xIt should return true if the character is a vowel and false otherwise. 
For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (x) => {
    if (x === 'a') {
        return true;
    } else if (x === 'e') {
        return true;
    } else if (x === 'i') {
        return true;
    } else if (x === 'o') {
        return true;
    } else if (x === 'o') {
        return true;
    } else {
        return false;
    }
}



console.log('Exercise 3 Result:', isCharAVowel("a"));


/*
Exercise 4: generateEmail()

Cxreate a function named generateEmail. 
xIt should take two strings: a name and a domain. 
xIt should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => {
    return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


/*
Exercise 5: greetUser()

xDefine a function called greetUser. 
xIt should take a name and a time of day (morning, afternoon, evening) 
xand return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (named, timeofday) => {
    if (timeofday === 'morning') {
        return `Good ${timeofday} ${named}`;
    } else if (timeofday === 'afternoon') {
        return `Good ${timeofday} ${named}`;
    } else if (timeofday === 'evening') {
        return `Good ${timeofday} ${named}`;
    }
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: reverseString()

xDefine a function called reverseString. 
xIt should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

for help I used the example solution I found below searching for the .reverse() method I have used to while doing code challenges on the web. 
-> https://freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
Complete the exercise in the space below:

I am unsure if the solution below will be flagged as plagarism so I am rewriting
 my code to reflect things I have learned in class
const reverseString = (string) => {
    let spltstr =  string.split('');
    let reversed = spltstr.reverse();
    let joined = reversed.join('');
    return joined;
}
*/
const reverseString = (string) => {
    reversed = '';
    for (let i = string.length-1; i >= 0; i-- ) {
        reversed += string[i];
    }
    return reversed;
}

console.log('Exercise 6 Result:', reverseString("rockstar"));;


/*
Exercise 7: checkPalindrome()

xDefine a function called checkPalindrome. 
xIt should take a string and return true if the string is a palindrome 
(reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/
const checkPalindrome = (string) => {
    let spltstr = string.split('');
    let reversed = spltstr.reverse();
    if (spltstr === reversed) {
        return true;
    } else {
        return false;
    }
}


console.log('Exercise 7 Result:', checkPalindrome("radar"));


/*
Exercise 8: maxOfThree()

xDefine a function, maxOfThree. 
xIt should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (x, y, z) => {
    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
}

console.log('Exercise 8 Result:', maxOfThree(5, 10, 8));

/*
Exercise 9: calculateTip()

xCreate a function called calculateTip. 
xIt should take two arguments: the bill amount and the tip percentage 
(as a whole number). The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (bill, percent) => {
    return bill * (percent/100);

}

console.log('Exercise 9 Result:', calculateTip(50, 20));


/*
Exercise 10: convertTemperature()

xWrite a function named convertTemperature. 
xIt takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
xConvert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

I had to google the conversion formulas

Complete the exercise in the space below:
*/

const convertTemperature = (temp, scale) => {
    if (scale === 'C') {
        cToF = (temp * (9/5)) + 32;
        return `${cToF} (Fahrenheit)`;
    } else {
        fToC = (temp - 32) * (5/9);
        return `${converted} (Celcius)`;
    }
}

console.log('Exercise 10 Result:', convertTemperature(32, "C"));


/*
Exercise 11: basicCalculator()

xCreate a function named basicCalculator. 
xIt should take three arguments: two numbers and a string representing an 
operation ('add', 'subtract', 'multiply', 'divide'). 
xPerform the provided operation on the two numbers. 
In operations where the order of numbers is important, treat the first parameter 
as the first operand and the second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (x, y, operator) => {
    if (operator == 'add') {
        return x + y;
    } else if (operator == 'subtract') {
        return x - y;
    } else if (operator == 'multiply') {
        return x * y;
    } else if (operator == 'divide') {
        return x / y;
    } 
}

console.log('Exercise 11 Result:', basicCalculator(10, 5, "subtract"));


/*
Exercise 12: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter grade (A, B, C, D, F). 
For example, 90 and above yields an 'A', 80-89 is a 'B', and 70-79 is a 'C', 60-69 is a 'D' 
and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (score) => {
    if (score < 60) {
        return 'F';
    } else if (score < 70) {
        return 'D';
    } else if (score < 80) {
        return 'C';
    } else if (score < 90) {
        return 'B';
    } else if (score >= 90) {
        return 'A';
    } 
}

console.log('Exercise 12 Result:', calculateGrade(85));



/*
Exercise 13: createUsername()

Define a function called createUsername. It should take a first name and a last name and return a username. The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre12'.

I am not sure if I am missing something but there are 8 chars in Samantha and 5 in Green 
and last I checked 8 + 5 = 13 not 12 so I do not know if I missed something.
Complete the exercise in the space below:
*/

const createUsername = (first, last) => {
    start = first.slice(0, 3);
    end = last.slice(0, 3) ; 
    
    total = first.length + last.length;
    return `${start}${end}${ total}`;
}

console.log('Exercise 13 Result:', createUsername("Samantha", "Green"));

/*
Exercise 14: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

const numArgs = (...numbers) => {
    let count = 0;
    for (let num = 0; num < numbers.length; num++) {
        count += numbers[num];
    }
    return count;
}
console.log('Exercise 14 Result:', numArgs(1, 2, 3, 4));
