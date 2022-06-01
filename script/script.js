const getElement = (selector) => {
  const el = document.querySelector(selector)
  if (el) return el 
  throw new Error('please check your classes : $(selector) does not exist')
}

const navToggle = getElement('.nav-toggle')
const links = getElement('.nav-links')

navToggle.addEventListener('click', function() {
  links.classList.toggle('show-links')
})