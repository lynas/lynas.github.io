var myApp = angular.module('myApp', []);
myApp.controller('DataController', ['$scope', '$http', function ($scope, $http) {
    $scope.movies = [
        {name:'Fantastic Beasts',       year:2016,      month:'November',    myRating:10/10,       status: 'unwatched'},
        {name:'How To Be Single',       year:2016,      month:'February',    myRating:10/10,       status: 'unwatched'},
        {name:'Central Intelligence',   year:2016,      month:'June',        myRating:10/10,       status: 'unwatched'},
        {name:'Batman v Superman: Dawn of Justice',               year:2016,      month:'March',    myRating:10/10,       status: 'unwatched'}
    ];
} ]);
