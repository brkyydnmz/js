//WORKING ON CHROME CONSOLE
let theNumber = Number(prompt("Enter a number: "));
if(!Number.isNaN(theNumber)){
    console.log("Sayının karesi " + theNumber*theNumber );
}else{
    console.log("Girdiğiniz değer bir sayı değildir");
}

if(1 + 1 == 2){
    console.log("true")
}

if(1 + 1 ==2) console.log("true");

console.log(2 + 2 == 4 ? "true" : "false"); //true ise sol taraf false ise sağ taraf çalışır

let sayi = Number(prompt("Bir sayı giriniz"));
if(sayi < 10){
    console.log("Küçük sayı");
}else if(sayi<100){
    console.log("Orta sayı");
}else{
    console.log("Büyük sayı");
}

let sayıı = 0;
while(number<=12){
    console.log(number);
    number = number + 2;
}

let sonuc =1;
let sayim = 0;
while(sayim<10){
    sonuc = sonuc * 2;
    sayim = sayim +1;
}
console.log(sonuc);

