// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


var eleM = document.querySelector("#elem-container")
var fiXed = document.querySelector("#fixed-image")

eleM.addEventListener("mouseenter", function () {
    fiXed.style.display = "block"
})

var eleM = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")

eleM.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})


var elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
    });
});
