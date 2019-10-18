let subscribe__form =  document.querySelector(".subscribe__form");
let subscribe__email_input =  document.querySelector(".form-input-email");

subscribe__form.addEventListener("submit", function (evt) {
	if (!subscribe__email_input.value) {
			evt.preventDefault();
			subscribe__email_input.classList.add("form-input-email--wrong");
			subscribe__email_input.addEventListener("click", function (evt) {
			subscribe__email_input.classList.remove("form-input-email--wrong"); 
			}
		)    	
	}
})

subscribe__email_input.onblur = function() {
if (subscribe__email_input.value) {
 	subscribe__email_input.classList.add("form-input-email--active");
 	} else {
 		 subscribe__email_input.classList.remove("form-input-email--active");
 	}
} 
