const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('mobile-menu');
const hamburgerIcon = document.querySelector('#hamburger img')

hamburger.addEventListener('click', function(){
  hamburgerIcon.classList.toggle('opacity-80');
  menu.classList.toggle('hidden');
})