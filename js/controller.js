var myApp = angular.module('myApp', []);
myApp.controller('DataController', ['$scope', '$http', function ($scope, $http) {
    $scope.movies = [
        {
            "name": "Fantastic Beasts",
            "date": "10 November 2016",
            "status": "unwatched",
            "myRating": 10,
            "imgSrc": ""
        },
        {
            "name": "How To Be Single",
            "date": "10 February 2016",
            "status": "unwatched",
            "myRating": 10,
            "imgSrc": ""
        },
        {
            "name": "Central Intelligence",
            "date": "17 June 2016",
            "status": "unwatched",
            "myRating": 10,
            "imgSrc": ""
        },
        {
            "name": "The Big Short",
            "date": "17 June 2016",
            "status": "unwatched",
            "myRating": 10,
            "imgSrc": ""
        },
        {
            "name": "Suicide Squad",
            "date": "5 August 2016",
            "status": "unwatched",
            "myRating": 10,
            "imgSrc": ""
        },
        {
            "name": "Police Story: Lockdown",
            "date": "5 June 2015",
            "status": "unwatched",
            "myRating": 10,
            "imgSrc": ""
        },
        {
            "name": "The Revenant",
            "date": "8 January 2016",
            "status": "unwatched",
            "myRating": 10,
            "imgSrc": ""
        },
        {
            "name": "Concussion",
            "date": "25 December 2015",
            "status": "unwatched",
            "myRating": 10,
            "imgSrc": ""
        },
        {
            "name": "Captain America: Civil War",
            "date": "6 May 2016",
            "status": "unwatched",
            "myRating": 10,
            "imgSrc": ""
        },
        {
            "name": "Deadpool",
            "date": "12 February 2016",
            "status": "unwatched",
            "myRating": 10,
            "imgSrc": ""
        },
        {
            "name": "Alice Through the Looking Glass",
            "date": "27 May 2016",
            "status": "unwatched",
            "myRating": 10,
            "imgSrc": ""
        },
        {
            "name": "Now You See Me 2",
            "date": "10 June 2016",
            "status": "unwatched",
            "myRating": 10,
            "imgSrc": ""
        },
        {
            "name": "The Huntsman: Winters War",
            "date": "22 April 2016",
            "status": "unwatched",
            "myRating": 10,
            "imgSrc": ""
        },
        {
            "name": "Kung Fu Panda 3",
            "date": "29 January 2016",
            "status": "unwatched",
            "myRating": 10,
            "imgSrc": ""
        }
    ];
} ]);