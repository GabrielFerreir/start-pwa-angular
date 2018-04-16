 Evento que pega o click na notificação \
 Deve ser inserido no arquivo ngsw-worker.js\
 Abaixo dos evento de push\
 
 this.scope.addEventListener('notificationclick', (event) => {\
    console.log('[Service Worker] Notification click Received. event', event);\
    event.notification.close();\
    if (clients.openWindow && event.notification.data.url) {\
      event.waitUntil(clients.openWindow(event.notification.data.url));\
    }\
});
