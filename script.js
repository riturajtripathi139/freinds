var istatus = document.querySelector("h5")

var addf = document.querySelector("#add")
var remove = document.querySelector("#remove")
var check = 0
addf.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Freinds"
        istatus.style.color = "green"
        addf.innerHTML = "added"
        check = 1
    } else {
        istatus.innerHTML = "ek hi baar krna tha"
        istatus.style.color = "black"
        check = 0
    }
})
remove.addEventListener("click", function () {
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"

})