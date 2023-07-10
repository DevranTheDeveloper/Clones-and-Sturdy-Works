const ul = document.getElementById("ul");
const gorev = document.getElementById("giris").value;
const ekle = document.getElementById("ekle");

const count = ul.children.length;
const li = `
    <li>
        <input type="checkbox" id="${count + 1}">
        <label for="${count + 1}">${gorev}</label>
    </li>
`

ekle.addEventListener("click", function(){
    ul.insertAdjacentHTML("beforeend", li)
})

//****************************************** */

//! Diziler 

let diziler = [1,2,3,4]; //* elemanları olan bir dizidir

//! elemanlara erişme

// console.log(diziler[1]) // çıkan sonuç 2 
// console.log(diziler.at(-1))
// console.log(diziler.at(-3))

// //! eleman ekleme 

// let dizi = [1,2,3]

// let ekle = dizi.push(4)

// console.log(dizi)

// //! eleman silme 

// let sil = dizi.pop()

//! splice 

//* splice metodu, bir dizinin içerisineki bir dizinin içerisindeki elemanları çıkarma ekleme değiştirmeye yarar

let dizi =[1,2,3,4,5]

// // let cikar = dizi.splice(2,2)

// //* ekleme 

// let ekle = dizi.splice(1,1,6,7)
// console.log(dizi)

//! includes metodu 

//* bizinin belirli bir elemanını içerip içermediğini sorgular 

// console.log(dizi.includes(3))
// console.log(dizi.includes(9))

//! indexOf metodu

//* bir dizi içerisinde belirli bir ögenini konumunu bulmak için kullanılır

// let meyve = ["elma","armut","erik","kiraz"]
// let index = meyve.indexOf("yok")
// console.log(index)

switch(new Date().getDay()) {
    case 1:
        day = "Pazartesi";
        break;

    case 2 :
        day = "Salı";
        break;

    case 3:
        day = "Çarşamba";
        break;

    case 4:
        day = "Perşembe";
        break;

    case 5:
        day = "Cuma";
        break;

    case 6: 
        day = "Cumartesi";
        break;

    case 7:
        day = "Pazar";
        break;
}
console.log(day);

//! switch-case 

//* değişkenin değerini farklı case durumlarıyla karşılaştırır if-else den farkı ise if-else içerisinde bir koşulu kpntrol ederken koşulun doğur veya yanlış olduğunnu içerideki kod bloğu çalışmaktadır switch-case de ise eşleşen bir durum olması durumunda içerideki kod bloğu çalşır