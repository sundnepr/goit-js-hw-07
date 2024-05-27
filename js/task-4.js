const loginForm = document.querySelector(".login-form");
console.log(loginForm);

function validateEmail(email) {

const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

return regex.test(email);

}

loginForm.addEventListener(`submit`, event => {

  event.preventDefault();

  const inpEmail = loginForm.elements[`email`];
  const inpPass = loginForm.elements[`password`];

  const email = inpEmail.value.trim();
  const password = inpPass.value.trim();
  
  if (!validateEmail(email)) {

  return alert('All form fields must be filled in'); 

  } 

       const formNew = {
        email: email,
        password: password,
      };

      console.log(formNew);
      loginForm.reset();
    
  
})