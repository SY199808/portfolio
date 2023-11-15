const swiper = new Swiper(".swiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 15,
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 1500,
  },
});
