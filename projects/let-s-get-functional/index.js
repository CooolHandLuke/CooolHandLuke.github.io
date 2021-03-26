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

var friendFirstLetterCount = function(array, customer, letter) {
    
};

var friendsCount = function(array, name) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var friends = array[i].friends;
        for (var j = 0; j < friends.length; j++) {
            if (friends[j].name === name) {
                result.push(array[i].name);
            }
        }
    }
    return result;
};

var topThreeTags = function(array) {
 var tagsArr = [];
  for(var i = 0; i < array.length; i++) {
   tagsArr.push(array[i].tags);
}
var tagsCountObj = tagsArr.flat().reduce(function(finalObj, currentTag) {
      if(finalObj[currentTag]) {
        finalObj[currentTag] ++;
    }else {
      finalObj[currentTag] = 1;
    } return finalObj;
    }, {});
var finalTopArr = [];
var topThreeArr = Object.entries(tagsCountObj).sort(function(a,b){return b[1] - a[1];}).slice(0, 3);
for(var j = 0; j < topThreeArr.length; j++) {
  
  finalTopArr.push(topThreeArr[j][0])
}
return finalTopArr;
}

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
