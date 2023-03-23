let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
}
window.onscroll = () => {
  searchForm.classList.remove('active');
}


// (function() {
//     "use strict";
//   /**
//    * Clients Slider
//    */
//    new Swiper('.clients-slider', {
//     speed: 400,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false
//     },
//     slidesPerView: 'auto',
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 2,
//         spaceBetween: 20
//       },
//       480: {
//         slidesPerView: 3,
//         spaceBetween: 20
//       },
//       640: {
//         slidesPerView: 4,
//         spaceBetween: 20
//       },
//       992: {
//         slidesPerView: 6,
//         spaceBetween: 20
//       }
//     }
//   });

//   /**
//    * Testimonials slider
//    */
//   new Swiper('.testimonials-slider', {
//     speed: 600,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false
//     },
//     slidesPerView: 'auto',
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true
//     }
//   });

//   /**
//    * Animation on scroll
//    */
//   window.addEventListener('load', () => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//       once: true,
//       mirror: false
//     })
//   });

// })()


// Navbar 

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav").classList.add("nav-add");
    document.getElementById("logo-img").classList.add("logo-img-add");
    // document.querySelector(".nav-list").classList.add("nav-list-add");

    const elements = document.querySelectorAll('.nav-list');
    elements.forEach((element) => {
      element.classList.add('nav-list-add');
    });

  } else {
    document.getElementById("nav").classList.remove("nav-add");
    document.getElementById("logo-img").classList.remove("logo-img-add");
    // document.querySelector(".nav-list").classList.remove("nav-list-add");
    const elements = document.querySelectorAll('.nav-list');
    elements.forEach((element) => {
      element.classList.remove('nav-list-add');
    });

  }
}

