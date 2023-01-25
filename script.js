var swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//sticky scroll effect
window.onscroll = function () {
  stickyFunction();
};
const stickyFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector(".header").className = "header sticky-header";
  } else {
    document.querySelector(".header").className = "header";
  }
};
