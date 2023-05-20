/* Math in JS */
/*let round = Math.round(8.6); /!* yaxlitlash *!/
let pow = Math.pow(4,4); /!* darajaga topish *!/
let sqrt = Math.sqrt(81); /!* ildizini topish *!/
let abs = Math.abs(-12.8); /!* absolutlash *!/
let ceil = Math.ceil(8.1); /!* yaxlitlash *!/
let floor = Math.floor(8.9) /!* yaxlitlash *!/
let min = Math.min(12,1,18,95,2004,15,18); /!* minimalini topish *!/
let max = Math.max(12,1,18,95,2004,4958,4959); /!* maximalini topish *!/
let trunc = Math.trunc(4.5); /!*  *!/
document.write(trunc);*/

/* localStorage(mahalliy ombor) in JS */
/*localStorage.setItem('ism','Olovlov');
localStorage.setItem('familiya','Sayfulloyev');
localStorage.setItem('yoshi','14');
localStorage['ism'] = "Olovuddin";
localStorage['familiya'] = "Sayfullayev";
/!*localStorage.removeItem('ism');
localStorage.removeItem('familiya');*!/
localStorage.clear();
let uningIsmi = localStorage.getItem('ism');
let uningFamiliyasi = localStorage.getItem('familiya');
let uningYoshi = localStorage.getItem('yoshi');
console.log(uningIsmi,uningFamiliyasi,uningYoshi);*/

/* https requests in JS */
/*let sorov = new XMLHttpRequest();
sorov.open('get','https://getty.uz/serverdan/malumot/olish');
sorov.send();
sorov.onload = function (){
    console.log(sorov.responseText);
}*/

/* JSON in JS */
/*let object = {ism: "Oluv",yoshi: 13};   /!*  => JS object file*!/
let json = '{"ism":"Oluv","yoshi":13}'; /!*  => Json file*!/
console.log(JSON.parse(json));*/

let sorov = new XMLHttpRequest();
sorov.open('get','jsonFayl.json');
sorov.send();
sorov.onload = function (){
    console.log(sorov.responseText);
}








