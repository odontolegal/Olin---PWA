// Verifica se o browser suporta Service Worker e realiza o registro
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(err => {
        console.error('Falha ao registrar o Service Worker:', err);
      });
  });
}

// Inicializações e configurações globais
document.addEventListener('DOMContentLoaded', () => {
  console.log('Aplicação carregada com sucesso.');
  // Aqui você pode incluir outras funções que precisar executar uma única vez na inicialização
});
