// Here is a collection of 100 JavaScript questions, divided into groups of 10, based on topics 1-8, with increasing complexity.
//Basic Console Usage (10 Questions)

// 1. Log your name and favorite hobby to the console.
//  var log = console.log("My Name Is Vrushali And Favorite Hobby IS Coding");

//2.Perform and log the result of 45*2-10.
// var result = (45*2-10);
// console.log(result);

//3. Use console.log() to display the current year.
// const currentYear = new Date().getFullYear();
// console.log("Current Year is "+ currentYear);

//4.Create two variables for first and last name. Concatenate and log them.
// var firstName = "Vrushali";
// var lastName = "Uphade";
// var Concatenate = (firstName+" "+lastName);
// console.log(Concatenate);

//5.Track the value of a variable by logging it before and after updating.



//6.Use console.error() to simulate an error message.
// console.error('something happens wrong...')

//7.Log the square of the number 12 to the console.
// console.log("Square of 12 is :- " +12*12);

//8.Print the type of a variable holding the value true.
// var value = true;
// console.log(typeof(value));

//9.Create a variable holding your age and log whether iteams greater than 18.
// var age = 20;
// if (age>18) {
//     console.log(age);  
// } 

//10.Log the result of 100/0 and observe the output.
// console.log("Result is "+100/0);

//2. Variables and Data Types (10 Questions)

//11. Declare a variable using let and log its value.
// let myName = "Vrushali";
// console.log(myName);

//12.Create a constant to store the value of PI and log it.
// const PI = 3.14;
// console.log("Value of pi is "+PI);

//13.reassign a value to a variable declared with let and log the result.
// let Value = 21;
// Value = 20;
// console.log(Value);

//14. Check the type of null and log it.
// var checkType = null;
// console.log(typeof(checkType));

//15.Create a variable with a number as a string (e.g., "25")and log its type.
// var value = "25";
// console.log(typeof(value));

//16. Use typeof to check the type of a boolean variable.

//17.Create three variables of types string, number, and log their values.
// var value1 = "vrushali";
// var value2 = true ;
// var value3 = 20;
// console.log(value1);
// console.log(value2);
// console.log(value3);

//18.Declare a variable without assigning a value. log its type.
// var value ;
// console.log(value);

//19.Create a variable with undefined and log its type.
// var a;
// console.log(typeof(a));

//20.Use const to create an array.Try reassning the array and observe the error.
// const arr = ["vrushali",21,66];
// console.log(arr);
// arr = ['vru',21,66];

//3.Loops (10 Questions)
//21. Write a for loop to print number form 1 to 50.
// for(var i = 1; i<51;i++){
// console.log(i);
// }

// 22.Use a while loop to sum the number form 1 to 10.
//  var i = 1;
//  var sum = 0;
//  while(i<=10){
//  sum += i;
//  i++;
//  }
//  console.log(sum);

// 	23.	Create a for...of loop to log each character of the string "JavaScript".
// 	24.	Write a for loop that skips even numbers between 1 and 20.
// 	25.	Use a do...while loop to log numbers from 5 to 1.
// 	26.	Create a for loop that calculates the factorial of 5.
// 	27.	Write a nested loop to print a 3x3 grid of numbers.
// 	28.	Use a for loop to reverse an array [1, 2, 3, 4].
// 	29.	Write a while loop that logs numbers from 1 to 100 divisible by 5.
// 	30.	Use a for...in loop to iterate over an object and log its keys.

// 4. Arrays (10 Questions)
// 	31.	Create an array of your top 5 favorite movies and log it.
//  let arrFavMovies = ["Tare jamin per","3 idiots","Dangal","Bhool Bhulaiyaa","Animal"];
//  console.log(arrFavMovies);
 
// 	32.	Find and log the second element of an array.
// let fruits =["apple","banana","coconut","chiku"];
// console.log(fruits[2]);

// 	33.	Add two new elements to the start of an array using .unshift().
// let fruits =["apple","banana","coconut","chiku"];
// fruits.unshift("orange","mango");
// console.log(fruits);

// 	34.	Remove the last element of an array and log the updated array.
// let fruits =["apple","banana","coconut","chiku"];
// console.log(fruits.pop());
// console.log(fruits);

// 	35.	Use .slice() to extract the first three elements of an array
// let fruits =["apple","banana","coconut","chiku","mango"];
//  console.log( fruits.slice(2));

// 	36.	Find the index of a specific element in an array using .indexOf().
// let fruits =["apple","banana","coconut","chiku"];
// console.log(fruits.indexOf("banana"));
 
// 	37.	Check if a value exists in an array using .includes().
// let fruits =["apple","banana","coconut","chiku","mango"];
// console.log( fruits.includes("banana"));

// 	38.	Combine two arrays [1, 2] and [3, 4] using .concat().
// let fruits =["apple","banana","coconut","chiku"];
// let frts = ["mango"];
// console.log(fruits.concat(frts));

// 	39.	Sort an array of numbers [5, 2, 9, 1] in ascending order.
// let arr = [5,2,9,1];
// console.log(arr.sort());

// 	40.	Write a program that creates a copy of an array without mutating the original.
// let fruits =["apple","banana","coconut","chiku"];
// let myfruits = fruits;
// console.log(myfruits);

// 5. Functions (10 Questions)
// 	41.	Write a function to check if a number is even or odd.

// 	42.	Create a function to calculate the area of a circle with a given radius.
// 	43.	Write a function that accepts an array and returns the sum of its elements.
// 	44.	Create a function that checks if a string starts with a specific character.
// 	45.	Write a function to find the maximum of two numbers.
// 	46.	Create a function that takes a number and returns its factorial.
// 	47.	Write a function that accepts a string and returns its reverse.
// 	48.	Create a function to find the largest number in an array.
// 	49.	Write a function that converts a string to kebab-case (e.g., "Hello World" → "hello-world").
// 	50.	Create a function that logs "Hello, World!" every time it is called.

// 6. Conditionals (10 Questions)
// 	51.	Write a program to check if a number is positive, negative, or zero.
// 	52.	Create a program to check if a year is a leap year.
// 	53.	Write an if...else statement to determine if a person can vote based on their age.
// 	54.	Use a switch statement to log the name of the day based on its number (1 = Monday).
// 	55.	Write a program to check if a number is divisible by 3 and 5.
// 	56.	Create a program to check the grade of a student based on marks.
// 	57.	Write an if condition to compare two strings and log if they are equal.
// 	58.	Use a ternary operator to check if a number is even or odd.
// 	59.	Write a program to find the largest of three numbers using if...else.
// 	60.	Create a program to calculate the discount based on the price of an item.

// 7. Object Basics (10 Questions)
// 	61.	Create an object with properties name, age, and city. Log the object.
// 	62.	Add a new property isStudent to the object above and set it to true.
// 	63.	Access and log the value of the city property using bracket notation.
// 	64.	Delete the age property from an object and log the updated object.
// 	65.	Write a function that accepts an object and logs all its keys.
// 	66.	Create an array of objects representing books with title and author properties.
// 	67.	Access and log the author of the second book in the array.
// 	68.	Write a program to check if a specific key exists in an object.
// 	69.	Create a function to count the number of keys in an object.
// 	70.	Use Object.assign() to merge two objects.

// 8. String Manipulation (10 Questions)
// 	71.	Create a string and log its length.
//  let name = "vrushali";
//  console.log("Length is "+name.length);

// 	72.	Extract the last 4 characters of a string.
// let newString = "Welcome to the js practice questions";
// console.log(newString.substring(0,33));


// 	73.	Convert a string to lowercase and log it.
// let name = "VRUSHALI";
// console.log(name.toLowerCase());

// 	74.	Split a sentence into words using .split() and log the result.
// let mySentence = " Welcome to the js practice questions";
// console.log(mySentence.split(5));

// 	75.	Find the position of the first occurrence of "a" in a string.
// let name = "vrushali";
// console.log(name.indexOf('a'));


// 	76.	Replace "JavaScript" with "JS" in the string "I love JavaScript".
// let sentence1 = "JavaScript";
// let sentence2 = "I love JavaScript";
// console.log(sentence1.replace(sentence2));


// 	77.	Repeat a string 3 times using .repeat().
// 	78.	Create a function that checks if a string contains a specific word.
// 	79.	Write a program to remove whitespace from both ends of a string.
// 	80.	Create a function to count the number of vowels in a string.

// Mixed Practice (20 Questions)
// 	81.	Write a function that accepts an array of numbers and returns only the even numbers.
// 	82.	Create a program to count the occurrences of a specific value in an array.
// 	83.	Write a function that accepts a string and returns whether it’s a palindrome.
// 	84.	Create a program to log a pattern:

// *
// **
// ***
// ****

// 	85.	Write a function that returns the square of each number in an array.
// 	86.	Use a for loop to sum all odd numbers between 1 and 50.
// 	87.	Create an object representing a person and log their full name.
// 	88.	Write a program to convert the string "10" to a number and add 5 to it.
// 	89.	Write a program to reverse an array without using .reverse().
// 	90.	Create a program to check if an array is empty.
// 	91.	Write a program to fetch the current date and format it as DD/MM/YYYY.
// 	92.	Write a program to find the smallest number in an array.
// 	93.	Create a function to return the Fibonacci sequence up to n terms.
// 	94.	Use a try...catch block to handle division by zero.
// 	95.	Write a program to find the index of the first vowel in a string.
// 	96.	Create a function that accepts an array and returns only unique values.
// 	97.	Write a program to merge two sorted arrays into one sorted array.
// 	98.	Create a function to count the number of words in a string.
// 	99.	Write a program to toggle a button’s background color when clicked.
// 	100.	Write a function to check if all elements in an array are greater than a specific value.

// These questions cover a wide range of fundamental JavaScript concepts. Let me know if you’d like further clarification or solutions for any of these!