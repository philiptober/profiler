var profilerApp = angular.module('profilerApp', ['angular-intro', 'ui.router']);

profilerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        .state('home', {
            url: '/home',
            views: 
			{
				'':
				{
					templateUrl: '_home.html',
					controller: 'homeController'
				},
				'navigation':
				{
					templateUrl: '_navigation.html',
					controller: 'navigationController'
				}
			}
        })
        
		.state('getIt', {
            url: '/getIt',
            views: 
			{
				'':
				{
					templateUrl: '_getIt.html'
				},
				'navigation':
				{
					templateUrl: '_navigation.html',
					controller: 'navigationController'
				}
			}
        })
		
        .state('syntax', {
            url: '/syntax',
			views:
			{
				'':
				{
					templateUrl: '_syntax.html'
				},
				'navigation':
				{
					templateUrl: '_navigation.html',
					controller: 'navigationController'
				}
			}
        })
        
        .state('history', {
            url: '/history',
			views:
			{
				'':
				{
					templateUrl: '_history.html'
				},
				'navigation':
				{
					templateUrl: '_navigation.html',
					controller: 'navigationController'
				}
			}
        })
		
		.state('about', {
            url: '/about',
			views:
			{
				'':
				{
					templateUrl: '_about.html'
				},
				'navigation':
				{
					templateUrl: '_navigation.html',
					controller: 'navigationController'
				}
			}
        });
});

profilerApp.controller('navigationController', function ($scope, $state) {
	$scope.currentState = $state.current.name;
});

profilerApp.controller('homeController', function ($scope) {
    
	$scope.ExitEvent = function () {
        // window.location.href = document.URL.replace("#/guide", "#/home");
    };
	
	$scope.IntroOptions = {
        steps:[
			{
				element: document.querySelector('[data-step="1"]'),
				intro: "Hallo. Then following this guide, you'll be shown the different components step by step." +
					"The guide will tell you, which control to click to trigger a change of views. Please follow it's demands," + 
					"before taking the next step.<br><br>" + 
					"The element you see right now is one profile in a fictional list of many."
			},
			{
				element: document.querySelector('[data-step="2"]'),
				intro: "You can look into user data."
			},
			{
				element: document.querySelector('[data-step="3"]'),
				intro: "Even the user roles are displayed.<br><br><em>Hover over them to see a description.</em>"
			},
			{
				element: document.querySelector('[data-step="4&9"]'),
				intro: "There is also a placeholder for a picture. Although it is but an icon, " +
					"Image support is an upcoming feature."
			},
			{
				element: document.querySelector('[data-step="5"]'),
				intro: "This button could be able to delete a profile.<br><br><em>Please click it.</em>"
			},
			{
				element: document.querySelector('[data-step="6"]'),
				intro: "Now you have to <em>confirm or abort</em> your action."
			},
			{
				element: document.querySelector('[data-step="7"]'),
				intro: "To edit profile data, you need to change the view.<br><br><em>Click this button to make it happen.</em>"
			},
			{
				element: document.querySelector('[data-step="8"]'),
				intro: "Now you are seeing the edit-view. You can input user specific data."
			},
			{
				element: document.querySelector('[data-step="4&9"]'),
				intro: "There is also an input for an image. <em>Hover and click the icon to make it happen.</em>"
			},
			{
				element: document.querySelector('[data-step="10&13"]'),
				intro: "If you want to give the profile a new set of roles, <em>click the button containing a plus.</em>"
			},
			{
				element: document.querySelector('[data-step="11"]'),
				intro: "With this new view you can select the necessary roles.<br><br><em>Please select at least one of them.</em>"
			},
			{
				element: document.querySelector('[data-step="12&14"]'),
				intro: "Like in the data-view you can <em>hover over the icon</em> to see a description."
			},
			{
				element: document.querySelector('[data-step="10&13"]'),
				intro: "You confirm your choice by <em>clicking this button.</em>"
			},
			{
				element: document.querySelector('[data-step="12&14"]'),
				intro: "Your choosen roles are display here."
			},
			{
				element: document.querySelector('[data-step="15"]'),
				intro: "To leave the edit-view click either red or the green icon. The former one is meant as an abort " +
					"and the later to confirm your set of edits.<br><br><em>Please press the green icon.</em>"
			},
			{
				element: document.querySelector('[data-step="16"]'),
				intro: "At last you have to <em>confirm your edits.</em><br><br>Thank you for following the guide. " + 
					"You may also experiment on your own."
			}
        ],
        showStepNumbers: false,
        exitOnOverlayClick: true,
        exitOnEsc: true,
        nextLabel: '<strong>NEXT!</strong>',
        prevLabel: '<span style="color:green">Previous</span>',
        skipLabel: 'Exit',
        doneLabel: 'Thanks'
    };
});