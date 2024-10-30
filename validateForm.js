(() => {
  'use strict'
  
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');
  const toastElement = document.getElementById('liveToast');
  const toast = new bootstrap.Toast(toastElement);

  // Loop over forms and apply validation
  Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
          // Prevent default form submission
          event.preventDefault();
          event.stopPropagation();

          // If form is valid, show toast and submit form after 2 seconds
          if (form.checkValidity()) {
              toast.show();

              // Wait for 2 seconds and submit form
              setTimeout(() => {
                  form.submit();
              }, 3000);
          }

          form.classList.add('was-validated');
      }, false);
  });
})();

let slider = document.getElementById("range-details");
let value = document.querySelector(".value");
value.innerHTML = slider.value + "/10"; // Display the default slider value

function calcValue() {
  valuePercentage = (slider.value / slider.max)*100;
    slider.style.background = `linear-gradient(to right, #66091B ${valuePercentage}%, #212529 ${valuePercentage}%)`;
}

// Update the current slider value (each time you drag the slider handle)
slider.addEventListener('input', function(){
  calcValue();
  value.textContent = this.value + "/10"; 
})

calcValue();