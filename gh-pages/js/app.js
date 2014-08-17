var profilerApp = angular.module('profilerApp', ['ui.router']);

profilerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        .state('home', {
            url: '/home',
            templateUrl: 'gh-pages/views/_home.html'
        })
        
		
        .state('guide-1', {
            url: '/guide/step_1',
            templateUrl: 'gh-pages/views/_guide-step_1.html'
        });
        
});