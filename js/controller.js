var myApp = angular.module('myApp', []);
myApp.controller('DataController', ['$scope', '$http', function ($scope, $http) {
    $scope.movies = [
        {name:'Avatar',year:2010,myRating:10/10},
        {name:'Hitman',year:2010,myRating:10/10},
        {name:'Avatar',year:2010,myRating:10/10},
        {name:'Zoomanzi',year:2010,myRating:10/10}
    ];
} ]);
