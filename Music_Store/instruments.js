const instruments = [
    {
        "img": "/Music_Store/İmg/urun1.jpg",
        "name": "J & D E-Gitarre ST Vintage Blue",
        "dcrpct": "Very Bass",
        "price": "149,00 €",
        "id": "e-g"
    },
    {
        "img": "/Music_Store/İmg/urun24.jpg",
        "name": " Yamaha SVC-110 Silent Cello",
        "dcrpct": "Very Bass",
        "price": "2.879,00 €",
        "id": "c-v"
    },
    {
        "img": "/Music_Store/İmg/urun3.jpg",
        "name": "Gibson SG Special Vintage Cherry",
        "dcrpct": "Very Bass",
        "price": "1.444,00 €",
        "id": "e-g"
    },
    {
        "img": "/Music_Store/İmg/urun5.jpg",
        "name": "Gibson ES-335 Figured Sixties",
        "dcrpct": "Very Bass",
        "price": "3.899,00 €",
        "id": "e-g"
    },
    {
        "img": "/Music_Store/İmg/urun14.jpg",
        "name": "Yamaha B1 SC3 PE, 109cm schw",
        "dcrpct": "Very Bass",
        "price": "5.990,00 €",
        "id": "a-p"
    },
    {
        "img": "/Music_Store/İmg/urun6.jpg",
        "name": "Fender Limited Edition American",
        "dcrpct": "Very Bass",
        "price": "1.315,00 €",
        "id": "b-g"
    },
    {
        "img": "/Music_Store/İmg/urun7.jpg",
        "name": "Gewa G3 Studio E-Drum Set",
        "dcrpct": "Very Bass",
        "price": "1.899,00 €",
        "id": "e-d"
    },
    {
        "img": "/Music_Store/İmg/urun8.jpg",
        "name": "Roland TD-17KVX2 E-Drum Set",
        "dcrpct": "Very Bass",
        "price": "1.698,00 €",
        "id": "e-d"
    },
    {
        "img": "/Music_Store/İmg/urun19.jpg",
        "name": "Monzani Violinset Legato 31 4/4",
        "dcrpct": "Very Bass",
        "price": "149,00 €",
        "id": "c-v"
    },
    {
        "img": "/Music_Store/İmg/urun9.jpg",
        "name": "Gewa E-Drum Set G9 PRO 5 SE",
        "dcrpct": "Very Bass",
        "price": "6.299,00 €",
        "id": "a-d"
    },
    {
        "img": "/Music_Store/İmg/urun10.jpg",
        "name": " Yamaha Stage Custom Birch SBP2F56W Honey Amber",
        "dcrpct": "Very Bass",
        "price": "1.039,00 €",
        "id": "a-d"
    },
    {
        "img": "/Music_Store/İmg/urun11.jpg",
        "name": "Yamaha Rydeen RDP2F5 Silver Glitter",
        "dcrpct": "Very Bass",
        "price": "689,00 €",
        "id": "a-d"
    },
    {
        "img": "/Music_Store/İmg/urun12.jpg",
        "name": "Fame Maple Standard Jungle Set Schlagzeug",
        "dcrpct": "Very Bass",
        "price": "359,00 €",
        "id": "a-d"
    },
    {
        "img": "/Music_Store/İmg/urun13.jpg",
        "name": "Kawai E-200 SB schwarz matt",
        "dcrpct": "Very Bass",
        "price": "4.790,00 €",
        "id": "a-p"
    },
    {
        "img": "/Music_Store/İmg/urun15.jpg",
        "name": "Schimmel FRIDOLIN F 121",
        "dcrpct": "Very Bass",
        "price": "5.890,00 €",
        "id": "a-p"
    },
    {
        "img": "/Music_Store/İmg/urun4.jpg",
        "name": " Gibson J-45 Standard VS",
        "dcrpct": "Very Bass",
        "price": "2.799,00 €",
        "id": "a-g"
    },
    {
        "img": "/Music_Store/İmg/urun16.jpg",
        "name": " Yamaha CK88",
        "dcrpct": "Very Bass",
        "price": "1.399,00 €",
        "id": "e-p"
    },
    {
        "img": "/Music_Store/İmg/urun2.jpg",
        "name": "J & D E-Gitarre LSC Gold Top P90",
        "dcrpct": "Very Bass",
        "price": "159,00 €",
        "id": "e-g"
    },
    {
        "img": "/Music_Store/İmg/urun20.jpg",
        "name": "Fame Handmade Series 4/4",
        "dcrpct": "Very Bass",
        "price": "349,00 €",
        "id": "c-v"
    },
    {
        "img": "/Music_Store/İmg/urun17.jpg",
        "name": "Casio CDP-S160 BK Set",
        "dcrpct": "Very Bass",
        "price": "599,00 €",
        "id": "e-p"
    },
    {
        "img": "/Music_Store/İmg/urun18.jpg",
        "name": "Yamaha C1X PE Flügel, 161cm",
        "dcrpct": "Very Bass",
        "price": "24.190,00 €",
        "id": "g-p"
    },
    {
        "img": "/Music_Store/İmg/urun21.jpg",
        "name": "Eastman Student Bass 3/4",
        "dcrpct": "Very Bass",
        "price": "1.890,00 €",
        "id": "c-b"
    },
    {
        "img": "/Music_Store/İmg/urun22.jpg",
        "name": "Primavera 200 Cello Set 3/4",
        "dcrpct": "Very Bass",
        "price": "649,00 €",
        "id": "v-v"
    },
    {
        "img": "/Music_Store/İmg/urun23.jpg",
        "name": "Fame EV-1312 Electric Violin",
        "dcrpct": "Very Bass",
        "price": "199,00 €",
        "id": "c-v"
    },
    
]

const prdc = document.querySelector(".products")

for (let count of instruments) {
    const box = `
        <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-12" data-filter="${count.id}">
            <div class="pimg">
                <img src="${count.img}" alt="">
            </div>
            <div class="aciklap">
                <h5>${count.name}</h5>
                <p>${count.price}</p>
            </div>
            <div class="add">
                <button>Add To Cart</button>
            </div>
        </div>
    `
    prdc.insertAdjacentHTML("beforeend", box)
}
const filter = document.querySelector("#filter");

filter.addEventListener("click", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    if (checkboxes.length === 0) {
      // Hiçbir onay kutusu seçilmediyse, tüm kutuları görünür yap
      const boxes = document.querySelectorAll('.box');
      boxes.forEach((box) => {
        box.style.display = "block";
      });
    } else {
      const selectedInstruments = Array.from(checkboxes).map((checkbox) => checkbox.value);
    
      const boxes = document.querySelectorAll('.box');
    
      boxes.forEach((box) => {
        const filterValue = box.dataset.filter;
      
        if (selectedInstruments.includes(filterValue)) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    }
  });
