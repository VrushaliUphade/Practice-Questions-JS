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

//22.Use a while loop to sum the number form 1 to 10.
var i = 1;
var sum = 0;
while(i<=10){
sum += i;
i++;
}
console.log(sum);
