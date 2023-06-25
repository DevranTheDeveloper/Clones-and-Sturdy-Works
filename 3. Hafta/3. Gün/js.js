//! 
//*
//?
//TODO
//

//! DEĞİŞKENLER
// ! DEĞİŞKEN ATAMASI = sembloü ile yapılır

// * var,let ve const

var isim = "emre"; //eski bir kullanımdır, sonraki satırlarda farklı değişken atanabilir
var isim = "Yıldırım";

let soyisim = "Sarigul"; //ES6 ile beraber gelen let sonraki satırlarda farklı değişken atamöaz içindeki değer değişir

const pi = 3.14 // değişemeyen değer(value) alıyor.

console.log(isim, soyisim, pi);

//! ALERT

// alert("saa");

// let age = 28;

// alert(age);

// ! document.write

document.write("Helo");

let messages = "Örnek Yazı";

document.write(messages);

let firstMessages = "Bu da ikincisi";
let three_messages = "Bu da üç";

//? Veri Türleri

//! string(metinsel) veri türleri, tırnak içindeki tüm değüşkenler string veri türüdür.

let name = "Emre";
let surName = "Sarıgül";
let country = "Türkiye";
let city = "İstanbul";

console.log(name, '\n',surName, '\n',country, '\n',city);
console.log(typeof(surName));

//! number(sayısal) veri türleridir, tırnak içerisinde yazılmaz

let age = 28;
let born = 1995;
let boy = 1.87;

console.log(age,born,boy);
console.log(typeof(age));

//! object (Listeler anlamına gelmektedir)

let meyveList=["Kiraz","Çilek","aRMUT","Elma","Erik","Karpuz","Kavun","Çağla"]

console.log(meyveList)
console.log(meyveList[0])
console.log(meyveList[3])
console.log(meyveList[5])

console.log(meyveList.length)

let meyveListlength = meyveList.length

console.log(meyveListlength)

console.log(meyveList[meyveListlength-1])

//? Aşağıdaki listede "Marul" 
let list = [1,5,"Havuç","Domates",8,["salatalık","marul","patates"],"Karalahana"];
// let list5 = list[5]

// console.log(list5[1])
console.log(list[5][1])

let user1={
    name:"Emre",
    lastName:"Sarıgül",
    age:28,
    email:"emre-sarigul@gmail.com"
}
let user2={
    name:"Batuhan",
    lastName:"Yaşayan",
    age:23,
    email:"batuhan.yasayan@gmail.com"
}

console.log(user1, '\n' ,user2)

let kullanicilar=[
    {
        name:"Emre",
        lastName:"Sarıgül",
        age:28,
        email:"emre-sarigul@gmail.com"
    },
    {
            name:"Batuhan",
            lastName:"Yaşayan",
            age:23,
            email:"batuhan.yasayan@gmail.com"
    },
    {
            name:"Emircan",
            lastName:"Çubukçu",
            age:25,
            email:"emirhancbkc@gmail.com"
    }

]
console.log(kullanicilar)
console.log(kullanicilar[0].email)

// ! boolean (mantıksal veri türleri)

let veriDuru=true
let veriDurum2=false

console.log(veriDuru, veriDurum2)

// ! undefined (tanımsız değer)

let tanımsızDeger=undefined;
console.log(tanımsızDeger)

// ! null (boş değer)

let bosDeger = null;

console.log(bosDeger)

//* ARETMATİK OPERATÖRLER

//? Toplama 
// let say1 = 15;
// let say2 = 25;

// console.log(say1+say2)

let x = "22.15";
let y = 15;

console.log(x+y)
console.log(parseInt(x)+y) //bu yuvarlar
console.log(+(x)+y)// tamamen toplar

//? Çıkarma 

let sayi1 = 15;
let sayi2 = 8;

console.log(sayi1-sayi2)

//? Bölme 
let say1 = 345;
let say2 = 5;

console.log(say1/say2)
//? Çarpma 
let say3 = 345;
let say4 = 5;

//? Mod Alma kalanı verir
console.log(say3*say4)

let say5 = 10
let say6 = 5

console.log(say5%say6)

let say7 = 15;
let say8 = "5";
let sonuc = say7*+(say8)
let mod = sonuc%2==0

console.log(sonuc + ' ' + 'tek sayıdır')

//? Üs Alma 

console.log(2**1024)

//? Arttırma
let sayiArtirma = 5
sayiArtirma++

console.log(sayiArtirma)

//? Eksiltme
let sayiEksiltme = 5
sayiEksiltme--

console.log(sayiEksiltme)

//? eval (fonksiyon)

let value = eval(1+2);

console.log(value)