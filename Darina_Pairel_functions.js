// 1) Write a function splitAndMerge
const splitAndMerge = (str, sp) => {
	var arr = str.split(" ");
    newArr = arr.map((i)=>{
		subarr = i.split(' '); 
		subarr = subarr.map((i)=>i.split('')); 
		subarr = subarr.join(sp); 
		return subarr 
	})
	newArr = newArr.join();
	console.log(newArr);
	return newArr
}
splitAndMerge("Hello World!", ",");

// 2) Write a function convert
function convert(array, obj) {
 for(property in obj) { 
   array.push([property, obj[property]])
 }
 return array
}

// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
var toCamelCase = (str) => {
  str = str.replace(/[a-z][A-Z]/, l=>l.toUpperCase())
  str = str.replace(/\W[[a-z][A-Z]]/g, l=>l.toUpperCase())
  str = str.replace(/[_-]/g,"")
  return str
}

//4) Write a function that takes a sentence (string) and reverses each word in the sentence.
var reverseEachWord = (str) => {
  var string=""
  var arrayOfWords = str.split(" ")
  var reversed = []

  arrayOfWords = arrayOfWords.forEach(el=>{
    var arrOfSymbols = el.split('')
    reversed.push(arrOfSymbols.reverse().join(""))      
  })
  reversed = reversed.join(" ")
  return reversed
}

// 5) Write a function stringExpansion 
var stringExpansion = function(str){
  var arrayOfNumbers = str.match(/[0-9]/g)
  var arrayOfChars = str.match(/[a-z]|[A-Z]/g)
  var newStr = ''

  arrayOfNumbers.forEach((num, i) => { 
      for(var j = 0; j < +num; j++){
          newStr += arrayOfChars[i]
      }
  })
  return newStr
}

// 6) Write ```largest``` and ```smallest``` functions that returns the largest and smallest number passed like a argument.
function largest(){
  var max = Number.MIN_VALUE
  var arr = Array.from(arguments)
  for (var a in arr){
    max = (arr[a]>max) ? arr[a] : max
  }
  return max
}
function smallest(){
  var max = Number.MAX_VALUE
  var arr = Array.from(arguments)
  for (var a in arr){
    max = (arr[a]<max) ? arr[a] : max
  }
  return max
}
// 7) Write function transform that will transform array of numbers to array of functions that will return value from a base array. 

    function transform(numbers = []) {
      return numbers.length ? numbers.map( item => () => item) : undefined
    }
// 8) Write function ```sum```. Function expects arbitrary number of digit arguments and returns compound value of them. Note: function should use recursion

function sum (...numbers){  
  return numbers.reduce((x,y)=>x+y)
}

// 9) Write function ```countDown```. Function expects number and logs values one by one till zero with one second delay.
var countDown = (max) => {
  var arr = []
  for (var i=max; i>=0; i--){
    arr.push(i);
  }
  return arr.join(' ')
}

// 10) Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). myBind() should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.
Function.prototype.myBind =
      function (context, ...fArgs) {
        const functions = this;
        return (...sArgs) => {
          const args = fArgs.concat(sArgs);
          return func.apply(context, args);
        }
      }