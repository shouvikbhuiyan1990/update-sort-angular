var app = angular.module('tableApp',[]);

app.controller('tappCtrl',['$scope',function($scope){
	var newObject= {};
	$scope.formData = {};

	$scope.newRec = [];

	$scope.updateRecord = function(){
		

		newObject.age = $scope.formData.age;
		newObject.name = $scope.formData.name;
		newObject.address = $scope.formData.address;
		newObject.isEditable = false;

		$scope.newRec.push(newObject);

		newObject= {};

		$scope.formData = {};
	}

	$scope.edit = function(rec){
		rec.isEditable = true;
		$scope.formData.upaddress = rec.address;
		$scope.formData.upage = rec.age;
		$scope.formData.upname = rec.name;
	}
	$scope.update = function(rec){
		rec.isEditable = false;
		rec.address = $scope.formData.upaddress;
		rec.age =  $scope.formData.upage;
		rec.name = $scope.formData.upname ;
	}

	$scope.cancel = function(rec){
		rec.isEditable = false;
	}


}]);