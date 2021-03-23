//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
var a = Object.keys(object);
var x = a.join(' ');
x.split(' ');
return x;

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function valuesToString(object) {
// create a function that takes an object and returns all its keys
// in a string each separated with a space
    var arr = [];
    var a = Object.values(object);
   
  for(var i = 0; i < a.length; i++) {
    if(typeof a[i] === 'string') {
      arr.push(a[i]);
    }
  }
    return arr.join(' ');
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)) {
        return 'array';
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.replace(string[0], string[0].toUpperCase());
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  let splitString = string.split(" ");
 for(let i = 0; i < splitString.length; i++) {
   splitString[i] = splitString[i][0].toUpperCase() + splitString[i].substr(1);
 } 
  return splitString.join(" ");
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
var name = object.name;
return "Welcome " + name[0].toUpperCase() + name.substr(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
// create a function that takes an object with a name and a species and 
// returns '<Name> is a <Species>'
// create a variable name to hold the value of the name property of 
// an object 
    var name = object.name;
// create a variable species to hold the value of the species property
// of an object
    var species = object.species;
    return name[0].toUpperCase() + name.substr(1) + ' is a ' + species[0].toUpperCase() + species.substr(1); 
}


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //if the property does not exist, return string
 if(!object.noises) {
     return "there are no noises";
    //if property exists, but has no values, return string
 } else if(object.noises.length === 0) {
     return "there are no noises";
    //otherwise take the noises property and concat the values into a string
} else {
    return object.noises.join(' ');
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //.includes returns a boolean value, if the word argument 
    // is string inside string argument, it will return true, otherwise false
return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//using dot notation find friends property and add name to the friends array
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //if the object does not contain a friends property, return false
if(!object.friends) {
    return false;
} else {
    //return the boolean result 
return object.friends.includes(name);
}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //declare a variable set to an empty array
var nonFriends = [];
//looop through the array 
for(var i = 0; i < array.length; i ++) {
//for each index of array, check if BOTH name property does not equal the name argument
//AND the current index object does not have the name on the array of friends
    if(array[i].name !== name && !array[i].friends.includes(name)) {
        //if both are true, add the name string to nonFriends
        nonFriends.push(array[i].name);
    }
}
//return the nonFriends array
return nonFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //check to see is the key param is NOT a property on object
if(!object.key === value) {
    //if not there, create the property on object
     object.key = value;
} else {
    //if it does exist, update the value on the property
   object[key] = value;
}
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //loop through array of strings and delete any properties that match the current indexed string from array
    for(var i = 0; i < array.length; i++) {
        delete object[array[i]];
}
//return the object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  return array.filter((val, i) => array.indexOf(val) === i);
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}