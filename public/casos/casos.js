document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');

  if (!token) {
    console.error('Token não encontrado. Faça login primeiro.');
    return;
  }

  fetch('http://localhost:3000/api/casos', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(async res => {
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Erro ao buscar dados da API');
      }
      return res.json();
    })
    .then(casos => {
      if (!Array.isArray(casos)) {
        console.error('Formato de resposta inesperado:', casos);
        return;
      }

      const tbody = document.querySelector('tbody');
      tbody.innerHTML = ''; // Limpa o conteúdo antes de adicionar

      casos.forEach(caso => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><a href="detalhescasos.html?id=${caso._id}" class="link-caso">${
          caso.titulo
        }</a></td>
            <td>${new Date(caso.data).toLocaleDateString('pt-BR')}</td>
            <td>${caso.status}</td>
            <td>${caso.peritoResponsavel?.name || '—'}</td>
          `;
        tbody.appendChild(tr);
      });
    })
    .catch(error => {
      console.error('Erro ao buscar casos:', error.message);
    });
});
