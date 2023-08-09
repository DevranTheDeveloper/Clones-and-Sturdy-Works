//! Mağazada 100 tl 10% indirim 200 20% 500 30% kazandığını ve ödeyeceği tutarı yazdıran kodu bulalım

// let soru = + prompt(`Sepet Tutarı Giriniz: `)

// if (soru>=100 && soru<200) {
//     alert(`İndirim kazandınız tutarınız: ${soru*0.1}`)
// } else if (soru>=200 && soru<500) {
//     alert(`İndirim kazandınız tutarınız: ${soru*0.2}`)
// } else if (soru>=500) {
//     alert(`İndirim kazandınız tutarınız: ${soru*0.3}`)
// }

//! Ürünlerden herhangi birini seçerek sepete eklesin 3.000 - 10.000 arası 25% indirim 
//!500 - 2.000 arası 10% indirim 
//! 20.000 üzeri 40% 


let urunler = {
    "Televizyon" : 50,
    "Telefon" : 60,
    "Bilgisayar" : 100,
    "Kasa" : 70,
    "Klavye" : 20,
}

//* Random 
//*math.random()
//* math.floor() yuvarlama yapar

// for (let i = 0; i<1; i++) {
//     let sayi = Math.floor(Math.random() * 100 + 1)
//     if (sayi < 50) {
//         console.log("Tura")
//     } else if (sayi == 50) {
//         console.log("Dik")
//     } else {
//         console.log("Yazı")
//     }
//     console.log(sayi)
// }

let dizi = ["muz", "armut", "elma", "kiraz", "karpuz"];

let rastgeleMeyva = Math.floor(Math.random() * dizi.length );
let rastgeleMeyva1 = Math.floor(Math.random() * dizi.length );
let rastgeleMeyva2 = Math.floor(Math.random() * dizi.length );

for (let i = 0; i<1; i++) {
    console.log(dizi[rastgeleMeyva])
}
for (let a = 0; a<1; a++) {
    console.log(dizi[rastgeleMeyva1])
}
for (let b = 0; b<1; b++) {
    console.log(dizi[rastgeleMeyva2])
}

//* math.round() yuvarlar

//* math.ceil() kendisinden sonraki en yakın tam sayıya yuvarlar

//! 0-100 arasında rastgele bir puan(tam sayı) elde edelim.

let puan = Math.floor(Math.random() * 101)

console.log(puan)

//! katılımcı listemiz olsun ve random biri seçilsin eğer liste boş ise çekilişe katılan kimse yok yazdırdırsın rastgele seçilen katılımcıyı yazdır

// let cekilis = ["1","2","3","4","6","7","8","9","12","23","34","45"]

// let cekilisRandom = Math.floor(Math.random()* cekilis.length)

// if (cekilisRandom>0) {
//     alert(`TEBRİKLER kazandınız: ${cekilis[cekilisRandom]}`)
// } else {
//     alert(`KAZANAN YOK ZAAAA`)
// }



function zarAt() {
    let zar = [1,2,3,4,5,6];
    let randomZar = Math.floor(Math.random() * 6)
    document.getElementById("p").innerHTML = zar[randomZar];
    document.getElementById("img").style.visibility = "visible";
    return(zarAt)
}

document.getElementById("buton").onclick= zarAt();

//* timing event yönetme falan filan 

//* üç temel timing event vardır:
//* 1- setTimeout() belirli bir zaman sonra bir işlevi veya kod bloğunun çalışmasını sağlar 
//* 2- setInterval() belirli bir süreç aralığında bir işlevin veya kod bloğunun çalışmasını sağlar
//* 3- clearTimeout() ve clearInterval() ile oluşturulan zamanayıcılaarı devre dışı bırakır 

// let mesaGoster = () =>{
//     alert("SA")
// }
// // setTimeout(mesaGoster,6000);

// // let info = () =>{
// //     console.log("")
// // }


// setInterval(() =>{
//     console.log("Her 2 saniyede bir mesaj çakar")
// }, 2000)

// let sayac = 0;
// let zamanlayici;

// let arttir = () =>{
//     sayac++
//     console.log("sayaac değeri" + sayac)
//     if (sayac == 8) {
//         clearInterval(zamanlayici);
//         console.log("Zamanlayıcı faka bastı")
//     }
// }
// zamanlayici = setInterval(arttir,2000)

//* Örnek

// let sayi = 10;
// let zamanlayici;

// let geriSayim = () =>{
//     console.log("Bombanın patlamasına "+ sayi + " sn kaldı")
//     sayi--
//     if (sayi==0) {
//         clearInterval(zamanlayici)
//         console.log("BOOOOOOOOOM")
//     }
// }

// zamanlayici = setInterval(geriSayim,1000);


let renkRandom = () =>{
    let randomColor = Math.floor(Math.random()*87451).toString(13);
    document.body.style.backgroundColor = "#" + randomColor;
}

setInterval(renkRandom,1)


if(x=2){alert("hello")} 