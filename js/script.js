

window.addEventListener('DOMContentLoaded', function () {

  // chat

  (function(w,d,u){
    var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
    var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
  })(window,document,'https://cdn-ru.bitrix24.ru/b8834481/crm/site_button/loader_17_y0l57y.js');

  // smooth scroll

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  // scroll fn

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  };

  // scroll fn to btn

  const scrollBtn = document.getElementById('scroll-btn');
  const footerLogo = document.getElementById('footer-logo');
  scrollBtn.addEventListener('click', scrollToTop);
  footerLogo.addEventListener('click', scrollToTop);

  // burger

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuLinks = menu.querySelectorAll('.nav__link');

  if(burger) {

    burger.addEventListener('click',

    function() {

      burger.classList.toggle('burger--active');
      menu.classList.toggle('header__nav--active');
      document.body.classList.toggle('stop-scroll');

    }
    );
  }

  menuLinks.forEach(function(el){
    el.addEventListener('click', function(){

      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      document.body.classList.remove('stop-scroll');
    })
  });

  // tabs programmes

  const tabsBtn = document.querySelectorAll('.programme__date');
  const tabsItem = document.querySelectorAll('.programme-content');
  // let nextBtn = document.querySelector('.programme__btn--next');
  // let prevBtn = document.querySelector('.programme__btn--prev');

  tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function(btn){ btn.classList.remove('programme__date--active')});
      e.currentTarget.classList.add('programme__date--active');

      tabsItem.forEach(function(element){ element.classList.remove('programme-content--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('programme-content--active');
    });
  });

  // modal tabs

  const modalBtn = document.querySelectorAll('.modal__btn');
  const videoItem = document.querySelectorAll('.video-content');
  const videoEles = document.getElementsByTagName('video')

  for (const video of videoEles) {
      video.volume = 0.5
  }

  modalBtn.forEach(function(element){
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      modalBtn.forEach(function(btn){ btn.classList.remove('modal__btn--active')});
      e.currentTarget.classList.add('modal__btn--active');

      videoItem.forEach(function(element){ element.classList.remove('video-content--active')});

      for (const video of videoEles) {
        video.pause()
      }

      document.querySelector(`[data-target="${path}"]`).classList.add('video-content--active');

      const videoChilds = document.querySelector('.video-content--active').childNodes
      videoChilds[1].play()
    });
  });

  const modal = new GraphModal({
    isOpen: (modal) => {
      console.log('opened');
    },
    isClose: () => {
      console.log('closed');
      for (const video of videoEles) {
        video.pause()
      }
    }
  });

  const invBtn = document.querySelectorAll('.invites-card__play');

  invBtn.forEach(function(element) {
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      modalBtn.forEach(function(btn){ btn.classList.remove('modal__btn--active')});
      document.querySelector(`[data-name="${path}"]`).classList.add('modal__btn--active')

      videoItem.forEach(function(element){ element.classList.remove('video-content--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('video-content--active');

      const videoChilds = document.querySelector('.video-content--active').childNodes
      videoChilds[1].play()
    })
  })

  // const modalCLose = document.querySelector('.graph-modal__close');

  // modalCLose.addEventListener('click', function(){
  //   videoItem.forEach(function(element){ element.classList.remove('video-content--active')});
  // })

  // places tabs

  const placesBtn = document.querySelectorAll('.places-list__btn');
  const placesItem = document.querySelectorAll('.places-tabs__content');

  placesBtn.forEach(function(element){
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      placesBtn.forEach(function(btn){ btn.classList.remove('places-list__btn--active')});
      e.currentTarget.classList.add('places-list__btn--active');

      placesItem.forEach(function(element){ element.classList.remove('places-tabs__content--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('places-tabs__content--active');
    });
  });


  // sliders

  const container = document.querySelector(".swiper-container")
  const swiper1 = new Swiper('.places__swiper', {
    slidesPerView: 3,
    loop: true,
    // grabCursor: true,
    spaceBetween: 20,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination1',
      clickable: 'true',
    },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
      1134: {
        slidesPerView: 3,
        spaceBetween: 24,
      },

      675: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }
  });

  const swiper2 = new Swiper('.speakers__swiper', {
    slidesPerView: 4,
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination2',
      clickable: 'true',
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
      1134: {
        slidesPerView: 4,
        spaceBetween:24,
      },

      675: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
  });

  const swiper3 = new Swiper('.past__swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2200,
    },
    slidesPerView: '2',
    coverflowEffect: {
      rotate: 0,
      stretch: 1,
      depth: 110,
      modifier: 2.5,
      slideShadows: true,
    },
    breakpoints: {
      578: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1.3,
      }
    },
    pagination: {
      el: '.swiper-pagination3',
      clickable: 'true',
    },
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
  })

  const swiper4 = new Swiper('.invites__swiper', {
    slidesPerView: 3,
    // loop: true,
    // grabCursor: true,
    spaceBetween: 30,
    direction: 'horizontal',
    watchSlidesProgress: true,
    breakpoints: {
      721: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
      }
    },
    pagination: {
      el: '.swiper-pagination4',
      clickable: 'true',
    },
    navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
    },
  })

  const swiper5 = new Swiper('.modal__swiper', {
    slidesPerView: 4,
    // loop: true,
    spaceBetween: 10,
    direction: 'horizontal',
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-next5',
      prevEl: '.swiper-button-prev5',
    },
  })

  const swiper6 = new Swiper('.hotels-swiper', {
    slidesPerView: 3,
    loop: true,
    // grabCursor: true,
    spaceBetween: 20,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination6',
      clickable: 'true',
    },
    navigation: {
      nextEl: '.swiper-button-next6',
      prevEl: '.swiper-button-prev6',
    },
    breakpoints: {
      1134: {
        slidesPerView: 3,
        spaceBetween: 24,
      },

      675: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }
  });

  const swiper7 = new Swiper('.restaurants-swiper', {
    slidesPerView: 3,
    loop: true,
    // grabCursor: true,
    spaceBetween: 20,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination7',
      clickable: 'true',
    },
    navigation: {
      nextEl: '.swiper-button-next7',
      prevEl: '.swiper-button-prev7',
    },
    breakpoints: {
      1134: {
        slidesPerView: 3,
        spaceBetween: 24,
      },

      675: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }
  });

  const swiper8 = new Swiper('.other-swiper', {
    slidesPerView: 3,
    loop: true,
    // grabCursor: true,
    spaceBetween: 20,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination8',
      clickable: 'true',
    },
    navigation: {
      nextEl: '.swiper-button-next8',
      prevEl: '.swiper-button-prev8',
    },
    breakpoints: {
      1134: {
        slidesPerView: 3,
        spaceBetween: 24,
      },

      675: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }
  });

  // hero bg

  const heroImg = document.querySelector('.hero__bimg');
  const heroLink = document.querySelector('.hero__link');

  const addZoomBg = () => {
    heroImg.classList.add('hover');
  }

  const remZoomBg = () => {
    heroImg.classList.remove('hover');
  }

  heroLink.addEventListener('mouseenter', addZoomBg);
  heroLink.addEventListener('mouseleave', remZoomBg);
  heroLink.addEventListener('focus', addZoomBg);
  heroLink.addEventListener('focusout', remZoomBg);
});






