const email = document.querySelector('#email');
const password = document.querySelector('#senha');
const btnlogin = document.querySelector('#login-button');
const textarea = document.getElementById('textarea');
const contador = document.getElementById('counter');
const checker = document.getElementById('agreement');
const sendbtn = document.getElementById('submit-btn');

function Login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnlogin.addEventListener('click', Login);

checker.onchange = function button() {
  if (this.checked) {
    sendbtn.disabled = false;
  } else {
    sendbtn.disabled = true;
  }
};

function counter() {
  contador.innerText = 500 - textarea.value.length;
}

textarea.addEventListener('input', counter);
