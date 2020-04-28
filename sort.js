var fruits = ["Banana", "Orange", "Apple", "Mango"];

// reverse array element

fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

//concatName("First", "Last") ➞ "Last, First"

// concatName("John", "Doe") ➞ "Doe, John"

// concatName("Mary", "Jane") ➞ "Jane, Mary"

//Given two strings, firstName and lastName, return a single string in the format "last, first".

// var firstName;
// var lastName;

function concatName(firstName, lastName) {
  return lastName+' '+ firstName;
}

concatName("jashim", "uddin");

console.log(concatName);


function concatName(firstName, lastName) {
	return lastName + ", " + firstName;
}
concatName('jashim', 'uddin');
console.log(concatName);
function concatName(firstName, lastName) {
	console.log(lastName + ", " + firstName);
}
concatName('jashim', 'uddin');
console.log(concatName);