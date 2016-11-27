/**
 * Created by tedy.saputro on 27/11/2016.
 */
'use strict';

angular.module('core').controller('BookController',
    function($scope){
        $scope.books=['Jump Start HTML5', 'Jump Start CSS', 'Jump Start Responsive Web Design'];
        $scope.name='Scope for Site Book Controller'
        $scope.wishListCount=0;
        $scope.addToWishList= function(book){
          $scope.wishListCount++;
        };
        $scope.$watch('wishListCount', function(newValue, oldValue){
            console.log('called '+newValue+'times');
            if(newValue==2){
                alert('Great you have 2 items in yourwishlist');

            }
        });

        $scope.$watchCollection('myCollection',
            function(newCollection,oldCollection){
               console.log(newCollection);
            });
});