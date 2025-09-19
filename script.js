const navbar = document.querySelector('.navbar')
const linksContainer = document.querySelector('.link-contain')
const links = document.querySelectorAll('.links')
const hamburger = document.querySelector('.hamburger-icon')
links.forEach(li => {
  li.addEventListener('click', (e) => {
    let id = e.target.dataset.name
    let section = document.getElementById(id)
    section.scrollIntoView({ behaviour: 'smooth' })
    if (hamburger.style.display !== 'none') {
      linksContainer.classList.add('max-sm:hidden')
      hamburger.classList.remove("max-sm:bg-transparent");
      hamburger.classList.remove("max-sm:before:top-0");
      hamburger.classList.remove("max-sm:before:[rotate:45deg]");
      hamburger.classList.remove("max-sm:after:top-0");
      hamburger.classList.remove("max-sm:after:[rotate:-45deg]");
    }
    if (hamburger.style.display !== 'none') {
      linksContainer.classList.add('max-xs:hidden')
      hamburger.classList.remove("max-xs:bg-transparent");
      hamburger.classList.remove("max-xs:before:top-0");
      hamburger.classList.remove("max-xs:before:[rotate:45deg]");
      hamburger.classList.remove("max-xs:after:top-0");
      hamburger.classList.remove("max-xs:after:[rotate:-45deg]");
    }
  })
})
hamburger.addEventListener('click', () => {
  if (linksContainer.classList.contains('max-xs:hidden') || linksContainer.classList.contains('max-sm:hidden')) {
    linksContainer.classList.add('max-xs:flex')
    linksContainer.classList.add('max-sm:flex')
    linksContainer.classList.remove('max-xs:hidden')
    linksContainer.classList.remove('max-sm:hidden')
  } else {
    linksContainer.classList.add('max-xs:hidden')
    linksContainer.classList.add('max-sm:hidden')
    linksContainer.classList.remove('max-xs:flex')
    linksContainer.classList.remove('max-sm:flex')
  }
  hamburger.classList.toggle("max-sm:bg-transparent");
  hamburger.classList.toggle("max-xs:bg-transparent");
  hamburger.classList.toggle("max-sm:before:top-0");
  hamburger.classList.toggle("max-xs:before:top-0");
  hamburger.classList.toggle("max-sm:before:[rotate:45deg]");
  hamburger.classList.toggle("max-xs:before:[rotate:45deg]");
  
  hamburger.classList.toggle("max-sm:after:top-0");
  hamburger.classList.toggle("max-xs:after:top-0");
  hamburger.classList.toggle("max-sm:after:[rotate:-45deg]");
  hamburger.classList.toggle("max-xs:after:[rotate:-45deg]");
})

