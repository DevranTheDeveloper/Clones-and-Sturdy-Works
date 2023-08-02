//* webstorage kendisi içerisinde içerisinde ikiye ayrılır 

//?localStorage
//?sessionStorage


//! localstorage

//* yerel depolama alanında veri saklamak için kullanılmaktadır.
//* veri erişimi yöneetimi ve farklı veri türlerini saklamak için kullanılmaktadır.

//*veri ekleme

// localStorage.setItem("userName","Emre"); // set item ile verileri ekleyebiliriz
// localStorage.setItem("age","28"); // her zaman string değer gereklidir

//* veri alma 

// let username = localStorage.getItem("username"); //getitem ile verileri çekebiliriz 
// let age = localStorage.getItem("age");

// let user = {
//     "name":"Emre",
//     "age":28
// }


//? JSON.pars() ve JSON.stringify()

// localStorage.setItem("user",JSON.stringify(user))
// let storedUser = JSON.parse(localStorage.getItem(user))
// console.log(user.name)
// console.log(user.age)

//! JSON.pars() elimizde olan JSON verisini bir string js nesnesine dönüştürürüz
//! JSON.stringify() elimizde olan js objesini JSON formatına dönüştürür

// let yetenek = [
//     {
//         title:"HTML",
//         lvl:6,

//     },
//     {
//         title:"CSS",
//         lvl:10,

//     },
//     {
//         title:"JavaScript",
//         lvl:8,

//     },
//     {
//         title:"React",
//         lvl:5,

//     },
//     {
//         title:"Node",
//         lvl:3,

//     },
//     {
//         title:"MongoDB",
//         lvl:7,

//     },
//     {
//         title:"DJango",
//         lvl:9,

//     },
// ]

// //? js nesnelerini JSON.stringfy ile JSON a dönüştürerek localStorage ye kaydedilecek duruma getiriyoruz

// let yetenekJSON = JSON.stringify(yetenek)

// localStorage.setItem("skills", yetenekJSON)

// //?js e dönüştürelim

// let storedSkills = localStorage.getItem("skills")

// let parsedSkills = JSON.parse(storedSkills)

// for (let i=0;i<yetenek.length;i++) {
//     console.log(parsedSkills[i].title)
//     console.log(parsedSkills[i].lvl)
// }


let product=[
    {
        "id":1,
        "name":"Adidas AD3203",
        "price":750
    },
    {
        "id":2,
        "name":"NIKE NK2760",
        "price":650
    },
    {
        "id":3,
        "name":"PUMA PM4860",
        "price":420
    },
    {
        "id":4,
        "name":"Reebok RB1256",
        "price":920
    },
    {
        "id":5,
        "name":"UnderArmour UA6315",
        "price":2400
    },
    {
        "id":6,
        "name":"FootLocker FL9303",
        "price":1260
    },
    {
        "id":7,
        "name":"Skechers SH1683",
        "price":4320
    },
    {
        "id":8,
        "name":"NewBalance NB2030",
        "price":1000
    },
    {
        "id":9,
        "name":"Lotto LT4235",
        "price":350
    },
    {
        "id":10,
        "name":"Lacoste LT9255",
        "price":1600
    }
]

let productJSON = JSON.stringify(product)
localStorage.setItem("uruns", productJSON)

let storedProduct = localStorage.getItem("uruns")
let storedUruns = JSON.parse(storedProduct)

for (let i = 0; i < storedUruns.length; i++) {

    delete storedUruns[i].price
    storedUruns[i].warranty = 2
    console.log(storedUruns[i])
}

let gonderSON = JSON.stringify(storedUruns)
localStorage.setItem("son", gonderSON)


//? elimizdeki json verisini js nesnesine dönüştürerek objeleri console.log a yazdır 

let cars = [
    {
        "marka":"Audi",
        "model":"rs6",
        "yıl":"2016"
    },
    {
        "marka":"Mercedes",
        "model":"E200",
        "yıl":"2020"
    },
    {
        "marka":"BMW",
        "model":"M4",
        "yıl":"2013"
    },
    {
        "marka":"Tofaş",
        "model":"Şahin",
        "yıl":"2001"
    },
]

let carsJSON = JSON.stringify(cars)
localStorage.setItem("arabas", carsJSON)

let carsCek =  localStorage.getItem("arabas")
let carsJ = JSON.parse(carsCek)

for (let i = 0;i<carsJ.length;i++) {
    carsJ[i].price = 2000000
}

let sonAraba = JSON.stringify(carsJ)
localStorage.setItem("son2", sonAraba)