// js/services/auth.js

import { post } from './api.js';

// Função para realizar o login
async function login(credentials) {
  try {
    // Envia os dados de login para o endpoint 'login'
    const response = await post('login', credentials);
    // Salva o token retornado pela API (supondo que o campo se chame "token")
    localStorage.setItem('token', response.token);
    return response;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
}

// Função para realizar o logout
function logout() {
  localStorage.removeItem('token');
}

// Função para verificar se o usuário está autenticado
function isAuthenticated() {
  return !!localStorage.getItem('token');
}

export { login, logout, isAuthenticated };
