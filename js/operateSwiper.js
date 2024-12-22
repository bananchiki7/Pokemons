import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoHeight: false,
    watchOverflow: true,
    spaceBetween: 50,

    slidesPerView: 5,
    slidesPerGroup: 3,
    grid: {
        rows: 2, 
        fill: "row", 
      },

    // loop: true,
});