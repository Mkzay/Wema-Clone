window.addEventListener("load", function() {
    const imageCarousel = document.getElementById("imageCarousel");
    const images = imageCarousel.getElementsByTagName("img");
    let currentImageIndex = 0;

    function showNextImage() {
        images[currentImageIndex].style.display = "none";
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = "block";
    }

    // Hide all images initially except the first one
    for (let i = 1; i < images.length; i++) {
        images[i].style.display = "none";
    }

    // Set an interval to change images every 3 seconds (adjust as needed)
    setInterval(showNextImage, 3000);
});