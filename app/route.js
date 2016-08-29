
(function () {
    debugger
    'use strict'
    angular.module('myapp').config(['$stateProvider', '$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider) {
        debugger
        //$urlRouterProvider.otherwise('/Login.html');
        $stateProvider
        .state('User', {
            url: "/User",
            templateUrl: "User.html",
            controller: 'UserController',
        });
    }
    ]);

})();
