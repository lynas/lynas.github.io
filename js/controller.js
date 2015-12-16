var myApp = angular.module('myApp', []);
myApp.controller('DataController', ['$scope', '$http', function ($scope, $http) {
    $scope.movies = [
        {name:'Fantastic Beasts',       year:2016,      month:'November',    date: 10,      myRating:10/10,       status: 'unwatched'},
        {name:'How To Be Single',       year:2016,      month:'February',    date: 10,      myRating:10/10,       status: 'unwatched'},
        {name:'Central Intelligence',   year:2016,      month:'June',        date: 10,      myRating:10/10,       status: 'unwatched'},
        {name:'Suicide Squad',          year:2016,      month:'August',        date: 10,      myRating:10/10,       status: 'unwatched'},
        {name:'Batman v Superman: Dawn of Justice',               year:2016, month:'March', date: 10,    myRating:10/10,       status: 'unwatched'}
    ];
} ]);
