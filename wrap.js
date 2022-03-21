import Swiper from "swiper/swiper-bundle.esm.js";

import "swiper/swiper-bundle.css";
const swiper = new Swiper(".swiper", {
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
