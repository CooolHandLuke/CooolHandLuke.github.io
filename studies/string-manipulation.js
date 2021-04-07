/**
*STRING MANIPULATON
*
** -There are many different methods of string manipulation.  They allow us to change and work on a string. Some methods accept arguments that pass inside the parentheses. 
* 
* Here are a few string manipulation methods we can use: 
* 
* -string.toUpperCase() will take a given string and return a new string in all caps.
* -string.concat() Takes two or more strings and returns them as one.  Imagine typing two sentences and realize they would make more sense as one sentence, so you combine them!
* -string.indexOf() given a string, this takes 2nd string and locates the index of the 2nd string with the given string. If the 2nd string is not present, it will return -1 
* -string.slice() cuts of a part of the string and returns a NEW string at the input index.
* -string.replace() replaces a given string with a different given string
* -string.indexOf() finds the index of a string within a string
* -we can also use the + operator to concat strings together!
*
*/
var ward = "First Ward";
var city ="New Orleans";
console.log(city.length); //logs 11, the amount of characters in city

console.log(city.slice(4));  //logs "Orleans" because "Orleans" starts at the first index

console.log("I live in the " + ward + " of " + city); //logs "I live in the First Ward of New Orleans"

console.log(city.toLowerCase()); // logs "new orleans"

console.log(city.indexOf('Orleans')); // logs 4 as this is the index that 'Orleans' starts at within the city string

console.log(city.replace('Orleans', "York")); //logs "New York"
