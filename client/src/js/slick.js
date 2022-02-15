
$('.js-slider').slick({
    //dots: true,
    infinite: true,
    arrows:true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    loop: true,
    appendArrows:'.js-arrows',
    prevArrow:'<a><img class="slider-wrap__arrows" src="../static/img/icons/chevron_down.svg"></a>',
    nextArrow:'<a><img class="slider-wrap__arrows" src="../static/img/icons/next.svg"></a>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
         
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  $('.js-sponsors').slick({
    arrows:false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    loop: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true
         
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });