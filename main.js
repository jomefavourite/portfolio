// To get elements from the DOM
function call(name) {
  return document.querySelector(name)
}

function callAll(name) {
  return document.querySelectorAll(name)
}

const ham = call('.hamburger'),
    nav = call('.nav'),
    navList = callAll('.nav li a'),
    overlay = call('.overlay'),
    up = call('.up'),
    check = call('input[type="checkbox"]') 


ham.addEventListener('click', () => {
  ham.classList.toggle('change')
  nav.classList.toggle('toggle_show')
  overlay.classList.toggle('overlay-show')
  blur()
})

navList.forEach( a => {
    a.addEventListener('click', () => {
      nav.classList.toggle('toggle_show')
      ham.classList.toggle('change')
      overlay.classList.toggle('overlay-show')
      if (window.innerWidth < 700) {
        blur()
      }
    })
})

// Toggle Background
check.addEventListener('click', () => {
  if (check.checked) {
    document.body.classList.add('dark')
    localStorage.setItem('theme','dark')
  } else {
    document.body.classList.remove('dark')
    localStorage.removeItem('theme')
  }
})

function blur() {
  call('.header').classList.toggle('blur')
  call('.main').classList.toggle('blur')
}

function checkTheme() {
  const localStorageTheme = localStorage.getItem('theme')

  if (localStorageTheme !== null && localStorageTheme === "dark") {
    // set the theme of body
    document.body.className = localStorageTheme

    // adjust slider position
    check.checked = true
    console.log(check.checked)
  }
}

checkTheme()





