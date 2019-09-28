let menu_open_btn = document.querySelector(".main-nav__btn");
let main_nav__list = document.querySelector(".main-nav__list");
let login_register = document.querySelector(".login-register");

main_nav__list.classList.remove("nojs");
login_register.classList.remove("nojs");

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
		main_nav__list.classList.add("close-menu");
		login_register.classList.add("close-reg");
		setTimeout(function(){
		main_nav__list.classList.remove("close-menu");
		login_register.classList.remove("close-reg");
			}, 300);
	}
})