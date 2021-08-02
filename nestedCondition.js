var shirtPrice = 100;
var watchPrice = 80;
var shoesPrice = 50;
var myBudget = 60;
if (shirtPrice<myBudget) {
    console.log("i will buy  a shirt")
}
else if(shoesPrice<myBudget){
    if (watchPrice<myBudget) {
        console.log("buy a watch")
    }else{
        console.log("buy a shoes")
    }
} 
else {
    console.log("buy nothing")
}