// declaring array
var oddNumber = [1,3,5,7,9];
console.log(oddNumber);

// length of an array 
var socialMedia = ["facebook","instagram","linkedIn"];
console.log(socialMedia.length);

// index of an array 
var vowel = ['a','e','i','o','u'];
var countIndex = vowel.indexOf('i');
console.log(countIndex);

// if any element does not exist in array than gives the index -1
var even = [2,4,6,8];
var notExist = even.indexOf(10);
console.log(notExist);

// find element by index
var findElement = even[2];
console.log(findElement);
// if does not found it gives undefined

// add element to array
var pushElement = [1,2,3,4,5];
pushElement.push(100);
console.log(pushElement);

pushElement.unshift(200); //add element in beginning
console.log(pushElement);
// remove element from array
var popElement = ["akash", "bikash","biplob"];
popElement.pop();
console.log(popElement);

popElement.shift();//remove first element
console.log(popElement);

