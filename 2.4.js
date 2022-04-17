function factorial(n){
    if(n == 0){
        return 1;
    }else{
        return factorial(n-1) * n;
    }
}

console.log(factorial(5));

console.log("Text \nnew \"test\" \\ line"); //escape character and new line
console.log("ad"+"ding"+'new'+"text "+ "42");
console.log(-(10-2));

