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
            this.gcmSend = function () {
            debugger
			var i=0;
			var subIDS={e0h2e2rH-IE:APA91bGCsrKAL6lpR50io5OXBtBy6MgB0E7q4E7dGHd3UBbGCOk1CG5sUSP3bU-Bmsa6xtN-Ei03sWSepiUlwarhrxXCRvxXQruemkExuu58cWrQCf5nuIXNuUTdxQmdF-nUpHErtFSS,fKlXXlV6Re8:APA91bGs2dTYtnAd9PDpOkVvMifj8kKLL1AYge4dfNfU50KAVIHAu3ipV_p842MoL-tzrVqo3T8u4s44Cfnbr6Hpg9X5-O5jSVk4UWfps7_hlalLU8aD_rSTyaf6KPRHDF2DXnnGQgkg}
			while(i<2)
			{
			
            // send token to server and save it
        $http({
                method: "post",
                url: "https://android.googleapis.com/gcm/send",
                headers: { 'Content-Type': 'application/json', 'Authorization': 'key = AIzaSyCpPQM5dBdcoAMVyvJvfrm_fN12p4UEf3w' },
                data: {                   
                     "title": "T",
                       "message": "Hello This is",
				       "to":"{subIDS[i]}"
                   }
                
        }).success(
           // Store the data-dump of the FORM scope.
                
                function (data) {
                    debugger
					i++;
                    //$scope.cfdump = html;
                }
            );             
			}		
            }
        
        
    }
    LoginController.$inject = ['LoginService', '$state', '$window', 'webNotification', '$http'];
})();

