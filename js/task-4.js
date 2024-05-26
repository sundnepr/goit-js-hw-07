const loginForm = document.querySelector(".login-form");
console.log(loginForm);

const formElem = document.querySelector('.js-user-form');
const messagesElem = document.querySelector('.js-messages');

formElem.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    username: formElem.elements.username.value,
    message: formElem.elements.message.value,
  };

  const markup = messageTemplate(data);

  messagesElem.insertAdjacentHTML('beforeend', markup);

  formElem.reset();
});

function messageTemplate(obj) {
  return `<li>
  <p>Username: ${obj.username}</p>
  <p>${obj.message}</p>
</li>`;
}
