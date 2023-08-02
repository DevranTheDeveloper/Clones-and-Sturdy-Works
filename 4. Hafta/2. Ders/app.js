//! loops Döngüler

//* Döngüler belli başlı tekrar eden kodların çalışması için kulanılmaktadır.

//for (baslangicDegeri;kosul;artisDegeri){

//}

// for (let i =0;i<10; i++) {
    
//     console.log(i)
// }

// for (let i =5;i>0; i--) {
//     console.log(i)
// }

//? bir dizi içerisindeki verileri gezinme. 

// let dizi =["elma","armut","kiraz","muz","şeftali"]

// for (let i =0;i<dizi.length;i++) {
//     console.log(dizi[i])
// }

//! Dizi içerisindeki objelerden oluşan toplu veriler arasında gezinelim.

//* obje içerisi veriler aha
// let users = [
//     {
//         id:"1",
//         name:"Emre",
//         age:"28",
//     },
//     {
//         id:"2",
//         name:"Muharrem",
//         age:"24",
//     },
//     {
//         id:"3",
//         name:"Emircan",
//         age:"25",
//     }
// ]

// for (i=0;i<users.length;i++) {
//     console.log(users[i].name)
// }

// break(döngüğy kırmak) içerideki döngü break ifadesini gördüğü anda döngünün çalışması durur.

// for (let i=0; i<10; i++) {
//     if(i==8) {
//         break
//     }
//     console.log(i)
//     console.log("Dur Yolcu")
// }

//continue ( döngüyü devam ettir) dögü içerisinde kalan kısımları atlayarak bir sonraki kod bloğuna geçiş yapar.

// w

// for (let i =0; i<10;i++) {
//     if (i==3 && i==8) {
//         if (i==3) {
//             console.log(i)
//         }
//         break
//     }
//     if (i==0) {
//         console.log(i)
//     }
// }

// let toplam= 0;
// for (let i=0;i<=100;i++) {
//     if (i%25==0) {
//         toplam += i 
//     }
// }
// console.log(toplam)

//* iç içe for ların kullanılması

//*iç içe çalışan döngülerde dışardaki döngü bir kere çalıştıktan sonra içerideki döngüye geçilir, bunun amacı karmaşık yapıların kolay hale getirmek için kullanılır

// for (let i=0;i<10;i++){
//     for (let j=0; j<2; j++) {
//         console.log("sa")
//         console.log(i)
//     }
// }

//* iç içe dögülerde ters yönde çalılşacak şekikde değişebilir

// for (let i =0;i<10;i++) {
//     for (let j =i;j>=0;j--) {
//         console.log(j)
//     }
// }

//! 0 dan 3 e kadar 3 kere yazdır

// for (let i =0;i<3;i++) {
//     for (let j=0;j<3;j++) {
//         console.log(j)
//     }

// }

//* Foreach bir fögü çeşidi. Dii üzerinde her bir eleman için tekrarlayan bir işlem yapmanıza olanak sağlar.

let diller = ["php","js","c#","c++","phyton"];

diller.forEach (element =>{
    console.log(element)
});

let diller2 = ["php","js","c#","c++","phyton"];

diller2.forEach((element,index)=> {
    console.log(`Dil: ${element}, Index: ${index}`)
})

function arttir() {
    document.getElementById("sayi").innerHTML = i++
    return
}
function azalt() {
    document.getElementById("sayi").innerHTML = i--
    return
}

// dizide olan sayıların toplamını bir değişkende toplayalım

let fiyatlar = [20,12,57,34,87]
let toplamFiyat=0;

fiyatlar.forEach(element=>{
    toplamFiyat+=element;
})
console.log(toplamFiyat)

// toplu dizi obje mantığında forEach kolaylık sağlar
// let users = [
//     {
//         id:"1",
//         name:"Emre",
//         age:"28",
//     },
//     {
//         id:"2",
//         name:"Muharrem",
//         age:"24",
//     },
//     {
//         id:"3",
//         name:"Emircan",
//         age:"25",
//     }
// ]

// users.forEach(element => {
//     console.log(element.name)
// });

//! Dizi iççerisindeki küçük to büyük

let isim = ["emre","emircan","muharrem","devran","koray","yıldırım"]

isim.forEach((element) =>{
    console.log(element.toUpperCase())    
})

//!dizideki pozitif sayılaro bulunuz 

let dizi = [1,-2,-3,4,-5];
let pozitif =[]

dizi.forEach(element =>{
    if (element>0) {
        pozitif.push(element)
    }
})
console.log(pozitif)

//* For of bir dizi veya iterable(yineleyici) nesne üzerinde dolaşmak için kullanılan bir dögüdür

// let elements = ["a","b","c","d","e"];
// for(const iterator of elements){
//     console.log(iterator)
// }

let elements = ["a","b","c","d","e"];
elements.reverse()
for(const iterator of elements){
    console.log(iterator)
}

//* for 

let users = [
    {
        id:"1",
        name:"Emre",
        age:"28",
    },
    {
        id:"2",
        name:"Muharrem",
        age:"24",
    },
    {
        id:"3",
        name:"Emircan",
        age:"25",
    }
]
// dizide yer alan index numaraları döner
for (const iterator in users) {
    console.log(iterator)
}
// dizide yer alan name değerleri döndü
for (const iterator of users){
    console.log(iterator.name)
}

//* while dögü üçerisinde tanımlanan koşul sağlandığı sürece kod bloğu çalışır

//* koşul ifadesinin deoğrulupu her döngünün başında kontrol edilir

let i=0
while(i<20) {
    console.log(i)
    i++
}

// genellikle sonsuz döngüler için kullanılır 

let a =0;
while(true) {
    a++
    document.write(a)
    if (a==100) {
        
    }
}