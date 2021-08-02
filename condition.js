var productIsGood = true;
if (productIsGood == true) {
    console.log("i will buy it");
} else{
    console.log("i won't buy");
}

var watchPrice = 400;
if (watchPrice<=300) {
    console.log("i will buy it");
} else {
    console.log("i won't buy");
}

var gotJob = true;
var hasFlat = true;
if (gotJob== true && hasFlat == true) {
    console.log("you can  ready to marry")
} else {
    console.log("your bad luck")
}
if (gotJob== true || hasFlat == false) {
    console.log("you can  ready to marry")
} else {
    console.log("your bad luck")
}
if (gotJob== false && hasFlat == true) {
    console.log("you can  ready to marry")
} else {
    console.log("your bad luck")
}