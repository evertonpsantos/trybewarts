const checkbox = document.getElementById('agreement');
const button = document.getElementById('submit-btn');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const buttonLogIn = document.getElementById('start-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function warnMessage() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogIn.addEventListener('click', () => {
  warnMessage();
});

function enableButton() {
  if (checkbox.checked === true) {
    button.disabled = false;
  }
}

checkbox.addEventListener('click', () => {
  enableButton();
});

function countCharacters() {
  const textAreaValue = textArea.value.length;
  counter.innerText = 500 - textAreaValue;
}

textArea.addEventListener('input', () => {
  countCharacters();
});

// requisito 20 ^
