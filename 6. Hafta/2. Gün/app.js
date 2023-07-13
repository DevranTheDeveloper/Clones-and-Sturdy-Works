//! URLSearchParams

//* URL parametrelerini sorgulamak için kullanılır

//*

// let sorguDizisi = 'https://www.example.com/search&q=apple&category=fruits&page=1';

//? URLSearchParams nesnesini oluşturma 

// let sorgu = new URLSearchParams(sorguDizisi)

// //*get yöntemi ile sorgu parametresi çağırma  

// // console.log(sorgu.get("q"))
// // console.log(sorgu.get("category"))
// // console.log(sorgu.get("page"))

// //* set yöntemi ile sorgu parametresini ekleme

// sorgu.set("q", "Paraver")
// sorgu.set("category", "Paraver")
// sorgu.set("page", "Paraver")

// // console.log(sorgu.toString())

// //* delete yöntemi ile category sorgu parametresini kaldırabiliriz

// sorgu.delete("q")
// console.log(sorgu.toString())

//? sorgu parametrerini url den çekme 

// let sorguDizisi = 'https://www.example.com/search&q=apple&category=fruits&page=1';
// let sorgu = new URLSearchParams(sorguDizisi);

//? sorgu parametrelerini oluşturma ve ekleme

// let sorguDizisi = 'https://www.example.com/search&q=apple&category=fruits&page=1';
// let sorgu = new URLSearchParams(sorguDizisi);

// let search = "apple";
// let fruits = "fruits";
// let page = 3;

// sorgu.set("q", search)
// sorgu.set("fruits", fruits)
// sorgu.set("page", page)

// let newURL = `${sorguDizisi}?${sorgu.toString()}`;

// // console.log(sorgu.get("q"))
// // console.log(sorgu.get("fruits"))
// // console.log(sorgu.get("page"))

// console.log(newURL)

//! JSON

//* JSON(javaScript object notation) verilerini depolamak, iletmek için kullanılmaktadır. JSON veri biçimindeki "key" ve "value" kullanılmaktadır.

// let veri = [
//     {
//         "name": "emre", 
//         "surName": "sarigul", 
//         "age": 28,
//         "isMaried": true, 
//         "hobies": ["yürüyüş","yüzmek","bisiklet"],
//         "country": {
//             "ülke": "Türkiye",
//             "şehir": "İstanbul",
//             "postCode": "1001",
//         }
//     },
//     {
//         "name": "Batuhan", 
//         "surName": "Yaşayan", 
//         "age": 28,
//         "isMaried": false,
//         "hobies": ["yürüyüş","yüzmek","bisiklet"],
//         "country": {
//             "ülke": "Türkiye",
//             "şehir": "Bolu",
//             "postCode": "2001",
//         } 
//     },
//     {
//         "name": "Su", 
//         "surName": "Kavak", 
//         "age": 24,
//         "isMaried": false,
//         "hobies": ["yürüyüş","yüzmek","bisiklet"],
//         "country": {
//             "ülke": "Türkiye",
//             "şehir": "Balıkesir",
//             "postCode": "3001",
//         }  
//     },
// ]

// //* javaScript JSON verisini ilemek için JSON adlı bir global nesne kullanılmaktadır

// //? JSON dosyasını javaScript nesnesine dönderme

// let javaScript = JSON.stringify(veri);
// console.log(javaScript)
// localStorage.setItem("deneme", javaScript)

// let json = JSON.parse(javaScript)
// console.log(json)

//? q'ya elma koy

let sorguDizisi = 'https://www.google.com/search?client=opera-gx&q=json&sourceid=opera';
let url = new URLSearchParams(sorguDizisi);

url.set("q", "elma");

console.log(url.toString())

