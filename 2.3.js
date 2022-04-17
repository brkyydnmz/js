var max = Number.MAX_SAFE_INTEGER;
var max2 = Number.MAX_SAFE_INTEGER + 1;
var max3 = Number.MAX_SAFE_INTEGER + 2;
var max4 = Number.MAX_SAFE_INTEGER + 100;
console.log(max);
console.log(max2);
console.log(max3);
console.log(max4);

var myString = "Hello World";
var myString2 = "2";
console.log(typeof(myString2));
var myString3=3;
console.log(typeof(myString3));

var degisken1=6;
var degisken2=7;
console.log(degisken1+degisken2);
console.log(degisken1-degisken2);
console.log(degisken1/degisken2);
console.log(degisken1*degisken2);

var degisken1=7;
console.log(degisken1+degisken2); //degisken1 7 oldu:

console.log(degisken1 != degisken2); // 7 = 7 olduğundan false

degisken3 = "6";
degisken4 = "7";
console.log(degisken1 !=degisken3); //7 eşit değildir 6 olduğundan true

console.log(typeof(degisken1));
console.log(typeof(degisken3));

console.log(degisken1 === degisken3); // type ve değer eşit değildir degisken1 number degisken3 string
console.log(degisken1 !== degisken3);

var deneme;
console.log(typeof(deneme));
deneme=5;
console.log(typeof(deneme));
const yasakDeger = null;
console.log(typeof(yasakDeger));//object

var arr = [6,21,15,8,9,2,3,7,42,14];
console.log(arr);
console.log(typeof(arr)); //object
console.log(arr[5]);
console.log(arr.length);
