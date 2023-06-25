//* prompt Kullanıcıdan girdi almayı sağlar.

//* prompttan gelen bilgi string bir ifadedir.

// let name = prompt("Kullanıcı adınızı giriniz: ");

// let age = prompt("Yaşınızı Giriniz: ")

// console.log(`Merhaba, kullanıcı adınız ${name}. Yaşınız ${age}. `)

// let memleket = prompt("Memleketiniz: ")

// console.log(`Memleket: ${memleket}`);

//! Kullanıcıdan gelen değeri number ifadeye çevirme

// let urunFiyat = + prompt("Ürünün Fiyattını Giriniz: ")

// console.log(urunFiyat);

//? Dışarıdan gelen ad soyad ve doğum yılını console.log a yazdıralım 

// let ad = prompt("İsim giriniz:");
// let soyad = prompt("Soyisim giriniz:");
// let dogumYili = + prompt("Yaş Giriniz");

// console.log(`Merhaba ${ad} ${soyad}. Doğum yılınız ${dogumYili}. Yasşınız ${2023-dogumYili}. `);

//? Kullanıcıdan girilen sayının 3 katını yazdıran komudu bulalım:

// let sayi = + prompt("Sayı gir de çarpayım:")

// console.log(`${3*sayi}`)
// //?Dılarıdan gelen 3 sayının topla çarp yazdır.

// let x = + prompt("Sayı 1: ");
// let y = + prompt("Sayı 2: ");

// console.log(Math.sqrt((x*x)+(y*y)))

// let v = + prompt("Vize Notunuzu Giriniz:" );
// let f = + prompt("Final Notunuzu Giriniz: ");

// console.log((v*40/100 + f*60/100));


function hesapla() {
    let x = + (document.getElementById("s1").value);
    let y = + (document.getElementById("s2").value);
    let hipotenus = Math.sqrt((x*x)+(y*y))
    document.getElementById("sonuc").innerHTML = "Hipotenüs: " + hipotenus 
}

let btn = document.getElementById("btn");
btn.onclick=hesapla;

//! Dateler 

//* Tarih ve saatleri temsil etmek için belirli nesneler kulanılır 
//* ve yeni bir tarih objesi için new Date() ifadesi kullanılmaktadır

// let simdikiTarih = new Date();

let tarihBelirle = new Date('2005-02-08');
console.log(tarihBelirle);


// console.log(simdikiTarih.getFullYear())
// console.log(simdikiTarih.getMonth()+1)
// console.log(simdikiTarih.getDay())
// console.log(simdikiTarih.getHours())
// console.log(simdikiTarih.getMinutes())
// console.log(simdikiTarih.getSeconds())
// console.log(simdikiTarih.getMilliseconds())
// console.log(simdikiTarih.getTime())

//? Tarih setleme 

let simdikiTarih = new Date()
// simdikiTarih.setFullYear(2022)
// simdikiTarih.setMonth(0)
// simdikiTarih.setDate(16)
// simdikiTarih.setHours(22)
// simdikiTarih.setMinutes(43)
// simdikiTarih.setSeconds(12)
// simdikiTarih.setMilliseconds(568)

console.log(simdikiTarih)

//? toLocalString 
//* zamanı yerele göre ayarlar


console.log(simdikiTarih.toLocaleDateString());
console.log(simdikiTarih.toLocaleTimeString());
console.log(simdikiTarih.toLocaleString());

//? Kullanıcılar prompt ile doğum yılını alınız ve date objesi ile şimdiki yaşını bulan kodu yazdıralım

let dogumYili = + prompt("Doğum Yılınızı Giriniz:")
let tarih = new Date()

console.log("Yaşınız: "  + (tarih.getFullYear() - dogumYili))
console.log(tarih.getDate() + (tarih.getFullYear() - dogumYili) *365)


//? true false 
//* true: doğruyu temsil etmektedir, bir ifade doğru olduğunda vey akoşul sağlandığında true değeri kullanılmaktadır

//* false: yanlış temsil etmektedir, bir fade yanlış oldupunda veya koşulu sağlamadığında false değeri kullanılmaktadır

//? IF ve ELSE
//* karşılaştırma yapmak için kullanılır 

//? Karşılaştıma operatörleri 

//! eşitlik operatörü (==) eşittir:

// console.log(5==5);
// console.log(5==10);

// //! eşit değil operatörü (!=):

// console.log(5!=5);
// console.log(10!=5);

// //! küçüktür (<):

// console.log(5<5);
// console.log(3<5);

// //! büyüktür (>):

// console.log(5>5);
// console.log(10>5);

// //! küçük eşit (<=):

// console.log(5<=5);
// console.log(5<=10);

// //! büyük eşit (>=);

// console.log(5>=5);
// console.log(5>=10);

//? prompt üzerine 2 sayı alınsın Karşılaştırma operatörleri kullanılarak true,false değerleri console.log a yazdıralım

let say1 = prompt("Sayı 1'i giriniz: ")
let say2 = prompt("Sayı 2'yi giriniz: ")

let sonuc = say1 == say2 ? "Sayı değerleri eşittir" : "Sayı değerleri eşit değildir"
let sonuc2 = say1 >= say2 ? "Birinci sayı ikincis sayıdan büyük veya eşittir" : "birinci sayı ikinci sayıdan küçüktür" 

console.log(sonuc)
console.log(sonuc2)