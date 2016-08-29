(function () {   
    'use strict';
    angular.module('myapp').controller('LoginController', LoginController)
    function LoginController(LoginService, $state, $window, webNotification, $http) {
        var login = this;     
        this.loginUser = function ()
        {
            if (login.userName != null && login.pwd != null) {
                var isvalid = LoginService.validate(login.userName, login.pwd);
                if (isvalid == true) {
                    // $state.transitionTo('User');
                   
                    var title = "User kalpa is Login at time:"
                    var body = "it's Just a Login"
                    var icon="https://localhost:51520/app/Images/Usr.png"                   
                    LoginService.NotificationMsg(webNotification,title,body,icon);                
                }
                else {
                    var title = "Other user is Loged in:"
                    var body = "smt else"
                    var icon = "http://localhost:51520/app/Images/key.png"
                    LoginService.NotificationMsg(webNotification, title, body, icon);
                    alert("Not Valid User");
                }
            }
            else {
                alert("Enter username and Password");
            }
          
        }
        this.gcmSend = function(sub) {
            // send token to server and save it
            debugger
          //  $http.post('https://localhost:44300', { "token": sub.subscriptionId });
          //  LoginService.gcmSend(sub);    
			consolelog(sub)		  
            			
            }
        
    }
    LoginController.$inject = ['LoginService', '$state', '$window', 'webNotification', '$http'];
})();

