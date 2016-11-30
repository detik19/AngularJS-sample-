/**
 * Created by tedy.saputro on 27/11/2016.
 */
'use strict';
angular.module('Events').controller('MessageController',
    function($scope, $timeout){
        $scope.messages=[{
           sender:'user1',
            text:'Message1'

        }];

        var timer;
        var count=0;

        $scope.loadMessages = function(){
            count++;
            $scope.messages.push({
               sender:'user1',
                text:'Random message'+count
            });

            timer=$timeout($scope.loadMessages,2000);
            if(count==3){
                //simulate a connection failure and need to signal this to StatsController.
                //BROADCAST : parent to child
                $scope.$broadcast('EVENT_NO_DATA','Not Connected');
                $timeout.cancel(timer);
            }
        };
        timer=$timeout($scope.loadMessages,2000);
        $scope.$on('EVENT_RECEIVED', function(){
           console.log('Received emitted event');
        });

    });