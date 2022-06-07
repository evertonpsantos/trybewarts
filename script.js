function warnMessage() {
  const email = document.querySelector('.email');
  const password = document.querySelector('.password');
  if (email.value !== 'tryber@teste.com' ||  password.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }

}
