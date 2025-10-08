const navbar = document.querySelector('.navbar')
const linksContainer = document.querySelector('.link-contain')
const links = document.querySelectorAll('.links')
const hamburger = document.querySelector('.hamburger-icon')
const footer = document.querySelector('.footer')

function removeNavLinks() {
  setTimeout(() => {
    linksContainer.classList.replace('max-sm:opacity-100', 'max-sm:opacity-0');
    linksContainer.classList.replace('max-xs:opacity-100', 'max-xs:opacity-0')
    linksContainer.classList.add('max-xs:hidden')
    linksContainer.classList.add('max-sm:hidden')
    linksContainer.classList.remove('max-xs:flex')
    linksContainer.classList.remove('max-sm:flex')
  }, 200);
  
  linksContainer.classList.replace('max-sm:translate-y-2', 'max-sm:translate-y-[-40px]')
  linksContainer.classList.replace('max-xs:translate-y-2', 'max-xs:translate-y-[-40px]')
  
  hamburger.classList.remove("max-sm:bg-transparent", "max-sm:before:top-0", "max-sm:before:[rotate:45deg]", "max-sm:after:top-0", "max-sm:after:[rotate:-45deg]");
  hamburger.classList.remove("max-xs:bg-transparent", "max-xs:before:top-0", "max-xs:before:[rotate:45deg]", "max-xs:after:top-0", "max-xs:after:[rotate:-45deg]");
}

links.forEach(li => {
  li.addEventListener('click', (e) => {
    let id = e.target.dataset.name
    let section = document.getElementById(id)
    section.scrollIntoView({ behaviour: 'smooth' })
    if (hamburger.classList.contains('max-sm:bg-transparent') || hamburger.classList.contains('max-xs:bg-transparent')) {
      
      removeNavLinks()
      
      hamburger.classList.remove("max-sm:bg-transparent", "max-sm:before:[rotate:45deg]", "max-sm:after:top-0", "max-sm:after:[rotate:-45deg]", "max-sm:before:top-0");
      hamburger.classList.remove("max-xs:bg-transparent", "max-xs:before:[rotate:45deg]", "max-xs:after:top-0", "max-xs:after:[rotate:-45deg]", "max-xs:before:top-0");
    }
  })
})
hamburger.addEventListener('click', () => {
  if (linksContainer.classList.contains('max-xs:hidden') || linksContainer.classList.contains('max-sm:hidden')) {
    setTimeout(() => {
      linksContainer.classList.replace('max-sm:translate-y-[-40px]', 'max-sm:translate-y-2');
      linksContainer.classList.replace('max-xs:translate-y-[-40px]', 'max-xs:translate-y-2')
      linksContainer.classList.replace('max-sm:opacity-0', 'max-sm:opacity-100');
      linksContainer.classList.replace('max-xs:opacity-0', 'max-xs:opacity-100')
    }, 100);
    
    linksContainer.classList.add('max-xs:flex')
    linksContainer.classList.add('max-sm:flex')
    linksContainer.classList.remove('max-xs:hidden')
    linksContainer.classList.remove('max-sm:hidden')
    hamburger.classList.add("max-sm:bg-transparent", "max-sm:before:top-0", "max-sm:before:[rotate:45deg]", "max-sm:after:top-0", "max-sm:after:[rotate:-45deg]");
    hamburger.classList.add("max-xs:bg-transparent", "max-xs:before:top-0", "max-xs:before:[rotate:45deg]", "max-xs:after:top-0", "max-xs:after:[rotate:-45deg]");
  } else {
    removeNavLinks()
  }
})