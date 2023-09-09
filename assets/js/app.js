const a = document.getElementById("nav")
const bgimg = document.querySelector(".bg_img")
const b = document.querySelector("#toggle")

function responsive() {
    a.classList.toggle("show")
    b.classList.toggle("overflow_hidden")
}
a.addEventListener("click", function() {
    a.classList.toggle("show")
    b.classList.toggle("overflow_hidden")
})