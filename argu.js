function numBer(a,b,c){
    for(let i=0;i<arguments.length;i++)
    {
        console.log(arguments[i])
    }
}
numBer(10,30,40);

//Second one
function addsub(){
    var sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    console.log(sum);
}
addsub(3,3,3,4)