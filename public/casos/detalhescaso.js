document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const casoId = params.get('id');

  if (!casoId) {
    alert('ID do caso não informado.');
    return;
  }

  try {
    const token = localStorage.getItem('token'); // ajuste se estiver usando outro meio de autenticação

    const response = await fetch(`http://localhost:3000/api/casos/${casoId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Falha ao buscar o caso.');
    }

    const caso = await response.json();

    // Preencher os dados do HTML
    document.getElementById('caso-codigo').textContent = caso._id;
    document.getElementById('caso-nome').textContent = caso.titulo;
    document.getElementById('caso-local').textContent = `Local do Caso: ${caso.Localdocaso}`;
    document.getElementById('caso-requisitante').textContent = `Responsável: ${
      caso.peritoResponsavel?.name ?? '-'
    }`;
    document.getElementById('caso-status').textContent = `Status Atual: ${caso.status}`;
    document.getElementById('caso-resumo').textContent = caso.descricao;

    document.getElementById('data-abertura').textContent = new Date(caso.data).toLocaleDateString();
    document.getElementById('ultima-atualizacao').textContent = new Date().toLocaleDateString(); // ajuste se tiver essa data na API
  } catch (error) {
    console.error('Erro ao carregar detalhes do caso:', error);
    alert('Erro ao carregar os detalhes do caso.');
  }
});
