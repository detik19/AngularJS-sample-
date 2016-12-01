/**
 * Created by tedy.saputro on 30/11/2016.
 */
'use strict';

angular.module('core').config(function($routeProvider){
    $routeProvider.when('/view1',{
        controller: 'Controller1',
        templateUrl: 'modules/core/views/view1.html'
    }).when('/view2/:firstname/:lastname',{
        controller: 'Controller2',
        templateUrl: 'modules/core/views/view2.html',
        resolve:{
            names:function(){
                return ['Misko', 'Vojta', 'Brad'];
            }
        }
    }).otherwise({
        redirectTo: '/view1'
    });
});