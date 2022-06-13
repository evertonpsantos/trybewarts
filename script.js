const checkbox = document.getElementById('agreement');
const button = document.getElementById('submit-btn');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const buttonLogIn = document.getElementById('start-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const evaluationForm = document.getElementById('evaluation-form');
const formDataSpace = document.getElementById('form-data-space');
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const formEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.getElementsByName('family');
const subject = document.getElementsByClassName('subject');
const rating = document.getElementsByName('rate');

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

const familyValue = () => {
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      return family[i].value;
    }
  }
};

const subjectValue = () => {
  const aux = [];
  for (let i = 0; i < subject.length; i += 1) {
    if (subject[i].checked) {
      aux.push(subject[i].value);
    }
  }
  const newAux = aux.join(', ');
  return newAux;
};

const ratingValue = () => {
  for (let i = 0; i < rating.length; i += 1) {
    if (rating[i].checked) {
      return rating[i].value;
    }
  }
};

const formDataCreate = () => {
  const formData = document.createElement('form');
  formData.id = 'form-data';
  const dataInfo = `Nome: ${firstName.value} ${lastName.value};
  Email: ${formEmail.value};
  Casa: ${house.value};
  Família: ${familyValue()};
  Matérias: ${subjectValue()};
  Avaliação: ${ratingValue()};
  Observações: ${textArea.value};
  `;
  formData.innerText = dataInfo;
  formDataSpace.appendChild(formData);
};

button.addEventListener('click', (e) => {
  e.preventDefault();
  evaluationForm.style.display = 'none';
  formDataCreate();
});
