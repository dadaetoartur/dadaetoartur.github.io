"use strict"

let menuButton = document.getElementById('menuBurger');

let menu = document.getElementById('hiddenMenu');

menuButton.addEventListener('click', function(){
	menu.classList.toggle('active');
})