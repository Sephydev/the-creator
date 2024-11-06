const partnerCarousel = document.getElementById("partner-carousel");
const leftArrowReview = document.getElementById("left-arrow-review");
const rightArrowReview = document.getElementById("right-arrow-review");
const reviewCarousel = document.getElementById("review-carousel");

partnerCarousel.addEventListener("wheel", function(e) {
    if (e.deltaY > 0) {
        partnerCarousel.scrollLeft += 50;
        e.preventDefault();
    } else {
        partnerCarousel.scrollLeft -= 50;
        e.preventDefault();
    }
})

leftArrowReview.addEventListener("click", function(e) {
    reviewCarousel.scrollLeft -= 1000;
})

rightArrowReview.addEventListener("click", function(e) {
    reviewCarousel.scrollLeft += 1000;
})

reviewCarousel.addEventListener("wheel", function(e) {
    if (e.deltaY > 0) {
        reviewCarousel.scrollLeft += 50;
        e.preventDefault();
    } else {
        reviewCarousel.scrollLeft -= 50;
        e.preventDefault();
    }
})