for (let x = 20; ; x++){
    if(x % 7 === 0){
        console.log(x);
        break;
    }
}

for (let x = 0;x<=12;x+=2){
    console.log(x);
}

const x = "ODönmez";
if (x =="Berkay") console.log("Berkay");
else if(x=="Dönmez") console.log("Dönmez");
else if(x == "ODönmez") console.log("ODönmez");
else console.log("DönmezO");

switch(new Date().getDay()){
    case 0:
        day="Pazar";
        break;
    case 1:
        day= "Pazartesi";
        break;
    case 2:
        day="Salı";
        break;
    case 3:
        day= "Çarşamba";
        break;
    case 4:
        day="Perşembe";
        break;
    case 5:
        day= "Cuma";
        break;
    case 6:
        day="Cumartesi";
        break;
}
console.log(day);

/*switch(prompt("Hava nasıl olsun")){
    case "yagmurlu":
        console.log("Şemsiye al");
        break;
    case "gunesli":
        console.log("Şemsiye alma");
        break;
    case "bulutlu":
        console.log("Hazırlıklı ol");
        break;
    default:
        console.log("Bilinmeyen hava durumu");
        break;
}*/

for(let x = '#';x.length <7;x+='#'){
    console.log(x);
}

//FizzBuzz 1 den 100 e kadar sayı say 3 ile bölünen console a Fizz yazdırsın 5 ile Buzz Hem 3 hem 5 FizzBuzz kalanlar sayının kendisi

for ( let x = 1;x<101;x++){
    if(x %15===0) console.log("FizzBuzz");
    else if(x%3===0) console.log("Fizz");
    else if (x % 5 === 0) console.log("Buzz");
    else console.log(x);
}

