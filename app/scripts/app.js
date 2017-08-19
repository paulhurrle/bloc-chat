(function() {
    function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });

         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             });
     }

     function BlocChatCookies($cookies, $uibModal) {
         var currentUser = $cookies.get('blocChatCurrentUser');
         if (!currentUser || currentUser === '') {
             $uibModal.open({
                 animation: true,
                 templateUrl: '/templates/new-user-modal.html',
                 controller: 'UserModalCtrl as userModal',
                 backdrop: 'static'
             });
         }
     }

     angular
         .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
         .config(config)
         .run(['$cookies', '$uibModal', BlocChatCookies]);
 })();
