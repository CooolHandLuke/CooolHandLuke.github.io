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

var friendFirstLetterCount = function(array, person, char) {
    //find {person} in the array and set their friends array to a variable
    for (var i =0; i < array.length; i++) {
        if (array[i].name === person) {
            var friends = array[i].friends;
        }
    }
    //loop through friends array and add 1 to result variable if name starts with {char}
    //make sure names are all same case (upper/lower)
    var result = 0;
    for (var i =0; i < friends.length; i++) {
        var name = friends[i].name;
        name = name.charAt(0).toUpperCase();
        char = char.toUpperCase();
        if (name.startsWith(char) === true) {
            result += 1;
        }
    } return result;
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
    //create one array with all tags of all customers
    function push(array, newArray) {
     for(var i = 0; i < array.length; i++) {
            newArray.push(array[i]);
     }
      return newArray;
}
    var allTags = [];
    for(var i = 0; i < array.length; i++) {
     push(array[i].tags, allTags);
    }
    //create object that counts # of times each tag appears in allTags
    var tagCount = {};
    for(var i = 0; i < allTags.length; i++) {
        var value = allTags[i];
        if(tagCount[value]) {
            tagCount[value]++;
        }
        else {
            tagCount[value] = 1;
        }
    };
    //create nested array of [[tag, value], [tag, value]]
    var countArray = [];
    for (var key in tagCount) {
        countArray.push([key, tagCount[key]]);
    };
    //sort array by value
    countArray.sort(function(a, b) {
        return b[1] - a[1];
    });
    //make new array with first three tag names
    var namesArray = [];
    for(var i = 0; i < 3; i++) {
        namesArray.push(countArray[i][0]);
    }
    //return array
    return namesArray;
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
