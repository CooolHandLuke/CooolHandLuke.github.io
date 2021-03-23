// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./CooolHandLuke.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
var males = _.filter(array, function(customerObj) {
   if(customerObj.gender === "male") {
       return true;
   } else {
       return false;
   }
   
});
return males.length;
};

var femaleCount = function(array) {
var females = _.filter(array, function(customerObj) {
   if(customerObj.gender === "female") {
       return true;
   } else {
       return false;
   }
   
});
return females.length;
};

var oldestCustomer = function(array) {
    array.sort(function(a, b){
    return a.age-b.age;
});
return array[array.length -1]['name'];
};

var youngestCustomer = function(array) {
    array.sort(function(a, b){
    return a.age-b.age;
});
return array[0]['name'];
};


var averageBalance = function(arr) {
    var combinedBal = 0;
    for(var i = 0; i < arr.length; i++) {
      combinedBal += Number(arr[i].balance.replace(/[^0-9.-]+/g,""));
    }
    return combinedBal / arr.length;
};

var firstLetterCount = function(array, letter) {
var names = _.filter(array, function(customerObj) {
   return customerObj.name[0].toUpperCase() === letter.toUpperCase();
});
return names.length;
};

var friendFirstLetterCount;

var friendsCount;

var topThreeTags = function(array) {
 };

var genderCount = function(array) {
  return _.reduce(array, function(resultObj, customerObj) {
      //if resultObj has the key for the objects gender
      //if so, add to that count
      if(resultObj[customerObj.gender]) {
          resultObj[customerObj.gender] += 1;
       //if not, create new key/value pair for that gender
        } else {
        resultObj[customerObj.gender] = 1;
        }
     return resultObj;
  }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
