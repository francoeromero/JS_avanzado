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
})