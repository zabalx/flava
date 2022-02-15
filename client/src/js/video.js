const video = Array.from(document.getElementsByClassName("js-video"))[0]
const svg = Array.from(document.getElementsByClassName("js-svg"))
const pl = Array.from(document.getElementsByClassName("js-pl"))[0]
const jimgBg = Array.from(document.getElementsByClassName("js-imgBg"))[0]
const play = Array.from(document.getElementsByClassName("js-play"))


play.forEach(
  function(element) {
  element.addEventListener('click', function(e) {
      /* e.target.classList.toggle('checked') */
   
      
      jimgBg.classList.toggle('is-none')
      video.classList.toggle('is-active-box')
      pl.classList.toggle('fill-none')
    
   
svg.forEach( function(currentValue) {
       currentValue.classList.toggle('fill-add')
}
  ); 

      
})
})

