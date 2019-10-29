if(window.location.toString().indexOf('headers_and_footers.html')>0) {

	let subscribe__form =  document.querySelector(".subscribe__form");
	let subscribe__email_input =  document.querySelector(".form-input");
	let email_input =  document.querySelector(".form-elements-group-1__email .form-input");
	let pretty_awesome_input =  document.querySelector(".form-elements-group-1__pretty_awesome_text .form-input");

	subscribe__form.addEventListener("submit", function (evt) {
		if (!subscribe__email_input.value) {
				evt.preventDefault();
				subscribe__email_input.classList.add("form-input--wrong");
				subscribe__email_input.addEventListener("click", function (evt) {
				subscribe__email_input.classList.remove("form-input--wrong"); 
				}
			)    	
		}
	})

	subscribe__email_input.onblur = function() {
	if (subscribe__email_input.value) {
 		subscribe__email_input.classList.add("form-input--active");
 		} else {
 		 	subscribe__email_input.classList.remove("form-input--active");
 		}
	} 
}

let pretty_awesome_input = document.querySelector(".form-elements-group-1__pretty_awesome_text .form-input");

pretty_awesome_input.placeholder = "This is pretty awesome";