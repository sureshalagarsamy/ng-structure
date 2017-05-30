angular.module('portalApp', ['ngRoute','globalServices','homeController','catalogController','locationController']).config(function ($routeProvider,$locationProvider)
{
	$routeProvider
		.when("/home",		{templateUrl: "views/home.html",		controller: "homeCtrl"  	})
		.when("/catalog",	{templateUrl: "views/catalog.html",		controller: "catalogCtrl"  	})
		.when("/location",	{templateUrl: "views/location.html",	controller: "locationCtrl"  })
		.otherwise({redirectTo: '/home'});
});