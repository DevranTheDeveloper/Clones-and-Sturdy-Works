//* tanımlanan koşul sağlandıkça while döngüsü kod bloğunun çalışmasını sağlamaktadır

let i =0;

while(i<=20) {
    console.log(i)
    i++
}

//! bir sayı belirtelim ve kullanıcının sayıyı bilmesi için 5 hak verelim 
//! kaçıncı hakta bildiyse onu yazdırsın 



// function deneme() {
//     let hak = 5;
//     let sayi =Math.floor(Math.random() * 30 +1)


//     while (true) {
//         let tahminEt = document.getElementsById("input").value;
//         if (tahminEt < sayi) {
//             hak--
//             document.getElementById("h1").innerHTML= `Tahmininiz sayıdan küçük arttır accık. Kalan hak: ${hak}`;
//             continue
//         } else if (tahminEt > sayi) {
//             hak--
//             document.getElementById("h1").innerHTML= `Tahmininiz sayıdan büyük azalt accık. Kalan hak: ${hak}`;
//             continue
//         } else if (tahminEt==sayi) {
//             document.getElementById("h1").innerHTML= `Helal lan yusufi`;
//             break
//         }
//         if (hak <= 0) {
//             document.getElementById("h1").innerHTML= "Hakkın Kalmadı";
//             break
//         }
    
//     }
// }

//!-----------------------------------------------

// let sifre = 123456;
// let miktar = 10000;
// let hak = 3;

// while (hak>0) {
//     let sifreGir = prompt(`Şifrenizi Giriniz:`) 
//     if (sifreGir==sifre) {
//         let islem = prompt(`Hangi işlemi yapmak istersiniz? Para yatırmak için "y", çekmek için "ç" yazınız.`)
//         if (islem=="y") {
//             let yatirma = + prompt("Yatırmak istediğiniz tutarı giriniz");
//             alert(`Yatırma işlemi gerçekleşti güncel bakiyeniz ${miktar + yatirma}`)
//             let islemDevam = prompt("Devam etmek ister misin? e, h")
//             if (islemDevam=="e") {
//                 continue
//             } else if(islemDevam=="h") {
//                 break
//             }
//         } else if (islem=="ç") {
//             let cekme = + prompt("Çekmek istediğiniz tutarı giriniz");
//             if (cekme>miktar) {
//                 alert(`Borca girmek isteniyosan acilen geri dön`)
//                 continue
//             }
//             alert(`Çekme işlemi gerçekleşti güncel bakiyeniz ${miktar - cekme}`)
//             let islemDevam = prompt("Devam etmek ister misin? e, h")
//             if (islemDevam=="e") {
//                 continue
//             } else if(islemDevam=="h") {
//                 break
//             }
//         } else {
//             alert(`Geçerli bir değer giriniz`)
//             continue
//         }
//     } 
//     else {
//         hak--
//         alert(`Hatalı şifre girdiniz tekrar deneyiniz kalan hal: ${hak}`)
//         continue
//     }
//     if (hak=0) {
//         alert("GG")
//     }
// }

//! MAP

//! yeni bit dizi oluştrumada kullanılmaktadır ve her eleman üzerinde belirli işlemler yapabilmektedir

// let sayilar = [1,2,3,4,5,6]
// let yeniSayilar = sayilar.map(value =>value*3)

// console.log(yeniSayilar)

//* Sepete eklenen ürünlerin fiyatı bir dizi içerisinde toplansın. Daha sonra bu fiyatlara sepette %50 indirim uygulayan 

let sepet = [250,300,500,100]
let yeniSepet = sepet.map(value => value*0.5)
console.log(yeniSepet)

//* isimlerin yer aldığı dizi oluşturulsun vr yrni dizide isimlerin hepsi büyük yazdırılsın 

let isim = ["emre","pembe","koray"]
let yeniIsin = isim.map(value => value.toUpperCase())
console.log(yeniIsin)

let users = [
    {
        id:1,
        name:"emre",
        age:28
    },
    {
        id:2,
        name:"Yıldırım",
        age:18
    },
    {
        id:3,
        name:"Devran",
        age:18
    }
]

let meyve =["elma","kiraz","erik","ananas"]
let yeniMeyve = meyve.map(value => value.length)
console.log(yeniMeyve)

//! Filter 

//! Bir dizi içerisinde koşul sağlandığında elemanları filtreleyen bir dizi oluşturur

let sayilar = [1,2,3,4,5,6]
let ciftSayilar = sayilar.filter(value => value%2==0)
console.log(ciftSayilar)

//! let sayilar1 = [-3,-2,-1,0,1,2,3,4] pozitifleri bul

let sayilar1 = [-3,-2,-1,0,1,2,3,4]
let pozitif = sayilar1.filter(value=> value>0)
console.log(pozitif)
