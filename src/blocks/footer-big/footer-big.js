let subscribe__form =  document.querySelector(".subscribe__form");
let subscribe__email_input =  document.querySelector(".subscribe__form-input");

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
