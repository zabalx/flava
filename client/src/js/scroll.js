const scrollup = Array.from(document.getElementsByClassName("js-scrollup"))[0]
const header = Array.from(document.getElementsByClassName("js-header"))[0]
$(window).scroll(function() {
  var top = $(this).scrollTop();
  if ( top >= 100 ) {
    header.classList.add("header-active")
  } else if ( top <= 200 ) {
    header.classList.remove("header-active")
  }

  if ( top >= 200 ) {
    scrollup.classList.add("is-active-box")
  } else if ( top <= 300 ) {
    scrollup.classList.remove("is-active-box")
  }
});