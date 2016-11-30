/**
 * Created by tedy.saputro on 30/11/2016.
 */
'use strict';

angular.module('core').controller('Controller1',
    function($scope){
        $scope.message="Helo World";

    }).controller('Controller2',
    function($scope){
        $scope.now=new Date();
});