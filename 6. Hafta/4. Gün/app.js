//! js dom içeriğiyle metin deiştirme 

//? innerHTML

let paragraf = document.querySelector(".p")
console.log(paragraf)

//* elementin içeriğindeki yazıyı alabilmek için kullanılır
console.log(paragraf.innerHTML)

let paragraf2 = document.querySelector(".p2")
console.log(paragraf2);

console.log(paragraf2.innerText);

let paragraf3 = document.querySelector(".p3");
console.log(paragraf3)
console.log(paragraf3.innerHTML)

let paragraf4 = document.querySelector(".p4")
paragraf4.innerHTML="<b>Paragraf Kalın</b>"

//* innerHTML adamın dibi innerText bişeye yaramıyo


//! Olay dinleme 

//* web sayfamızda gerçekleşen etkileşmlerin takip edilmesi ve bu etkileşimlerin tetiklediği olaylar algılaması

//? Olay türleri

//? click
//? onChange
//? submit

//* olayları dinlemek için js de "addEventListener" yöntemi kullanılır

const button = document.querySelector(".btn")
button.addEventListener("click", function() {
    paragraf3.innerHTML = "Butona Basıldı"
})

//* ÖRNEK 1

const x = document.querySelector("#btn")
x.addEventListener("mouseover", function(){
    document.querySelector(".example").innerHTML = "mouse üstüne geldi <br>"
})
x.addEventListener("click", function(){
    document.querySelector(".example").innerHTML = "Tıklandı"
})
x.addEventListener("mouseout", function(){
    document.querySelector(".example").innerHTML = "mouse ayrıldı"
})

/* Örnek 2 */

let box = document.querySelector(".box");
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "red"
})
box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "blue"
})

/* Örnek 3 */

let form = document.querySelector(".form")
form.addEventListener("submit", function(event) {
    event.preventDefault();
let nameInput = document.querySelector(".input")
let name = nameInput.value
console.log(`ez ${name}`)
})

let select = document.querySelector("#select")
select.onchange = function(event){
    let selectedOption = event.target.value;
    console.log(selectedOption) 
}

let inp = document.querySelector("#inp");
inp.onchange = function(event){
    let girilenDeger = event.target.value;
    document.getElementById("p").innerHTML = girilenDeger 
}

//* DOM kullanarak html sayfamıza yeni öğeler oluşturabilir
//* ve bu öğelere içerik stil ve diğer özellikeri ekleyebiliriz

//! createElemen()

const div = document.createElement("div"); 
div.textContent = "Sa"

//! appendChild()

//* oluşturulan öğeyi götermek için lazım

document.body.appendChild(div)
div.style.backgroundColor = "red"

//* oluşturulan öğeye stil eklemek ve diğer özelliklerini ayarlayabilmek için ilgili özellikleri kullanabiliyoruz
//* örneğin bir stil sınıfı atamak için className özelliğini kullanabiliriz

div.className = "my-class"

const small = document.createElement("small")
small.textContent = "MErhaba ben küçük"
document.body.appendChild(small).style.backgroundColor = "aqua"

//* remove

const d = document.querySelector("#d")
d.remove()

// const a = document.querySelector("#divid")
// const text = document.createElement("p")
// text.textContent = "Bu bir yazıdır"

// const text2 = document.createElement("p")
// text2.textContent = "Prop"

// a.append(text,text2)

const eski = document.querySelector(".eski")
eski.innerHTML = "<h1>Bu bir yeni içeriktir</h1> <p>Bu yeni paragraftır</p>"

const yeni = document.querySelector(".yeni") 
yeni.textContent = "Bu bir yeni yazıdır"

const a = document.querySelector("#divid")
