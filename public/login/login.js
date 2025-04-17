// login/login.js

import { login } from '../js/services/auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', async e => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
      const response = await login({ email, password: senha });
      console.log('Login realizado com sucesso:', response);

      // Armazena o token no localStorage
      localStorage.setItem('token', response.token);

      // Redireciona para a dashboard ou outra página protegida
      window.location.href = '../dashboard/dashboard.html';
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Falha no login! Verifique suas credenciais.');
    }
  });
});
