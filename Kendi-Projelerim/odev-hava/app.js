const url = new URL("https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=9a31482e32236a614b47b601b3056279&units=metric");
const api = url;

fetch(api)
.then(response => response.json())
.then(data => {
    console.log(data)
    const buton = document.querySelector(".btn")
    const sehir = document.querySelector(".inp")
    
    buton.addEventListener("click", function(){
        if (sehir.value == data.name) {
            document.querySelector(".sehir").innerHTML = data.name
            document.querySelector(".degree").innerHTML = data.main.temp
            document.querySelector(".tip").innerHTML = data.weather[0].main
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".genel").className = "genel bulut"
        } else if (data.weather[0].main == "Clear") {
            document.querySelector(".genel").className = "genel gunes"
        } else if (data.weather[0].main == "Rain") {
            document.querySelector(".genel").className = "genel yagmur"
        } else if (data.weather[0].main == "Snow") {
            document.querySelector(".genel").className = "genel kar"
        }
        const derece = "<h3>ºC</h3>"
        document.querySelector(".a").insertAdjacentHTML("beforeend", derece)
    })
})
.catch(error => console.error("Veri alınırken bir hata oluştu:", error));

























