const bur = Array.from(document.getElementsByClassName("js--burger"))
const burBox = Array.from(document.getElementsByClassName("js--burger_item"))[0]
const strip = Array.from(document.getElementsByClassName("js--burger_strip"))[0]

const menuBox = Array.from(document.getElementsByClassName("js--menu"))[0]
const body = Array.from(document.getElementsByClassName("body"))[0]
const header = Array.from(document.getElementsByClassName("js-header"))[0]
const imagelogo = Array.from(document.getElementsByClassName("imagelogo"))[0]
const link = Array.from(document.getElementsByClassName("bg-top__link"))

bur.forEach(
    function(element) {
    element.addEventListener('click', function(e) {
        /* e.target.classList.toggle('checked') */
      	menuBox.classList.toggle('is-active_burger')
          body.classList.toggle('overflow')
            burBox.classList.toggle('is-active')
            strip.classList.toggle('is-active_strip')
            
  })
})

$(window).scroll(function() {
  var top = $(this).scrollTop();
  if ( top >= 100 ) {
    header.classList.add("header-active")
  } else if ( top <= 200 ) {
    header.classList.remove("header-active")
  }
});



let target_date = new Date(2022, 2, 1, 0, 0, 0, 0); ; // установить дату обратного отсчета
let days, hours, minutes, seconds; // переменные для единиц времени
 

let clock__days = Array.from(document.getElementsByClassName("clock__days"))[0]
let clock__hours = Array.from(document.getElementsByClassName("clock__hours"))[0]
let clock__minutes = Array.from(document.getElementsByClassName("clock__minutes"))[0]
let clock__seconds = Array.from(document.getElementsByClassName("clock__seconds"))[0]

getCountdown();
setInterval(function () { getCountdown(); }, 1000);
 
function getCountdown(){
 
  let current_date = new Date().getTime();
  let seconds_left = (target_date - current_date) / 1000;
 
    days = pad( parseInt(seconds_left / 86400) );
    seconds_left = seconds_left % 86400;
          
    hours = pad( parseInt(seconds_left / 3600) );
    seconds_left = seconds_left % 3600;
           
    minutes = pad( parseInt(seconds_left / 60) );
    seconds = pad( parseInt( seconds_left % 60 ) );
 

    clock__days.innerHTML =  days;
    clock__hours.innerHTML =  hours;
    clock__minutes.innerHTML =  minutes;
    clock__seconds.innerHTML =  seconds;
}
 
function pad(n) {
    return (n < 10 ? '0' : '') + n;
}

const thumb = Array.from(document.getElementsByClassName("thumb-wrap"))[0]
const svg = Array.from(document.getElementsByClassName("svg"))
const img = Array.from(document.getElementsByClassName("bg-top__img"))[0]


link.forEach(
  function(element) {
  element.addEventListener('click', function(e) {
      /* e.target.classList.toggle('checked') */
   
      
      imagelogo.classList.toggle('is-none')
      thumb.classList.toggle('is-active-box')
      img.classList.toggle('test')

   
svg.forEach( function(currentValue) {
       currentValue.classList.toggle('test2')
}
  ); 

      
})
})


$('.slider-wrap').slick({
  //dots: true,
  infinite: true,
  arrows:true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  loop: true,
  appendArrows:'.flafa__arrows',
  prevArrow:'<a><img class="slider-wrap__img" src="../static/img/icons/chevron_down.svg"></a>',
  nextArrow:'<a><img class="slider-wrap__img" src="../static/img/icons/next.svg"></a>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
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
        slidesToShow: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.slider-sponsors').slick({
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