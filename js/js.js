const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

function myFunction() {
  var element = document.querySelector(".anonymous-write-1")
  var light = document.querySelector(".anonymous-button-1")
  element.classList.toggle('dark');
  light.classlist.toggle("light");

}

function myFunction2() {
  var element = document.querySelector(".anonymous-writ")
  element.classList.toggle('dark');

}
