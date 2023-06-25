//? MAntıklas Operatörler

//if (kosul) {
// eğer koşul doğru ise buradaki kod bloğu çalışacaktır

//} else {
//eğer koşul sağlanmıyorsa burdaki kod bloğu çalışacaktır
//}

// let sayi;

// sayi = 0;

// if (sayi>0) {
//     console.log('Sayı Pozitiftir')
// } else if (sayi<0) {
//     console.log('Sayı Negatiftir')
// } else {
//     console.log('Sayı Sıfırdır')
// }

//* && (ve - and) operatörü
// let yas = 25;
// let mezuniyetDurumu = true;

// if (yas>18 && mezuniyetDurumu==true) { // && her ikisi de sağlanmalı.
//     console.log('Okuldan mezun olabilirsin.')
// } else {
//     console.log('Okuldan mezun olamazsın.')
// }

//* || (veya - or) operatörü

// let age = 16;
// let ehiyletBelgesiVar = true;

// if (age>=18 || ehiyletBelgesiVar==true) { // her ikisinin de sağlanmadığı durumda sağlanmaz
//     console.log('Araç kullanabilrisiniz')
// } else {
//     console.log('Araç Kullanamazsınız')
// }

//! kullanıcı yaşını dışardan girsin reşit mi değil mi 
// let isim = prompt('İsminizi Giriniz:')
// let resit = + prompt('Yaş Giriniz:')

// if (resit>=18) {
//     console.log(`Reşitsin ${isim} bey.`)
// } else {
//     console.log(`Reşitsin değilsiniz ${isim} bey.`)
// }

//! Kullanıcının yaptığı alışveriş fiyatını alınız. Allışveriş fiyatı 100 TL altındaysa 15 tl kargo ücreti alınsın 100 tl üstündeyse kargo ücreti alınmasın.

// let para = + prompt('Ne kadana harcadın söle bakim:')

// if (para>100) {
//     console.log(`Kargon bedava hadi hayırlı olsun. Borcunuz: ${para}`)
// } else {
//     console.log(`Maalesef kargo parası da vercen. Borcunuz: ${para+15}`)
// }

//! Kullanıcının sinema ya da tiyatro tercihi sorulsun sinema izlemek için 50 tl tiyatro için 100 tl öğrenci ise %50 indirim yapılsın öğrenci değil ise normal fiyatlandımra  

// let tytr = prompt('Tiyatro mu? Sinema mı (s veya t): ')
// let egitim = prompt('Öğrenci misiniz(e veya h): ')

// if (tytr=='t') {
//     if (egitim=='e') {
//         console.log(`Ödemeniz gereken tutar: ${100/2}`)
//     } else {
//         console.log(`Ödemeniz gereken tutar: ${100}`)
//     }
// } else {
//     if (egitim=='e') {
//         console.log(`Ödemeniz gereken tutar: ${50/2}`)
//     } else {
//         console.log(`Ödemeniz gereken tutar: ${50}`)
//     }
// }

//! Kullanıcının girdiği 3 sayıdan en büyüğünü bul

// let say1 = + prompt('Sayı 1 Giriniz: ')
// let say2 = + prompt('Sayı 2 Giriniz: ')
// let say3 = + prompt('Sayı 3 Giriniz: ')

// if (say1>say2) {
//     if (say1>say3) {
//         console.log(`En Büyük Sayınız: ${say1}`)
//     }
//     else {
//         console.log(`En Büyük Sayınız: ${say3}`)
//     }
// } else if (say2>say3) {
//     console.log(`En Büyük Sayınız: ${say2}`)   

// } else {
//     console.log(`En Büyük Sayınız: ${say3}`)
// }

//! şfre ve kullanıcı adı 8 karakterden az ise 

// let isim = prompt('Kullanıcı adı giriniz: ');
// let sifre = prompt('Şifre Giriniz: ');

// let il = isim.length
// let sl = sifre.length

// if ( il<=8 || sl<=8 ) {
//     console.log(`Şifreniz veya Kullanıcı adınız 8 karakterden kısa lütfen daha uzun şifre veya kullanıcı adı belirleyiniz!`)
// } else {
//     console.log(`Kaydınız alınmıştır`)
// }

//! Basit bir bakamatik uygulaması kullanıcıdan şifre alınız şifre doğru olduğu durumda işlemler bölümüne yönlendirilsin para çekme veya para yatırma işlemi yapılsın 
let isim = prompt('İsim Giriniz: ')
let sifre = prompt('Şifre Giriniz: ')

if (sifre == '123456') {
    alert(`Hoşgeldiniz ${isim} Bey!`)
    let soru = prompt('Para Yatırma veya Para Çekme işlemi yapabilirsiniz. Şu anki güncel bakiyeniz 1000 tl. Para Yatırmak için (py) Para Çekmek için (pç) yazınız.')
    if (soru == 'py') {
        let py = + prompt('Yatırmak istediğiniz tutarı giriniz: ')
        alert(`Para Yatırma işlemi gerçekleşti. Güncel Bakiyeniz: ${1000 + py}`)
    }
    else if (soru == 'pç') {
        let pc = + prompt('Çekmek istediğiniz tutarı giriniz: ')
        if (pc <= 1000) {
            alert(`Para çekme işlemi gerçekleşti. Güncel Bakiyeniz: ${1000 - pc}`)
        } else {
            alert(`Bakiye yetersiz!!`)
        }
    } else {
        alert('Lütfen Geçerli bir değer giriniz. Para Yatırmak için (py) Para Çekmek için (pç) yazınız.')
    } 
} else {
    alert('Şifre Hatalı')
}

