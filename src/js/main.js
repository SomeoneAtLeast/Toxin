let menu_open_btn = document.querySelector(".main-nav__btn");
let main_nav__list = document.querySelector(".main-nav__list");
let subscribe__form =  document.querySelector(".subscribe__form");
let subscribe__email_input =  document.querySelector(".subscribe__form-input");

if (document.querySelector(".js-off") !== null && document.querySelector(".js-off").classList.contains("js-off")) {
	console.log("Страница с шаблонами элементов, JS выключен");
} else {

	main_nav__list.classList.remove("nojs");

	if (typeof document.querySelector(".login-register") !== "undefined" &&
 	document.querySelector(".login-register") !== null) {

		let login_register = document.querySelector(".login-register");

		login_register.classList.remove("login-register--nojs");

		menu_open_btn.addEventListener("click", function (evt) {
			if (!menu_open_btn.classList.contains("main-nav__btn--open-menu")) {
				evt.preventDefault();
				menu_open_btn.classList.add("main-nav__btn--open-menu");
				main_nav__list.classList.add("open-menu");
				login_register.classList.add("open-reg");
			} else if (menu_open_btn.classList.contains("main-nav__btn--open-menu")
		 		) {
				menu_open_btn.classList.remove("main-nav__btn--open-menu");
				main_nav__list.classList.remove("open-menu")
				login_register.classList.remove("open-reg");
				login_register.classList.add("close-reg");

				main_nav__list.classList.add("close-menu");

				setTimeout(function(){
				main_nav__list.classList.remove("close-menu");
				login_register.classList.remove("close-reg");
					}, 300);
			}
		})
	} else if (typeof document.querySelector(".successful-login") !== "undefined" &&
 	document.querySelector(".successful-login") !== null) {

		let successful_login = document.querySelector(".successful-login");

		successful_login.classList.remove("successful-login--nojs");

		menu_open_btn.addEventListener("click", function (evt) {
		if (!menu_open_btn.classList.contains("main-nav__btn--open-menu")) {
			evt.preventDefault();
			menu_open_btn.classList.add("main-nav__btn--open-menu");
			main_nav__list.classList.add("open-menu");
			successful_login.classList.add("open-succes-log");
		} else if (menu_open_btn.classList.contains("main-nav__btn--open-menu")
		 	) {
			menu_open_btn.classList.remove("main-nav__btn--open-menu");
			main_nav__list.classList.remove("open-menu")
			successful_login.classList.remove("open-succes-log");
			successful_login.classList.add("close-succes-log");

			main_nav__list.classList.add("close-menu");

			setTimeout(function(){
			main_nav__list.classList.remove("close-menu");
			successful_login.classList.remove("close-succes-log");
				}, 300);
			}
		})
	}

	subscribe__form.addEventListener("submit", function (evt) {
		if (!subscribe__email_input.value) {
			    evt.preventDefault();
			    subscribe__email_input.classList.add("subscribe__form-input--wrong");
			    subscribe__email_input.addEventListener("click", function (evt) {
				subscribe__email_input.classList.remove("subscribe__form-input--wrong"); 
				}
			)    	
		}
	})

	subscribe__email_input.onblur = function() {
	if (subscribe__email_input.value) {
 		subscribe__email_input.classList.add("subscribe__form-input--active");
 		 } else {
 		 	subscribe__email_input.classList.remove("subscribe__form-input--active");
 		 }
	} 
}