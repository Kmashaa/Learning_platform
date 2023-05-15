import {register} from './auth.js'

const authForm = document.getElementById('authForm');
authForm.addEventListener('submit',(e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('pass').value;
  register(email,password);
});

