let currentIndex = {
    'carousel-for-movies': 0,
    'carousel-for-you': 0,
    'carousel-for-new-releases': 0
}; 

function moveSlide(step, carouselId) {
    const items = document.querySelectorAll(`#${carouselId} .carousel-item`);
    const itemsPerSlide = 3; 

   
    currentIndex[carouselId] += step;

   
    if (currentIndex[carouselId] < 0) {
        currentIndex[carouselId] = 0;
    } else if (currentIndex[carouselId] > Math.ceil(items.length / itemsPerSlide) - 1) {
        currentIndex[carouselId] = Math.ceil(items.length / itemsPerSlide) - 1;
    }

   
    const itemWidth = items[0].getBoundingClientRect().width + 20; 
    const newTransformValue = -currentIndex[carouselId] * itemWidth;
    document.querySelector(`#${carouselId} .carousel-inner`).style.transform = `translateX(${newTransformValue}px)`;

   
    updateButtons(carouselId);
}

function updateButtons(carouselId) {
    const nextButton = document.querySelector(`#${carouselId} .next`);
    const prevButton = document.querySelector(`#${carouselId} .prev`);

    
    const items = document.querySelectorAll(`#${carouselId} .carousel-item`);
    const itemsPerSlide = 3;
    nextButton.disabled = currentIndex[carouselId] >= Math.ceil(items.length / itemsPerSlide) - 1;
    prevButton.disabled = currentIndex[carouselId] <= 0;
}


document.addEventListener('DOMContentLoaded', function () {
    updateButtons('carousel-for-movies');
    updateButtons('carousel-for-you');
    updateButtons('carousel-for-new-releases');
});