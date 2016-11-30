/**
 * Created by tedy.saputro on 27/11/2016.
 */
'use strict';
angular.module('Events').controller('StatsController',
    function($scope){
        $scope.name='World';
        $scope.status='connected';
        $scope.statusColor='green';
        $scope.$on('EVENT_NO_DATA', function(event, data){
            console.log('received broadcast event');
            $scope.status = data;
            $scope.statusColor='red';
            $scope.$emit('EVENT_RECEIVED');

        });
    });