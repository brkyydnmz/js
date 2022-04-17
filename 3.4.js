function Sum(n){
    var x = 0;
    if(n<0){
        return 0;
    }
    for(var i = 0;i<=n;i++){
        x = x+i;
    }
    return x;
}
console.log(Sum(3));

var x = 4;
for(var i=0;i<5;i++){
    if(x<5){
        var x = 0;
    }
    x=x+i;
}