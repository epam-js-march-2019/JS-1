# JS-fundamentials-Spring-2019

[EPAM JS fundamentals](https://aleksandrgorodetskii.github.io/JS-1/Aleksandr_Gorodetskii)  

To install dependencies, execute in project folder:


    npm i


To run Jest tests, execute


    npm test


Or to run Majestic GUI for Jest - execute:

    npx majestic

Important: You shouldn't use global variables
1) Write a function splitAndMerge
Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator. First we need to divide the sentence into words(Use separator space); and then divide each word into characters(Use separator empty string); and then merge each characters with the specified sp; at last merge all the words(Use separator space) and return it.

Example:
splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"

2) Write a function convert
Convert a hash into an array. Nothing more, Nothing less.
{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into
[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
Example:
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

4) Write a function that takes a sentence (string) and reverses each word in the sentence.
Example:
" A fun little challenge! " => " A nuf elttil !egnellahc "

5) Write a function stringExpansion
Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: The numeric values represent the occurance of each letter preceding that numeric value. There should be no numeric characters in the final string. Empty strings should return an empty string.

The first occurance of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.
stringExpansion('3D2a5d2f') === 'DDDaadddddff'
If there are two consecutive numeric characters the first one is ignored.
stringExpansion('3d332f2a') === 'dddffaa'
If there are two consecutive alphabetic characters then the first character has no effect on the one after it.
stringExpansion('abcde') === 'abcde'
Your code should be able to work for both lower and capital case letters.

6) Write largest and smallest functions that returns the largest and smallest number passed like a argument.
Example:
largest(2, 0.1, -5, 100, 3) // 100
smallest(2, 0.1, -5, 100, 3) // -5

7) Write function transform that will transform array of numbers to array of functions that will return value from a base array.
Example:
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
newArray[3](); // should return 40
newArray[4](); // should return 50

8) Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them.
Note: function should use recursion

Example:
sum(1,3,5,7); //should return 16

9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.
Example:
countDown(3); // 3 2 1 0

10) Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). myBind() should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.
Hint: play with the function in Function.prototype and see what this points to inside it. Your code should look like: Function.prototype.myBind = function () { 
// your code here
}

Example:
function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1) // 10
