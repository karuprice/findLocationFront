'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


    .controller('View1Ctrl', ['$scope','$http',function($scope, $http) {
        $scope.msg = "I'm from controller View1Ctrl's $scope";

        $http({
            method: 'GET',
            url: 'http://127.0.0.1:8001/api'
        }).then(function success(res) {console.log(res);
            $scope.apiData = res.data;
        }, function error(res) {
            $scope.apiData = res.statusText;
        });
    }]);


