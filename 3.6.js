
for(let x =0;x<100;) console.log((++x %3 ? '':'fizz')+(x%5 ? '' : 'buzz')||x); // sayı 3 le bölünüyor mu sayı 5 ile bölünüyor mu sayı her ikisiyle de bölünüyor mu diye kontrol eder
// || or 

var boyut= 8;
var tahta = "";

for(var y = 0;y<boyut;y++){ //soldan sağa için 
    for(var x = 0; x<boyut;x++){ //yukarıdan aşşağıya için
        if((x+y) % 2 ==0) tahta +=" ";
        else tahta += "#";
    }
    tahta +="\n"; // \n newline
}
console.log(tahta); // 0 ın 1 i 0 ın 2 si .. 0 ın 8 ine kadar 1.sırayı oluşturur 

console.log((new Array(65).join().split("")).map(function(v,i){
    return((i/8>>0)%2 ? (i%2 ? " ":"#"):(i%2 ?"#": " "))
    +((i+1)%8 ? "":"\n");}).join(""));
