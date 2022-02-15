const bur = Array.from(document.getElementsByClassName("js--burger"))
const burBox = Array.from(document.getElementsByClassName("js--burger_item"))[0]
const strip = Array.from(document.getElementsByClassName("js--burger_strip"))[0]
const menuBox = Array.from(document.getElementsByClassName("js--menu"))[0]
const body = Array.from(document.getElementsByClassName("body"))[0]


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