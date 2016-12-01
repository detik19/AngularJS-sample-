/**
 * Created by tedy.saputro on 30/11/2016.
 */
'use strict';

angular.module('core').controller('Controller1',
    function($scope, $location){
        $scope.message="Helo World";
        $scope.loadView2=function(){
            $location.path('/view2/'+$scope.firstname+'/'+$scope.lastname);
        }
    }).controller('Controller2',
    function($scope, $routeParams, names){
        $scope.now=new Date();
        $scope.firstname=$routeParams.firstname;
        $scope.lastname=$routeParams.lastname;
        $scope.names=names;
});