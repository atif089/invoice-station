;(function () {
  'use strict'

  // ======= Sticky
  window.onscroll = function () {
    const udHeader = document.querySelector('.ud-header')
    const sticky = udHeader.offsetTop
    const logo = document.querySelector('.header-logo')

    if (window.pageYOffset > sticky) {
      udHeader.classList.add('sticky')
    } else {
      udHeader.classList.remove('sticky')
    }

    // === logo change
    if (udHeader.classList.contains('sticky')) {
      logo.innerHTML = `<span
      class="self-center whitespace-nowrap font-serif tracking-widest text-gray-700"
      >Invoice<span class="text-cyan-700">Station</span></span
    >`
    } else {
      logo.innerHTML = `<span
      class="self-center text-gray-200 whitespace-nowrap font-serif tracking-widest"
      >Invoice<span style="color:#22d3ee">Station</span></span
    >`
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector('.back-to-top')
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = 'flex'
    } else {
      backToTop.style.display = 'none'
    }
  }

  // ===== responsive navbar
  const navbarToggler = document.querySelector('#navbarToggler')
  const navbarCollapse = document.querySelector('#navbarCollapse')

  navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('navbarTogglerActive')
    navbarCollapse.classList.toggle('hidden')
  })

  //= ==== close navbar-collapse when a  clicked
  document
    .querySelectorAll('#navbarCollapse ul li:not(.submenu-item) a')
    .forEach((e) =>
      e.addEventListener('click', () => {
        navbarToggler.classList.remove('navbarTogglerActive')
        navbarCollapse.classList.add('hidden')
      })
    )

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll('.submenu-item')
  submenuItems.forEach((el) => {
    el.querySelector('a').addEventListener('click', () => {
      el.querySelector('.submenu').classList.toggle('hidden')
    })
  })

  // ===== Faq accordion
  const faqs = document.querySelectorAll('.single-faq')
  faqs.forEach((el) => {
    el.querySelector('.faq-btn').addEventListener('click', () => {
      el.querySelector('.icon').classList.toggle('rotate-180')
      el.querySelector('.faq-content').classList.toggle('hidden')
    })
  })

  // ===== wow js
  new WOW().init()

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop
    const change = to - start
    const increment = 20
    let currentTime = 0

    const animateScroll = () => {
      currentTime += increment

      const val = Math.easeInOutQuad(currentTime, start, change, duration)

      element.scrollTop = val

      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }

    animateScroll()
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  document.querySelector('.back-to-top').onclick = () => {
    scrollTo(document.documentElement)
  }
})()

// ==== for menu scroll
const pageLink = document.querySelectorAll('.ud-menu-scroll')

pageLink.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector(elem.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      offsetTop: 1 - 60,
    })
  })
})

// section menu active
function onScroll() {
  const sections = document.querySelectorAll('.ud-menu-scroll')
  const scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop

  for (let i = 0; i < sections.length; i++) {
    const currLink = sections[i]
    const val = currLink.getAttribute('href')
    const refElement = document.querySelector(val)
    const scrollTopMinus = scrollPos + 73
    if (
      refElement.offsetTop <= scrollTopMinus &&
      refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
    ) {
      document.querySelector('.ud-menu-scroll').classList.remove('active')
      currLink.classList.add('active')
    } else {
      currLink.classList.remove('active')
    }
  }
}

window.document.addEventListener('scroll', onScroll)
