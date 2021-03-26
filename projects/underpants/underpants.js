// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value) {
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
          if (value instanceof Array) {
        return "array";
    } else if(value === null) {
        return "null";
    } else if(value instanceof Date) {
        return "date";
    } else {
        return typeof value;   
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    //check if array arugment is array and number argument is not negative
    if(!Array.isArray(array) || Math.sign(number) === -1) {
        return [];
    }
    //check if number arg is not a number or is not passed into function
    if (number === undefined || isNaN(number)) {
        return array[0];
    }
    //return the array arguments values beginning at the first value and ending at the number arg given
    return array.slice(0,number);
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number) {
    //check if array is an array and number is not a negative number
    if(!Array.isArray(array) || Math.sign(number) === -1) {
        return [];
    }
    //check i fnumber is not given or is not a number
    if (number === undefined || isNaN(number)) {
        return array[array.length - 1];
    }
    //return values from the end of the array, counting back to number
    return array.slice(-number);
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    //loop through each value in array
    for (var i = 0; i < array.length; i++) {
    //if the current value is absolutely equal to the value arg return i, the current index of array
        if(array[i] === value) {
            return i;
        } 
    } return -1;
};
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value) {
    //return true of false based on using .includes, checking if the value arg is a value inside of the array arg
        return (array.includes(value)) ? true : false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    //check if collection is an array
    if(Array.isArray(collection)) {
    //if an array, loop through each value in arrray
        for(var i = 0; i < collection.length; i++) {
    //call func arg on the current value of collection arg, it's index, and the collection arg
       func(collection[i], i, collection);
        }
    } else {
    //else we are assuming the collection is an object and looping through it to apply func to every value
        for(var key in collection) {
            func(collection[key], key, collection);
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array) {
      let newArr = [];
      //loop over. every value in array and if the current value of array is NOT inside of the newArr, push it into the newArr
    for (let i = 0; i < array.length; i++){
        if (newArr.indexOf(array[i]) === -1){
            newArr.push(array[i]);
        }
    } return newArr;
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(arr, func) {
    var newArr =[];
    //loop over arr arg and call func arg on each value, index and arr arg, and add the values that return true to the newArr
   for(var i = 0; i < arr.length; i++){
   if(func(arr[i],i,arr)) {
       newArr.push(arr[i]);
    } 
  } return newArr;
 };

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(arr, func) {
    var newArr =[];
    //loop over every value in arr and pass each into func, and add the values that return false to the newArr
   for(var i = 0; i < arr.length; i++){
   if(!func(arr[i],i,arr)) {
       newArr.push(arr[i]);
    } 
  } return newArr;
 };

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func) {
    //create a variable set to an empty array with two empty sub-arrays
    var trueAndFalseArr = [[],[]];
    //looop through the array arg and pass the values into the func arg
    for(var i = 0; i <= array.length - 1; i++) {
        //if the result of running func on the current value is true, add it to the first sub array
        if(func(array[i], i, array) == true) {
            trueAndFalseArr[0].push(array[i]);
        //if false, add the current value to the second sub-array
        } else {
            trueAndFalseArr[1].push(array[i]);
        }
    }
    return trueAndFalseArr;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func) {
  //declare arr set to empty arr
  var arr = [];
  //use each to loop over the array
  _.each(collection, function(val, i, col) {
      //call func on each val in the array and push into arr
      arr.push(func(val, i, col));
  });
  //return array
  return arr;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, prop) {
    //loop through each value in inside of the objects in the array arg, and return the values input into a new array
    return _.map(array, function(object,i, arr) {
        return object[prop];
    });
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


_.every = function(collection, func){
    //create variable set to the value of true
    let bool = true;
    //loop through each element in the collection arg
    _.each(collection, function(element, i, collection){
        if(func !== undefined){
    //if any of the values ran through thr func arg return false, the value of bool becomes false
            if(func(element, i, collection) === false){
                bool = false;
            }
        }   else {
                if(!element){
                bool = false;
                }
            }
    });
    return bool;
};




/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, action){
    let bool = false;
    _.each(collection, function(element, index, collection){
        if(typeof action === 'function' || action !== undefined){
            if(action(element, index, collection) === true){
                bool = true;
            }
        }   else {
                if(element === true){
                bool = true;
                }
            }
    });
    return bool;
};



/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed) {
    //check if seed exists
    if(seed !== undefined) {
    //if so loop through the array
    //call the func function on the seed, value, index and array
    //reassign seed to be the value of that function call
    for(var i = 0; i < array.length; i++) {
           seed = func(seed, array[i], i);
        }
        return seed;
    } else {
        //if no seed, first value in array is seed
        seed = array[0];
        for(var i = 1; i <array.length; i++) {
            seed = func(seed, array[i], i);
        }
    return seed;
}
        //loop through the array starting at second index
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(...obj) {
    var returnObj = Object.assign(...obj);
    return returnObj;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
