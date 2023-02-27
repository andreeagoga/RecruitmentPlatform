const slides = document.querySelectorAll('.carousel-slide');
const slider = document.getElementById('slider');
let currentSlide = 0;
let lastSlide = slides.length - 1;

function setTransformProp() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${index * 100}%)`;
    })
}

slider.addEventListener("blur", setTransformProp);

function changeTransformProp() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    })
}

function goToFirstSlide() {
    if (currentSlide === lastSlide) {
        currentSlide--;
    } else {
        currentSlide++;
    }
    changeTransformProp();
}

function goToPreviousSlide() {
    if (currentSlide === 0) {
        currentSlide++;
    } else {
        currentSlide--;
    }
    changeTransformProp();
}

    
    export { goToFirstSlide, goToPreviousSlide };


