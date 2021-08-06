// declaring function 
function doTheTask() {
    console.log("bring my breakfast");
}
// calling function 
doTheTask();

//with parameter
function bringBreakfast(money) {
    console.log("breakfast is here");
    var breakfastPrice = 50;
    var quantity = money / breakfastPrice;
    return quantity;
}
var breakfast = bringBreakfast(100);
console.log(breakfast);

// multiple parameter 
function addTwoNumber(number1,number2) {
    summation = number1 + number2;
    return summation;
}
var result = addTwoNumber(23,27);
console.log("summation is", result);