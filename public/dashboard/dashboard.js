import { get } from '../js/services/api.js';

document.addEventListener('DOMContentLoaded', () => {
  // Tenta buscar os dados de usuários (ou qualquer endpoint protegido)
  get('usuarios')
    .then(data => {
      console.log('Dados dos usuários:', data);
    })
    .catch(error => {
      console.error('Erro ao buscar os dados:', error);
      alert('Sessão expirada ou erro na requisição. Faça login novamente.');
      window.location.href = '../login/login.html';
    });
});

console.log('[JS] dashboard.js carregado'); // COLOQUEI ESSE cL PORQUE O GRÁFICO NÃO ESTAVA CARREGANDO
// Inicializa o gráfico de donut com os dados dos casos do perito
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('graficoCasos');

  // Verifica se o elemento existe antes de inicializar o gráfico
  if (!ctx) {
    console.warn('[dashboard.js] Elemento do gráfico "graficoCasos" não encontrado.');
    return;
  }

  // ✅ Gráfico de donut com legenda manual e legenda automática desativada
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Em andamento', 'Finalizado', 'Arquivado'],
      datasets: [
        {
          data: [5, 3, 2], // ← Substituir com dados reais da API futuramente
          backgroundColor: ['#f1c40f', '#2ecc71', '#3498db'], // Cores customizadas
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false // 🚫 Remove a legenda automática inferior
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || '';
              const value = context.raw || 0;
              return `${label}: ${value} caso${value !== 1 ? 's' : ''}`;
            }
          }
        }
      }
    }
  });
});
