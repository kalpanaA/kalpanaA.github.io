'use strict';
self.addEventListener('push', function (event) {
    debugger
    console.log('Received a push message', event);


    var data = {};
    if (event.data) {
        data = event.data;
    }
    data.title = "EmailReceived";
    data.body = "it's been too long ur working ";
    data.icon="D:\application\FirstSample\FirstSample\app/Images/LoginImg.jpg"
    var title = data.title || ' title';
    var body = data.body || 'My Body';
    var icon = data.icon || 'logo.png';
    var tag = data.tag || 'tag';
    event.waitUntil(
      self.registration.showNotification(title, {
          body: body,
          icon: icon,
          tag: tag
      })
    );
});


self.addEventListener('notificationclick', function (event) {
    console.log('On notification click: ', event.notification.tag);
    // Android doesn’t close the notification when you click on it
    // See: http://crbug.com/463146
    event.notification.close();

    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(clients.matchAll({
        type: "window"
    }).then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url == '/' && 'focus' in client)
                return client.focus();
        }
        if (clients.openWindow)
            return clients.openWindow('/');
    }));

});