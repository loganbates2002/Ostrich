const menu = document.querySelector('#dropdown-menu')
const menuContent = document.querySelector('#dropdown-content')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active')
  menu.classList.toggle('active')
  menuContent.classList.toggle('is-active')
  menuContent.classList.toggle('active')
})

window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.parallax')
  let scroll = window.pageYOffset
  parallax.style.transform = 'translateY(' + scroll * 0.2 + 'px)'
  //const parallax2 = document.querySelector('.parallax2')
  //parallax2.style.transform = 'translateY(' + scroll * 0.05 + 'px)'
  const fossil1 = document.querySelector('.fossil__image1')
  fossil1.style.transform = 'translateY(' + scroll * -0.3 + 'px)'
  const fossil2 = document.querySelector('.fossil__image2')
  fossil2.style.transform = 'translateY(' + scroll * -0.4 + 'px)'
  const fossil3 = document.querySelector('.fossil__image3')
  fossil3.style.transform = 'translateY(' + scroll * -0.5 + 'px)'
  const fossil4 = document.querySelector('.fossil__image4')
  fossil4.style.transform = 'translateY(' + scroll * -0.6 + 'px)'
  const fossilText = document.querySelector('.fossil_description')
  fossilText.style.transform = 'translateY(' + scroll * -0.7 + 'px)'
  
})

