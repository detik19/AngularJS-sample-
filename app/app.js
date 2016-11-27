/**
 * Created by tedy.saputro on 27/11/2016.
 */
'use strict';

angular.module('myApp',['core']);

angular.module('myApp').run(function($rootScope){
   $rootScope.title='Famous Books';
    $rootScope.name="Root Scope";
});

