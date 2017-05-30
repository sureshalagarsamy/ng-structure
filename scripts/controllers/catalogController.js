angular.module("catalogController", []).controller("catalogCtrl", function($http, $rootScope, $scope, globalService)
{
	console.log("catalog page");

	$rootScope.homeMenu 	= false;
	$rootScope.catalogMenu 	= true;
	$rootScope.locationMenu = false;
});