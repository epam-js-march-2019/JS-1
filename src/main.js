/*
1) Write a function splitAndMerge

Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator. First we need to divide the
sentence into words(Use separator space); and then divide each word into characters(Use separator empty string); and
then merge each characters with the specified sp; at last merge all the words(Use separator space) and return it. Example:

splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"
 */

function splitAndMerge(obj, delimiter) {
    // приводим входные данные к строке
    let str = String(obj);
    let arr = str.split(" ");
    return arr.map(word => word.split("").join(delimiter))
              .join(" ");
}

/*
2) Write a function convert
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
 */

function convert(obj) {
    // проверка на валидность входных данных
    if (obj === undefined || obj === null || !(obj instanceof Object)) {
        return obj;
    }
    return Object.entries(obj);
}

/*
3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word
within the output should be capitalized only if the original word was capitalized.
Example:

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
 */

function toCamelCase(obj) {
    // приводим входные данные к строке
    let str = String(obj);
    if (str.length === 0) {
        return obj;
    }
    let result = str.split(/[-_]/g).map(str => str[0].toUpperCase() + str.slice(1)).join("");
    result = str[0] + result.slice(1);
    return result;
}

/*
4) Write a function that takes a sentence (string) and reverses each word in the sentence.
Example:

" A fun little challenge! " => " A nuf elttil !egnellahc "
*/

function reverseWords(obj) {
    // приводим входные данные к строке
    let str = String(obj);
    let arr = str.split(" ");
    return arr.map(word => {
        let reversedWord = "";
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        return reversedWord;
    }).join(" ");
}

/*
5) Write a function stringExpansion
Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: The numeric values
represent the occurance of each letter preceding that numeric value. There should be no numeric characters in the final
string. Empty strings should return an empty string.

The first occurance of a numeric value should be the number of times each character behind it is repeated, until the
next numeric value appears.

stringExpansion('3D2a5d2f') === 'DDDaadddddff'
If there are two consecutive numeric characters the first one is ignored.

stringExpansion('3d332f2a') === 'dddffaa'
If there are two consecutive alphabetic characters then the first character has no effect on the one after it.

stringExpansion('abcde') === 'abcde'
Your code should be able to work for both lower and capital case letters.
*/

function stringExpansion(obj){
    // приводим входные данные к строке
    let str = String(obj);
    let result = "";
    let regExpMatchArray = str.match(/(\d\D|\D)/g);
    if (regExpMatchArray === null) {
        return result;
    }
    regExpMatchArray.forEach(value => {
        if (value.length === 2) {
            for (let i = 0; i < value[0]; i++) {
                result += value[1];
            }
        } else {
            result += value[0];
        }
    });
    return result;
}

/*
6) Write largest and smallest functions that returns the largest and smallest number passed like a argument.
Example:

largest(2, 0.1, -5, 100, 3) // 100
smallest(2, 0.1, -5, 100, 3) // -5
*/

function largest(...args) {
    // проверка на валидность входных данных
    if (args === undefined || args === null) {
        return;
    }
    let numbers = args.filter(value => typeof value === 'number');
    if (numbers.length === 0) {
        return;
    }
    let maxValue = args[0];
    for (let i = 0; i < args.length; i++) {
        maxValue = maxValue > args[i] ? maxValue : args[i];
    }
    return maxValue;
}

function smallest(...args) {
    // проверка на валидность входных данных
    if (args === undefined || args === null) {
        return;
    }
    let numbers = args.filter(value => typeof value === 'number');
    if (numbers.length === 0) {
        return;
    }
    let minValue = args[0];
    for (let i = 0; i < args.length; i++) {
        minValue = minValue < args[i] ? minValue : args[i];
    }
    return minValue;
}

/*
7) Write function transform that will transform array of numbers to array of functions that will return value from a base array.
Example:

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
newArray3; // should return 40
newArray4; // should return 50
*/

function transform(arr){
    // проверка на валидность входных данных
    if (arr === undefined || arr === null || !(arr instanceof Array)) {
        return;
    }
    return arr.map(element => function () {
        return element;
    });
}

/*
8) Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them. Note: function should use recursion
Example:

sum(1,3,5,7); //should return 16
*/

function sum(...args) {
    // проверка на валидность входных данных
    let numbers = args.filter(value => typeof value === 'number');
    if (numbers.length === 0) {
        return;
    }
    return recursionSum(0);

    function recursionSum(index) {
        if (index === args.length){
            return 0;
        } else {
            return args[index] + recursionSum(++index);
        }
    }
}

/*
9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.
Example:

countDown(3); // 3 2 1 0
*/

function countDown(obj) {
    // проверка на валидность входных данных
    let number = parseInt(obj);
    if (isNaN(number)){
        return;
    }
    // setTimeout - чтобы вывод логов начался после того как функция выведет возвращаемое значение (undefined).
    setTimeout(recursionCountDown, 0, number);

    function recursionCountDown(number) {
        if (number === 0) {
            console.log(number);
        } else {
            console.log(number);
            setTimeout(recursionCountDown, 1000, --number);
        }
    }
}

/*
10) Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). myBind() should work in an exact
same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.
Hint: play with the function in Function.prototype and see what this points to inside it. Your code should look like:

Function.prototype.myBind = function () {
 // your code here
 }
Example:

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1) // 10
 */

Function.prototype.myBind = function () {
    // your code here
};
