// file to provide the slider functionality
// and the dots functionality
// and the prev and next buttons functionality

// 1. Create a variable to store the current slide
const slider = document.querySelector('.slider');
let currentSlide = 0;
// 2. Create a variable to store the total number of slides
const totalSlides = slider.querySelectorAll('.slide').length;
// 3. Create a variable to store the dots container
const dotsContainer = document.querySelector('.dots-container');
// 4. Create a variable to store the dots
const dots = document.querySelectorAll('.dot');
// 5. Create a variable to store the prev button
const prevButton = document.querySelector('.prev');
// 6. Create a variable to store the next button
const nextButton = document.querySelector('.next');

// 7. Initially, set the slides to an offset of 0 + index * 100vw
const setSlidePosition = (slide, index) => {
  slide.style.left = `${index * 100}vw`;
}
slider.querySelectorAll('.slide').forEach(setSlidePosition);

// 8. Create a function to move to the next slide
const moveToSlide = (slider, currentSlide) => {
  slider.style.transform = `translateX(-${(currentSlide % totalSlides) * 100}vw)`; 
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  }
  )
}

// 9. Create a function to update the current slide
const updateCurrentSlide = (n) => {
  currentSlide = (n + totalSlides) % totalSlides;
}

// 10. Create a function to move to the next slide
const moveToNextSlide = () => {
  moveToSlide(slider, currentSlide + 1);
  updateCurrentSlide(currentSlide + 1);
}

// 11. Create a function to move to the previous slide
const moveToPrevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = totalSlides;
  }
  moveToSlide(slider, currentSlide - 1);
  updateCurrentSlide(currentSlide - 1);
}


// 13. Add an event listener to the prev button
prevButton.addEventListener('click', moveToPrevSlide);

// 14. Add an event listener to the next button
nextButton.addEventListener('click', moveToNextSlide);

// 15. Add an event listener to the document
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    moveToPrevSlide();
  } else if (e.key === 'ArrowRight') {
    moveToNextSlide();
  }
}
)



