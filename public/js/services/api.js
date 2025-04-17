// js/services/api.js

const API_BASE_URL = 'https://olin-api.onrender.com/api';

async function get(path) {
  const token = localStorage.getItem('token'); // Recupera o token armazenado
  const response = await fetch(`${API_BASE_URL}/${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    }
  });
  if (!response.ok) {
    throw new Error(`Erro ao buscar os dados: ${response.statusText}`);
  }
  return await response.json();
}

async function post(path, data) {
  const token = localStorage.getItem('token'); // Recupera o token
  const response = await fetch(`${API_BASE_URL}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error(`Erro ao enviar os dados: ${response.statusText}`);
  }
  return await response.json();
}

export { get, post };
