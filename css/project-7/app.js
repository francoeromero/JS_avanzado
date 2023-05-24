// carrusel interactivo
const heroSwiper = new Swiper(
    // selecciono el elemento contenedor de las imagenes
    ".hero__swiper",
    {
        pagination:{
            el: ".swiper-pagination",
            clickable: true
        }
    }
);
// carrusel interactivo

// carrusel productos
const topProductSwiper = new Swiper(".top-product__swiper",{
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        600: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        }
    }
});
// carrusel productos

// flechas izq der
const topProductSwiperBtn = document.querySelector("#top-product__swiper__btn");

topProductSwiperBtn.querySelector(".btn-next").addEventListener("click", ()=>{
    topProductSwiper.slideNext();
});
topProductSwiperBtn.querySelector(".btn-prev").addEventListener("click", ()=>{
    topProductSwiper.slidePrev();
});
// flechas izq der


