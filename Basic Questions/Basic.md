# 📝 Basic JavaScript Questions

## 📌 Introduction
Welcome to the **Basic JavaScript Questions** section! This section contains fundamental JavaScript exercises to help you practice **console usage, variables, operators, and debugging**. 🏆

## 📚 Table of Contents
1. [Basic Console Usage](#basic-console-usage)
2. [Variables and Data Types](#Variables-and-Data-Types)
---

## ✨ Basic Console Usage (10 Questions)

### 1️⃣ Log your name and favorite hobby to the console
```javascript
console.log("My Name Is Vrushali And My Favorite Hobby Is Coding");
```

### 2️⃣ Perform and log the result of 45*2-10
```javascript
var result = (45 * 2 - 10);
console.log(result); // Output: 80
```

### 3️⃣ Use console.log() to display the current year
```javascript
const currentYear = new Date().getFullYear();
console.log("Current Year is " + currentYear);
```

### 4️⃣ Create two variables for first and last name. Concatenate and log them
```javascript
var firstName = "Vrushali";
var lastName = "Uphade";
var fullName = firstName + " " + lastName;
console.log(fullName);
```

### 5️⃣ Track the value of a variable by logging it before and after updating
```javascript
var count = 5;
console.log("Before updating: ", count);
count = 10;
console.log("After updating: ", count);
```

### 6️⃣ Use console.error() to simulate an error message
```javascript
console.error('Something went wrong...');
```

### 7️⃣ Log the square of the number 12 to the console
```javascript
console.log("Square of 12 is: " + (12 * 12));
```

### 8️⃣ Print the type of a variable holding the value `true`
```javascript
var value = true;
console.log(typeof value); // Output: boolean
```

### 9️⃣ Create a variable holding your age and log whether it is greater than 18
```javascript
var age = 20;
if (age > 18) {
    console.log("Age is greater than 18");  
} else {
    console.log("Age is not greater than 18");
}
```

### 🔟 Log the result of 100/0 and observe the output
```javascript
console.log("Result is " + 100 / 0); // Output: Infinity
```
---
## ✨ Variables and Data Types (10 Questions)

### 1️⃣1️⃣ Declare a variable using `let` and log its value.
```js
let myName = "Vrushali";
console.log(myName);
```

### 1️⃣2️⃣ Create a constant to store the value of PI and log it.
```js
const PI = 3.14;
console.log("Value of PI is " + PI);
```

### 1️⃣3️⃣ Reassign a value to a variable declared with `let` and log the result.
```js
let Value = 21;
Value = 20;
console.log(Value);
```

### 1️⃣4️⃣ Check the type of `null` and log it.
```js
var checkType = null;
console.log(typeof checkType); // Output: "object" (special case in JavaScript)
```

### 1️⃣5️⃣ Create a variable with a number as a string (e.g., "25") and log its type.
```js
var value = "25";
console.log(typeof value); // Output: "string"
```

### 1️⃣6️⃣ Use `typeof` to check the type of a boolean variable.
```js
var isAvailable = true;
console.log(typeof isAvailable); // Output: "boolean"
```

### 1️⃣7️⃣ Create three variables of types string, number, and boolean, then log their values.
```js
var value1 = "Vrushali";
var value2 = 20;
var value3 = true;
console.log(value1); // String
console.log(value2); // Number
console.log(value3); // Boolean
```

### 1️⃣8️⃣ Declare a variable without assigning a value. Log its type.
```js
var value;
console.log(typeof value); // Output: "undefined"
```

### 1️⃣9️⃣ Create a variable with `undefined` and log its type.
```js
var a;
console.log(typeof a); // Output: "undefined"
```

### 2️⃣0️⃣ Use `const` to create an array. Try reassigning the array and observe the error.
```js
const arr = ["Vrushali", 21, 66];
console.log(arr);
arr = ["Vru", 21, 66]; // ❌ Error: Assignment to constant variable.
```

---

✅ Keep practicing and stay consistent! More questions will be added soon. 🚀
---