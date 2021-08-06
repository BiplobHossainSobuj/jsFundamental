//convert inches to feet
 function inchesToFeet(inches) {
     let feet = inches / 12;
     return feet;
 }
 const conversion = inchesToFeet(36);
 console.log(conversion);

 //mile to kilometer
 function mileToKilometer(miles) {
     var km = miles * 1.60;
     return km; 
 }
  const distance = mileToKilometer(26.2);
  console.log(distance);

  //even or odd
  function evenOrOdd(number) {
      if (number % 2 == 0) {
          console.log("this is even");
      }else{
        console.log("this is odd");
      }
      
  }
evenOrOdd(21);
//   const checkNumber = evenOrOdd(21);
//   console.log(checkNumber);

// checking leapyear 
function leapYear(year) {
    if ((year % 4 == 0 && year % 100!= 0 )|| year % 400 == 0) {
        console.log("this  is leap year");
    } else {
        console.log("this is not leap year");
        
    }
}
leapYear(1900);

// factorial

function factorial(num) {
    let fact = 1;
    // for (let i = 1; i<= num; i++) {
    //   fact = fact * i; 
    // }
    while ( i <= num) {
        fact = fact *i;
        i--;
    }
    return fact;
}

var result = factorial(5);
console.log(result);
