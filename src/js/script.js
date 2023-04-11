//Меню Бургер
$(document).ready(function(){

	$('.header__burger').click(function(event){
		$('.header__burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


// Карусель "Главная" начало
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
// Карусель "Главная" конец


document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Mobile nav toggle
   */

  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Porfolio isotope and filter (РАБОТАЕТ!!!! СКРЫЛ ДЛЯ ТОГО ЧТОБ СДЕЛАТЬ НОВЫЙ ФИЬТР АРТЕМИЮ. ЭТОТ ОТКРЫТЬ 01.02.23!!!!!!!!)
   */
  // let portfolionIsotope = document.querySelector('.portfolio-isotope');

  // if (portfolionIsotope) {

  //   let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
  //   let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
  //   let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

  //   window.addEventListener('load', () => {
  //     let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
  //       itemSelector: '.portfolio-item',
  //       layoutMode: portfolioLayout,
  //       filter: portfolioFilter,
  //       sortBy: portfolioSort
  //     });

  //     let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
  //     menuFilters.forEach(function(el) {
  //       el.addEventListener('click', function() {
  //         document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
  //         this.classList.add('filter-active');
  //         portfolioIsotope.arrange({
  //           filter: this.getAttribute('data-filter')
  //         });
  //         if (typeof aos_init === 'function') {
  //           aos_init();
  //         }
  //       }, false);
  //     });

  //   });

  // }


  
  // Переделал под ВП (продаж)
  let portfolionIsotope = document.querySelector('.portfolio_isotope');

  if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio_container'), {
        itemSelector: '.portfolio_item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio_isotope .portfolio_filters li');
      menuFilters.forEach(function(el) {
        el.addEventListener('click', function() {
          document.querySelector('.portfolio_isotope .portfolio_filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        }, false);
      });
    });
  }
// Переделал под ВП (продажа) Конец

 


// Переделал под ВП (АРЕНДА)
let portfolionIsotopeRent = document.querySelector('.portfolio_isotope-rent');

if (portfolionIsotopeRent) {

  let portfolioFilter = portfolionIsotopeRent.getAttribute('data-portfolio-filter') ? portfolionIsotopeRent.getAttribute('data-portfolio-filter') : '*';
  let portfolioLayout = portfolionIsotopeRent.getAttribute('data-portfolio-layout') ? portfolionIsotopeRent.getAttribute('data-portfolio-layout') : 'masonry';
  let portfolioSort = portfolionIsotopeRent.getAttribute('data-portfolio-sort') ? portfolionIsotopeRent.getAttribute('data-portfolio-sort') : 'original-order';

  window.addEventListener('load', () => {
    let portfolioIsotopeRent = new Isotope(document.querySelector('.portfolio_container-rent'), {
      itemSelector: '.portfolio_item_rent',
      layoutMode: portfolioLayout,
      filter: portfolioFilter,
      sortBy: portfolioSort
    });

    let menuFilters = document.querySelectorAll('.portfolio_isotope-rent .portfolio_filters-rent li');
    menuFilters.forEach(function(el) {
      el.addEventListener('click', function() {
        document.querySelector('.portfolio_isotope-rent .portfolio_filters-rent .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        portfolioIsotopeRent.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aos_init === 'function') {
          aos_init();
        }
      }, false);
    });
  });
}
// Переделал под ВП (АРЕНДА) Конец



// Переделал под ВП (ПРОДАЖ ЗЕМЛІ) Початок
let portfolionIsotopeSkill = document.querySelector('.portfolio_isotope-skill');

if (portfolionIsotopeSkill) {

  let portfolioFilter = portfolionIsotopeSkill.getAttribute('data-portfolio-filter') ? portfolionIsotopeSkill.getAttribute('data-portfolio-filter') : '*';
  let portfolioLayout = portfolionIsotopeSkill.getAttribute('data-portfolio-layout') ? portfolionIsotopeSkill.getAttribute('data-portfolio-layout') : 'masonry';
  let portfolioSort = portfolionIsotopeSkill.getAttribute('data-portfolio-sort') ? portfolionIsotopeSkill.getAttribute('data-portfolio-sort') : 'original-order';

  window.addEventListener('load', () => {
    let portfolioIsotopeSkill = new Isotope(document.querySelector('.portfolio_container-skill'), {
      itemSelector: '.portfolio_item_skill',
      layoutMode: portfolioLayout,
      filter: portfolioFilter,
      sortBy: portfolioSort
    });

    let menuFilters = document.querySelectorAll('.portfolio_isotope-skill .portfolio_filters-skill li');
    menuFilters.forEach(function(el) {
      el.addEventListener('click', function() {
        document.querySelector('.portfolio_isotope-skill .portfolio_filters-skill .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        portfolioIsotopeSkill.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aos_init === 'function') {
          aos_init();
        }
      }, false);
    });
  });
}
// Переделал под ВП (ПРОДАЖ ЗЕМЛІ) Конец





  
  
/**
* Init swiper slider with 1 slide at once in desktop view
*/
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 2 slides at once in desktop view
   */
  new Swiper('.slides-2', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });
});


// Скріпт для форми ЗВОРОТНІЙ ДЗВІНОК
$('#consultation-form').validate({
  rules: {
    name: "required",
    phone: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: "Будь ласка, введіть своє ім'я",
    phone: "Будь ласка, введіть свій номер телефону",
    email: {
      required: "Будь ласка, введіть свій E-mail",
      email: "Неправильно введена адреса пошти"
    }
  }
});     











