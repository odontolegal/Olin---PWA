// service-worker.js

const CACHE_NAME = 'meu-projeto-cache-v1';
const URLS_TO_CACHE = [
  '/', // Ponto de entrada (caso sua aplicação seja single page)
  '/index.html', // Página principal
  '/css/global.css', // Estilos globais
  '/css/bootstrap/bootstrap.min.css', // Bootstrap (se estiver servindo localmente)
  '/js/app.js', // Script global
  '/assets/icons/icon-192.png' // Ícone para PWA
  // Adicione aqui outros arquivos essenciais para o funcionamento offline
];

// Evento de instalação: faz o precache dos assets definidos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Service Worker: Abrindo cache e armazenando arquivos');
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Evento de ativação: limpa caches antigos se houver
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Limpando cache antigo', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Evento de fetch: intercepta as requisições e responde com os recursos do cache, se disponíveis
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Se o recurso estiver em cache, retorna-o. Caso contrário, faz o fetch.
      return response || fetch(event.request);
    })
  );
});
