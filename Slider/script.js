let time = 2500,
    currentImageIndex = 0,
    images = document
           .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("atual")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("atual")
}
function iniciar() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", iniciar)
