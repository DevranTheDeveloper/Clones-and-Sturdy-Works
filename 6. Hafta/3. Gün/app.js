//! Asekron Yapılar

//* bir programın işlemleri sıralı olarak değil eş zamanlı olarak gerçekleştirmemize olanak sağlayan bir programlama yaklaşomıdır
//* Bu yaklaşım işlem sürelerinin uzun olduğu zamanlarda giriş/çıkış (dosya okuma/ yazma, ağ istekleri, veri tabanı sorguları) vb.
//* bekleme sürelerinde zaman kaybetmeyi önler ve programın daha etkin olarak çalışmasını sağlar.

//! setTimeout ve setInterval birer asebkron yapıdır

// setTimeout(()=>{
//     console.log("1. fonksiyon çalıştı")
// }, 3000) // ms uygular 

// setTimeout(()=>{
//     console.log("2. fonksiyon çalıştı")
// }, 2000)

// setTimeout(()=>{
//     console.log("3. fonksiyon çalıştı")
// }, 1000)

// //? kodu ilk okuduğunda yukarıdan aşağı okuyor diye düşünebliriz 
// //? hatta bu doğru da gecikmeler farklı dostum

// //! async await 

// //* programlama modelimize daha okunabilir ve senkron bie şekilde yazmamızı sağlayan bir yapıdadır.
// //* async anahtar kelimesi bir fonksiyonun asekron olduğunu belirtirken, await anahtar kelimesi bir asenkron işlemin tamamlanmasını beklemimizi sağlar.

// let getUser = async() => {
//     let getData = await fetch("https://dummyjson.com/carts")
//     let data = await getData.json()
//     console.log(data)
// }

// getUser()

// let urunler = async() => {
//     try {
//         let getData = await fetch("https://dummyjson.com/users");
//         let data = await getData.json();
//         console.log("Ürünler: ", data);
//     } catch (error) {
//         console.log("hata", error);
//     }
// }

// urunler()

//* fetch işlemi başarısız olursa hata mesajı döner

//* bir uyfulama bir api yi kullanarak başka bir uygulamayla iletişim ku kurabilir
//* ve bu iletişim belirli işlevler igerçekleştirir

//! fetch()

//* web tarayıcılarında bulunan bir apidir ve http isteklerini yapmak için kullanılır 
//* fetc fonksiyonu asenkron bir fonksiyodur.

//* Fetch fnksiyonu ile apiye bir GET,POST,DELETE,PUT ve HTTP isteklerini yapmak için kullanılır 
//* fetch ile veri alabiir veya veri gçnferebilirsiniz

//!GET

// fetch("https://api.example.com/data")
// .then(Response => Response.json())
// .then(data => console.log(data))
// .catch(error => console.log("hata", error))

//TODO yukarıda yer alan örnekte .then() methodu ile gelcekte tanımlanacak bir değer başarıyla tamamlandığında çalışacak olan geri çağırma fonksiyonunu tanımlamak içim kullanılır.
//TODO gelevekte tanımlanacak olan değer hata döndürürse içeride çalışacak olan kod bloğu.

//!POST

// fetch("https://dummyjson.com/products",
// {
//     method: "POST",
//     Headers: {
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify({title:"başlık", body:"İÇERİK", id:1})
// })
// .then(Response => Response.json())
// .then(data => console.log(data))
// .catch(error => console.log("hata", error))

//TODO yukarıdaki örnekte method: "POST" HTTP isteğinin türünü belirtir
//TODO headers: HTTP isteğiyle gönrderilecek olan başlıkları belirtir
//TODO "Content-Type" : "application/json" başlığı gönderilen verinin json formatında olduğunu belirtir.
//TODO body: HTTP isteğiyle gönderilecek olan veriyi belirtir.
//TODO tüm bu veriler genellikle POST ve PUT isteklerinde kullanılır. 

//! DELETE 

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "DELETE"
// })
// .then(res => {
//     if (res.ok) {
//         console.log("İstek Tamamlandı")
//     } else {
//         throw new Error ("İstek patladı")
//     }
// })
// .catch(error => console.log("hata", error))

fetch("./product.json")
.then(Response => Response.json())
.then(data => console.log(data))
.catch(error => console.log("Hata", error))

//! DOM 

//* DOM (Document Object Model), JavaScript'in etkileşiimde bulunmasına sağlayan bir api dir 
//* DOM HTML veya XML belgesinin bir temsili olarak oluşturulan ağaç yapısıdır
//* bu ağaç yapısı, HTML öğelerini, özelliklerini ve metin içeriğini manipüle etmemize olanak sağlar 

//! ÖĞELERE ULAŞMA 

//? getElementById("") > elementin id sine göre elemente uğlaşır. 

let baslik = document.getElementById("baslik");
console.log(baslik)

//? getElementsByClassName("") > classına göre alıyo 

let p = document.getElementsByClassName("p");
console.log(p)

//* getElementsByClassName bizlere calssa ulaşırken bir HTMLCollection döndürür.
//* Bunun sebebi: bir elemtin birden fazla class a sahip olmasından kaynaklı

//* Elimizde 4 adet button olsn class = myButton

let myButton = document.getElementsByClassName("myButton");
for (let i of myButton) {
    console.log(i) //* elemamlara tek tek ulaşmak için HTMLCollection 
}

//? getElementsByTagName => tag ismine göre 

let tag = document.getElementsByTagName("h5")
console.log(tag)

//? querySelector => elementin id, class,tag vb ulaşılır 

let queryClass = document.querySelector(".className") // class lara "." ile  ulaşılır
let queryId = document.querySelector("#idName") // id lere "#" ile ulaşılır.
let queryTag = document.querySelector("span") // tagler boş yazılır

//? querySelectorAll 

let queryAll = document.querySelectorAll("span")
console.log(queryAll)

//* toplu verilere erişmek için doğrudan querySelector kullanılmaz onun yerine querySelectorAll kullanabiliriz. 

//* bize node list verir

//? NodeList ve HTMLCollection arasındaki fark

//* node list statik bir yapıdadır ve dizi içerisinde yeni eleman eklendiğinde dizinin değierini değiştirmez 
//* HTMLCollection ise dinamiktir bir yapıdadır ve dizi içerisinde güncelleme yapılabilir 

let myList = document.getElementsByClassName("myList")
let myListElement = myList[0].getElementsByTagName("li")
console.log(myListElement.length)

let element1 = document.querySelector(".kucuk-baslik");
let element2 = document.querySelector("small");
let element3 = document.querySelector("#italic");

console.log(element1)
console.log(element2)
console.log(element3)