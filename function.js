
function firstFunction() {
    console.log("This is my first function in javascript");
}
for (let i = 0; i < 1; i++) {
    firstFunction();
}
//2nd arguments
function funk(firstName,lastName){
    console.log(`Hola,como estas ${firstName} urofe ${lastName}`)
}
funk('heroAlam',"xeroAlam")

//3rd multiple agruments
function repeat(str,numTimes){
    var result='';
    for(let j=0;j<numTimes;j++){
        result+=str;
        console.log(result);
    }
}
repeat('i love Bangladesh',5);
//extra multiple arug
function isSnakeEyes(a, b) {
    if (a === 1 && b === 1) {
        console.log("Snake Eyes!");
    }
    else {
        console.log("Not Snake Eyes!");
    }
}
