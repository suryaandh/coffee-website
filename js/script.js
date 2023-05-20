//Toggle class Active
const navbarNav = document.querySelector('.navbar-nav');

// click
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
}

//make hamburger menu disappear when click on the random item
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
})