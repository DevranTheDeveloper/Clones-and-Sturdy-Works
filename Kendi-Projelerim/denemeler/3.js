let ekle = document.getElementById("ekle");
let cikar = document.getElementById("cikar");


ekle.addEventListener("click", function() {
    let count = document.getElementById("tasks").children.length
    let li =  `
    <li class="li" id="list-element">
        <input type="checkbox" id="${count + 1}">
        <label for="${count + 1}">Deneme ${count + 1}</label>
    </li>
    `
    document.getElementById("tasks").insertAdjacentHTML("beforeend", li)
});
cikar.addEventListener("click", function(){
    let count = document.getElementById("tasks").children.length
    let li =  `
    <li class="li" id="list-element">
        <input type="checkbox" id="${count + 1}">
        <label for="${count + 1}">Deneme ${count + 1}</label>
    </li>
    `
    document.getElementById("tasks").lastChild.remove();
});

let blue = document.getElementById("b");
let red = document.getElementById("r");
let green = document.getElementById("g");

blue.addEventListener("click", function(){
    let box = document.getElementById("box").classList;
})