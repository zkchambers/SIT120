import Vue from 'vue';
import App from './App.vue';
import Navbar from './Navbar.vue';

Vue.config.productionTip = false

//Global registration 
Vue.component('NavBar', Navbar)

//Custom directive 
Vue.directive('color', {
	bind(el, binding, vnode){
		el.style.color = "#FFF";
	}
});


new Vue({
  render: h => h(App)
}).$mount('#app');


//slideshow js
let slideIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 5000);
}