/*First Arguments*/
function addd(a, b) {
    let ans = a + b;
    console.log(ans)
}
addd(12, 8)
/*Second arguments*/
arr1=[4,3,3];
arr2=[43,3,4];
arr3=[3,4,5,5]
function functionOfarray(arr) {
    sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum)
    
}
functionOfarray(arr1);
functionOfarray(arr2);
functionOfarray(arr3);
//last Arguments
function greeet(person){
    console.log(`Hey there,${person}`)
}
