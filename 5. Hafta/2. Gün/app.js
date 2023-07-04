let ul = document.getElementById("task-list");
function listeGetir() {
    
    let count = ul.children.length;
    
    let li = `
        <li style="padding: 10px; width: 300px; border: 0.5px solid black; border-radius: 5px; background-color: whitesmoke;">
            <input id="${count + 1}" class="checkbox" type="checkbox" checked>
            <label for="${count + 1}" style="font-family: Arial, Helvetica, sans-serif;">Görev ${count + 1}</label>
        </li>
        
    `;

    ul.insertAdjacentHTML("beforeend", li);
}
function listeGötür() {

    let count = ul.children.length;

    let li = `
        <li style="padding: 10px; width: 300px; border: 0.5px solid black; border-radius: 5px; background-color: whitesmoke;">
            <input id="${count + 1}" class="checkbox" type="checkbox">
            <label for="${count + 1}" style="font-family: Arial, Helvetica, sans-serif;">Görev ${count + 1}</label>
        </li>
        
    `;

    ul.style.display = "none"
}

//! FİND bir dizi içerisindeki ilk elemanı bulur.

// let calisanlar = ["batuhan","ural","emre","koray","harun"]

// let ilkCalisan = calisanlar.find(value => value=="batuhan")

// console.log(ilkCalisan)

// let calisanlar = [
//     {
//         id:1,
//         isim:"batuhan",
//         soyisim:"yaşayan"
//     },
//     {
//         id:2,
//         isim:"koray",
//         soyisim:"avcı"
//     },
//     {
//         id:3,
//         isim:"emre",
//         soyisim:"sarıgül"
//     },
// ]

// let calisanFind = calisanlar.find(value => value.isim=="batuhan")
// console.log(calisanFind)

// let developer = [
//     {
//         id:1,
//         title:"CSS"
//     },
//     {
//         id:2,
//         title:"html"
//     },
//     {
//         id:3,
//         title:"JavaScript"
//     },
//     {
//         id:4,
//         title:"Phyton"
//     },
//     {
//         id:5,
//         title:"CSS"
//     },
// ]

// let bul = developer.filter(value => value.title=="CSS")
// console.log(bul)

//* Try-Catch bir kod bloupunun hata üreteebilecek bir bölümünü ve bu hatayı yönetmek için kullanılır

// try{
//     //! hata üretebilecek kod bloğu
// } catch (error) {
//     //! hata olması durumunda hata yönetimini yapacağınız bölüm
// }

//? catch bloğu, try bloğunda oluşan hatayı yakalar ve bu hatayı yönetmek için gereklli işlemleri gerçekleştirir

//* try-catch önemi: hataları yakalayarak programın çökmesinin önüne geçmektedir

// try {
//   let sonuc = tanimlanmamisDegisken +10;
// } catch (error) {
//     console.log("bir hata oluştu gg:" +" "+ error.message)
// }

//* try-catch bloğunun ardından "finally" yapısı try-catch bloğundan bağımsız olarak her durumda çalıştırılacak olan her kodu göstermektedir.

// try {
//     consoe.log("try bloğu çalışıyoru")
// } catch(error) {
//     console.log("hata yakalandı " + error.message)
// } finally {
//     console.log("finally bloğu çalışıyor")
// }

// try {
//     let a = 10;
//     let b = 2;
//     if (b==0) {
//         throw "bir sayı sıfıra bölünmez" // error mesajını değiştirir
//     }
//     let result = a/b;
//     console.log("Sonuç: " +result)
// } catch(error) {
//     console.log("Hata yakalandı " + error)
// } finally {
//     console.log("İşlem Tamamlandı")
// }


//*  ÖRNEK *//
// try {
//     let a = 10;
//     let b = 2;
//     if (b==0) {
//         throw new Error ("bir sayı sıfıra bölünmez") //TODO throw new error ile yeni bir error mesajı tanımlanır
//     }
//     let result = a/b;
//     console.log("Sonuç: " +result)
// } catch(error) {
//     console.log("Hata yakalandı " + error)
// } finally {
//     console.log("İşlem Tamamlandı")
// }

//* throw new ile hata mesajı oluşturailirsiniz
//* new ile birlikte kullanıldığında hata sınıfını çağırmaktadır. hata sınıfının en bilinik olanı "error" ile birlikte kullanılabilir

//! kullanıcıdan sayı alınsın alınan sayının karesini hesaplasın değer 256 dan fazla ise catch a düşerek hata meajı döndğrsğn
// try {
//     let a = + prompt("Sayı giriniz:");
//     b = a*a
//     console.log(b);
//     if (b>256) {
//         throw new Error ("Hata aldınız güm")
//     }
// } catch (error) {
//     console.log("Girdiğin sayı 256 dan büyük knk: " + error.message)
// }

//! fullstack olanlar yeni bir dizeye eklensin 4 yıldız altı işe alınmasın diğerleri alınsın 

let user = [
    {
        id:1,
        title:"fullstack",
        name:"Emre",
        star:3
    },
    {
        id:2,
        title:"Front-End",
        name:"Devran",
        star:1
    },
    {
        id:3,
        title:"fullstack",
        name:"Yıldırım",
        star:4
    },
    {
        id:4,
        title:"Back-End",
        name:"Fatih",
        star:5
    },
    {
        id:5,
        title:"fullstack",
        name:"Fatih",
        star:5
    },
]

let fullstack = user.filter(value =>value.title=="fullstack" )

let stars = fullstack.filter(value => value.star >= 4)

for (i = 0; i<stars.length;i++){
    try {
        console.log(stars[i].name + " işe alındınız")
        if (user<4) {
            throw new Error ("Maalesef işe alınmadınız")
        }
    } catch (error) {
        console.log(user[1].name + " " + error.message)
    }
}


