angular.module("locationController", []).controller("locationCtrl", function($http, $rootScope, $scope, globalService)
{
	console.log("location page");
	
	$rootScope.homeMenu 	= false;
	$rootScope.catalogMenu 	= false;
	$rootScope.locationMenu = true;
	
});