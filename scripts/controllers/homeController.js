angular.module("homeController", []).controller("homeCtrl", function($http, $rootScope, $scope, globalService)
{
	console.log("home page");
	
	$rootScope.homeMenu 	= true;
	$rootScope.catalogMenu 	= false;
	$rootScope.locationMenu = false;
	
	$scope.refund = {};
	$scope.refund.name = "";
	$scope.refund.amount = "";
	
	$scope.getRefundName = function()
	{
		alert(JSON.stringify($scope.refund));	
		
		globalService.ajaxGet(" http://date.jsontest.com", $scope.refund, function(data, status, config)
		{
			console.log(status);
			console.log(data);
		});
	}
});