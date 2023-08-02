let isim = document.getElementById("dvrn");
let header = document.getElementById("hdr");
let box = document.getElementById("box");

isim.addEventListener("click", function() {
    isim.style.fontSize = "80px"
    isim.style.transition= "all 300ms"
    isim.style.marginTop= "32px"
    header.style.transition= "all 300ms"
    header.style.transitionDelay= "400ms"
    header.style.paddingTop= "1%"
    box.style.transition= "all 300ms"
    box.style.transitionDelay= "400ms"
    box.style.display= "block"
});