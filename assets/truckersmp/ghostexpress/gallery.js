const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next')
const galleryImg = document.querySelectorAll('.gallery-img');

let currentlySelected = 0;

prevButton.addEventListener('click', function() {
    galleryImg[currentlySelected].classList.remove('active');
    currentlySelected--;
    galleryImg[currentlySelected].classList.add('active');
    nextButton.disabled = false;

    if (currentlySelected === 0) {
        prevButton.disabled = true;
    }
});

nextButton.addEventListener('click', function () {
    galleryImg[currentlySelected].classList.remove('active');
    currentlySelected++;
    galleryImg[currentlySelected].classList.add('active');
    prevButton.disabled = false;

    if (galleryImg.length - 1 === currentlySelected) {
        nextButton.disabled = true;
    }
});