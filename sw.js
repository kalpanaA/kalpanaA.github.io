////sw.js
self.addEventListener('push', function (event) {
    debugger
    console.log('push received');

    //set some no cache headers for retrieving the notification details
    var httpheaders = new headers();
    httpheaders.append('pragma', 'no-cache');
    httpheaders.append('cache-control', 'no-cache');

    var fetchinit = {
        method: 'get',
        headers: httpheaders,
    };s

    //we wait for data fetch and notification promises
    event.waituntil(
      fetch("https://localhost:44300/push/manifest.json", fetchinit).then(function (res) {
          return res.json().then(function (notificationdata) {
              // show notification
              console.log(notificationdata);
              console.log('setting up notification');
              self.addeventlistener('notificationclick', function (e) {
                  //close the notificaiton
                  e.notification.close();

                  //focus or open webpage
                  e.waituntil(
                      clients.matchall({
                          type: "window"
                      })
                      .then(function (clientlist) {
                          for (var i = 0; i < clientlist.length; i++) {
                              var client = clientlist[i];
                              if (client.url == notificationdata.data.url && 'focus' in client)
                                  return client.focus();
                          }
                          if (clients.openwindow) {
                              return clients.openwindow(notificationdata.data.url);
                          }
                      })
                    );
              });

              if (notification.permission == 'granted') {
                  return self.registration.shownotification(notificationdata.data.title, {
                      body: notificationdata.data.body,
                      icon: 'mf_logo.png'
                  });

              }
              else {
                  notification.requestpermission(function (permission) {
                      if (permission == 'granted') {
                          return self.registration.shownotification(notificationdata.data.title, {
                              body: notificationdata.data.body,
                              icon: 'mf_logo.png'
                          });
                      }
                  });
              }

          })
      })

    );
});




//this.onpush = function (event) {
//    console.log(event.data);
//    // From here we can write the data to IndexedDB, send it to any open
//    // windows, display a notification, etc.
//}