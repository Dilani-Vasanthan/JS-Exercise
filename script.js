//DAY 01//
//comments can make code readable//1

//welcome to learn JavaScript//2

/* code readable, easy to reuse and informative*/3

//4//
var a="Hi";
console.log(a);
var b;
console.log(b);
var c=true;
console.log(c);
var d=null;
console.log(d);

//5//
console.log(typeof 'Hi') 
console.log(typeof 5) 
console.log(typeof true)
console.log(typeof null) 
console.log(typeof undefined) 
//6//
var f; 
console.log(f);
var g;
console.log(g);
var h;
console.log(h);
var i;
console.log(i);

//7//
var j="hi"; 
console.log(j);
var k=5;
console.log(k);
var l=false;
console.log(l);
var m=null;
console.log(m);

//8//
let firstName = 'Dilani'; // first name of a person
let lastName = 'Vasanthan'; // last name of a person
let country='Sri Lanka';
let age = 23; // age in years
let isMarried = false;

console.log(firstName, lastName, country, age, isMarried);

//9//
let nameOne = 'Dila', lastNameOne='Vasanth',countryOne='Sri Lanka', marital = 'false', ageOne = 23;
console.log(nameOne,lastNameOne,countryOne,marital, ageOne);

//10//
var myAge = 25;
var yourAge = 30;

console.log("I am " + myAge + " years old.");
console.log("You are " + yourAge + " years old.");




//DAY 02//
//1//
var challenge='learn Javascript';
console.log(challenge);
//2//
console.log(typeof('hi'));

//3//
let js = 'JavaScript';
console.log(js.length) ;
//4//
let countryOnee = 'Finland';

console.log(countryOnee.toUpperCase()) ;   // FINLAND
//5//
let countryOn = 'Finland';

console.log(countryOn.toLowerCase());    // FINLAND
//6//
let stringOne = 'JavaScript';
console.log(stringOne.substr(4,6)) ;   // Script

//7//
var str = "Hello, this is a sample string";
var firstWord = str.substr(0, str.indexOf(" ")); // Extracts the characters from the start of the string to the first space
console.log(firstWord); // Output: "Hello,"

//8//
var originalString = "learn JavaScript";
var slicedPhrase = originalString.slice(6, originalString.length);
console.log(slicedPhrase); // Output: "JavaScript"

//9//
var myString = "This is a JavaScript example";
var wordToCheck = "Script";

if (myString.includes(wordToCheck)) {
    console.log("The string contains the word 'Script'.");
} else {
    console.log("The string does not contain the word 'Script'.");
}


//10//
let stringS = 'learn Javascript'

console.log(stringS.split())     // Changes to an array -> ["learn Javascript"]
console.log(stringS.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

//11//
let countries = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
//12//
let string = 'learn JavaScript';
console.log(string.replace('JavaScript', 'Python'));
//13//
let stringCharc = 'learn Javascript';
console.log(stringCharc.charAt(15)) ;
//14//

let char='learn Javascript';
console.log(char.charCodeAt('J'));
//15//
let stringIndex = 'learn Javascript';
console.log(stringIndex.indexOf('a')) ;
//16//
console.log(stringIndex.lastIndexOf('a')) ;
//17//
let stringIndexOne = 'You cannot end a sentence with because because because is a conjunction';
console.log(stringIndexOne.indexOf('because')) ;

//18//
console.log(stringIndexOne.lastIndexOf('because')) ;

//19//
console.log(stringIndexOne.search('because')) ;
//20//
let stringTrim = '   learn Javascript   '


console.log(stringTrim.trim(' '))


//21,22//
let stringStart = 'learn Javascript and make the result true'

console.log(stringStart.startsWith('learn'))   // true
console.log(stringStart.startsWith('result'))   // false

//23//
let stringMatch = 'I love JavaScript. If you do not love JavaScript what else can you love.';
console.log(stringMatch.match('love'));
//24//
var firstString = '30 Days of ';
var secondString = 'JavaScript';

var mergedString = firstString.concat(secondString);

console.log(mergedString); // Output: "30 Days of JavaScript"




//25//
let stringRepeat = 'learn Javascript';
console.log(stringRepeat.repeat(2));
