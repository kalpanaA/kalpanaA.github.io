(function () {    
    'use strict';
    angular.module('myapp').service('LoginService', function () {      
        this.validate = function (username, pwd) {
            
            if (username == 'kalpa' && pwd == '123') {               
                return true;
            }
            else {
                return false;
            }            
        }
       
        this.NotificationMsg = function (webNotification,title,body,icon) {
            debugger
            webNotification.showNotification(title, {
                body: body,
                icon: icon,
                onClick: function onNotificationClicked() {
                    alert('Notification clicked.');
                },
                autoClose: 12000 //auto close the notification after 4 seconds (you can manually close it via hide function)
            }, function onShow(error, hide) {
                if (error) {
                    $window.alert('Unable to show notification: ' + error.message);
                } else {
                   
                    console.log('Notification Shown.');

                    setTimeout(function hideNotification() {
                        console.log('Hiding notification....');
                        //hide(); manually close the notification (you can skip this if you use the autoClose option)
                    }, 5000);
                }
            });
        }

    })
    
})();