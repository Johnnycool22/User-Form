// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('code').addEventListener('blur', validatePostCode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validatePostCode() {
  const postcode = document.getElementById('code');
  const re = /^[A-Z]{2}([0-9]{2})(-[0-9]{1})([A-Z]{2})$/i;

  if(!re.test(postcode.value)) {
    postcode.classList.add('is-invalid');
  } else {
    postcode.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validatePhone() {

}