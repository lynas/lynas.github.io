var myApp = angular.module('myApp', []);
myApp.controller('DataController', ['$scope', '$http', function ($scope, $http) {
    $scope.movies = [
        {name:'Fantastic Beasts',       year:2010,      month:'November',    myRating:10/10,       status: 'watched'},
        {name:'Hitman',                 year:2010,      month:'November',    myRating:10/10,       status: 'unwatched'},
        {name:'Avatar',                 year:2010,      month:'November',    myRating:10/10,       status: 'unwatched'},
        {name:'Zoomanzi',               year:2010,      month:'November',    myRating:10/10,       status: 'watched'}
    ];
} ]);
