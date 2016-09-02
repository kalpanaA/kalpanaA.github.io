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
        this.gcmSend = function() {
            // send token to server and save it
          var request = $http({
                method: "post",
                url: "https://android.googleapis.com/gcm/send/?Authorization?key=AIzaSyCpPQM5dBdcoAMVyvJvfrm_fN12p4UEf3w",
                //transformRequest: transformRequestAsFormPost,
                data: {                   
                     "title": "T",
                       "message": "Hello This is",
                       "to":"e1tCb2eanKY:APA91bHUW7jz6e4XZ-ty3O3npDy3LrZJvpqsmogKj3EaO4ndoWrmegC29nhedGl4Mu-4-SfyRPtTGyJql86NWzugsg0MKCBk68WjOff0ivJC581GFWKSHUhPiMkuXbeER81Hd0pUC7Zq"
                   }
                
            });
            // Store the data-dump of the FORM scope.
            request.success(
                
                function (html) {
                    debugger
                    $scope.cfdump = html;
                }
            );             
        
    }
    LoginController.$inject = ['LoginService', '$state', '$window', 'webNotification', '$http'];
})();

