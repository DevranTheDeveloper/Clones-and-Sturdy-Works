

// let ort = eval(not1 + not2 + not3) / notlar.length


// if (ort>50) {
//     console.log("Geçti!!")
// }
// else {
//     console.log("Geçemedi.")
// }

let x = 121;
let y = 10;
let z = x - y;

if ( 10<z && z<50) {
    console.log("arasında")
} 
else {
    console.log("arasında değil")
}

let a = 40;
let b = 5;
let c = a/b%2

if (c == 1) {
    console.log("Sayı Tektir")
}
else {
    console.log("satı çifttir")   
}

let final = 70;

let notlar = [

    not1 = 18,
    not2 = 42,
    not3 = 56,
]
let ort = eval(not1 + not2 + not3) / notlar.length

if (final<50) {
    console.log("Kaldı")

} else {
    if (ort>=50 || final>=70 ) {
        console.log("Geçti")
    }
    else {
        console.log("Geçemedi")
    }
}

let ad = "Devran"
let soyAd = "Sever"
let yas = "66"
let sehir = "İst"

let emekli = (65-yas > 0) ? "Emekliliğe " + (65-yas) + " yıl kaldı." : "Zaten emekliyim"
//let mesaj = "Benim Adım " + ad + ' ve soyadım ' + soyAd + '. ' + sehir + '\'de yaşıyorum.' + 'Emekliliğe '+ (65-yas) + ' yıl kaldı.' 
let mesaj = `Benim Adım ${ad} ve soyadım ${soyAd}. ${sehir}'de yaşıyorum. ${emekli}` 

console.log(mesaj)

let kursAdi = "Jomple uygulamalı web geliştirme eğitimi"

let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[0];
sonuc = kursAdi.slice(0, 6);
sonuc = kursAdi.slice(6);
sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.replace("eğitimi","kursu");
sonuc = kursAdi.trim();
sonuc = kursAdi.indexOf("Komple")
sonuc = kursAdi.split(" ");

console.log(sonuc);

let toplam = 0;

for (let i = 0; i <= 100; i += 2) {
  toplam += i;
}

console.log("0'dan 100'e kadar olan çift sayıların toplamı: " + toplam);