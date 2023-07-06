//! Functions
//* belirli bir işlevi gerçekleştiren ve tekrar tekrar kullanılabilen kod bloklarıdır

function mesajVer(){
    console.log("fonksiyon çalıştı")
}
mesajVer2() // kendinden yukarıda da belirtilebilir
mesajVer() //* yazılan fonksiyon istenilen yerde çağırılır ve işleve sokulur

//TODO ************************************************* //

function mesajVer2() {
    console.log("fonksiyon 2 çağırıldı")
}

//! 3 sınav notu girilsin ortalamaları alınsın yazdır 

function ort() {
    let x = + prompt("Birinci sınavı giriniz:")
    let y = + prompt("İkinci sınavı giriniz:")
    let z = + prompt("Üçüncü sınavı giriniz:")

    let sonuc = Math.floor((x+y+z)/3);
    console.log(sonuc);
}


// let pw = prompt("Parola gir la pepe:");

// if (pw=="12345") {
//     ort();
// }

// let sayilar = [1,2,3,4,5];

// function diziTopla(sayilar) {
//     let toplam =0;
//     for (let i =0; i<sayilar.length;i++) {
//        toplam += sayilar[i]
//     }
//     return toplam
// }

// let toplamSonucu = diziTopla(sayilar);
// console.log(toplamSonucu)

//! en bütyük sayıyı yazdıran function u bulalım

let sayi = [20,60,30,100]

function bk(sayi) {    
    let enBuyuk = sayi[0];

    //işlevin dögüsü birden başlayarak dizinin ikinci elemanına kadar dizi[1] dönmesini sağlar
    // başlangucunda dizi[0] elemanın en büyük değişkeninde olduğu anlamına gelir
    
    // döngü her bir elemanı kontrol ederken eğer eleman şu anda enBuyuk değişkeninde tutulan değerden büyükse ,
    // enBuyuk değişkeni güncellenir ve en büyük sayı en büyük değişkenine gönderilir
    for (let i =0; i<sayi.length;i++) {
        if (sayi[i]>enBuyuk) {
            enBuyuk = sayi[i];
        }
    }
    return enBuyuk
}
let buyukSayi = bk(sayi)
console.log(buyukSayi)

//! fonksiyon parametreleri 

//* fonksiyon içinde kullanılmak üzere girdi değerlerini alır. ve sonraki satırlar içerisinde girdi değerlerini değiştirerek kod bloğunda kullanılır

// function selamlama(isim) {
//     console.log(`Merhaba hoş geldin ${isim}`)
// }

// let girilenİsim = prompt("İsim giriniz: ")

// selamlama(girilenİsim)

//************  **************//

// function toplam(a,b) {
//     return a+b // geri dönecek değeri belirtir
// }

// console.log(toplam(12,4))

//! kullanıcıdan virgüllerle ayırarak en sevdiği renkleri sorunuz
//! ardından yazacağınız fonksiyon ile parametre göndererek bu fdizenin uzunluğunu bulalım

// let renk = prompt("En sevdiğiniz renkleri virgülle yazınız").split(",")

// console.log(renk) // başa gelen üç nokte (...) dizi elemanlarını normal düz yazıyı değiştrir

// function renkDizi(uzunluk) {
//     return uzunluk.length // diziye giren elemanların uzunluğunun döndürür
// }

// let diziUzunluk = renkDizi(renk);
// console.log(diziUzunluk); 

//! arrow functions (=>) 

//* fonksiyonları daha kısa ve okunabilir bir hale getirmek için kullanılır 

//! iki sayıyı toplayan fonksiyonları yazdıralım 

// let toplam = (a,b) => a+b;

// console.log(toplam(5,12))

let dizi = [1,2,3,4,5]
let ciftSayilar = (dizi)=> dizi.filter(value => value%2==0)

let farkliSayi = [11,13,12,14,16,15]
console.log(ciftSayilar(dizi))
console.log(ciftSayilar(farkliSayi))

//! arrow kullanalar bir saının karesini alalom

let kare = (x)=>x*x

//TODO

// let kare = (x)=>{
//     return x*x
// }

console.log(kare(10))

//! arrowla kendi isminizi yazdırınız

// let isim = (isim)=> prompt("isim yaz")

let isimYazdir = (isim) => isim
let isim = prompt("İsim Giriniz:")

console.log(isimYazdir(isim))