var allImages = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBox = document.getElementById("lightBox");
var escapeBtn = document.getElementById("escape");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var currentIndex;

escapeBtn.addEventListener("click", close);
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click",prevSlide);



for (var i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener("click", function (e) {
        currentIndex = allImages.indexOf(e.target);
        lightBoxContainer.classList.replace("d-none", "d-flex");
        var currentImage = e.target.getAttribute("src");
        lightBox.style.backgroundImage = `url(${currentImage})`

    });
}

function close() {
    lightBoxContainer.classList.replace("d-flex", "d-none");
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= allImages.length) currentIndex = 0;
    var nextImage = allImages[currentIndex].getAttribute("src");
    lightBox.style.backgroundImage = `url(${nextImage})`

}
function prevSlide() {
    currentIndex--;
    if (currentIndex <0)currentIndex=allImages.length-1;
    var prevImage = allImages[currentIndex].getAttribute("src");
    lightBox.style.backgroundImage = `url(${prevImage})`

}
document.addEventListener("keyup",function(e){
switch(e.key){
    case "ArrowLeft":
prevSlide()
break;
    case "ArrowRight":
nextSlide()
break;
    case "Escape":
close()
break;

}
})
document.addEventListener("mouseup",function(e){
    if(e.path.length<=5){
        close()
    }
})
