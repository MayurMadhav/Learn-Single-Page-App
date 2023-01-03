var app = angular.module("myApp", ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider
        .when("/", {
            templateUrl: "RealSweet.html",
            controller: "homeCtrl"
        })
        .when("/about", {
            templateUrl: "about.html",
           // templateUrl: "/my-app/src/app/display-json/display-json.component.html",
            controller: "aboutCtrl"
        })
        .when("/services", {
            templateUrl: "services.html",
            controller: "servicesCtrl"
        })
        .when("/login", {
            templateUrl: "login.html",
            controller: "loginCtrl"
        })

})

app.controller("mainCtrl", function ($rootScope) {
    $rootScope.message = "The Sweet Shop"
    //passing message using first controller
})

app.controller('aboutCtrl', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'https://github.com/MayurMadhav/Single-Page-App/blob/main/MySweets.json'
    }).then(function (response) {
        $scope.messageController = "JSON File Retrieved."
        //JSON file from github repository using second controller
        console.log("JSON File Retrieved.")
    }, function (error) {
        $scope.messageController = "ERROR."
        console.log("ERROR")
    });
})


// app.controller("aboutCtrl",function($scope, $http) {
//     var url = "https://github.com/MayurMadhav/Single-Page-App/blob/main/MySweets.json";
//     method:'GET'
//     $http.get(url).success(function (response) {
//         $scope.categories = response;
//         console.log("JSON File Retrieved.")
//     });
// })


// app.controller("aboutCtrl", function ($scope, $http) {
//     var request = {
//         method: 'get',
//         url: 'MySweets.json',
//         dataType: 'json',
//         contentType: "application/json"
//     };
//     $http.emp = new Array;
//     $http(request).success(function (jsonData) {
//         $scope.emp = jsonData;
//         $scope.list = $scope.emp;
//         console.log("empJSON retrieved.")
//     })
//         .error(function () {
//             console.log("Error in retrival empJSON .")
//         })

// })
    // $http.get("./MySweets.json")
    // .success(function(response){
    //     $rootScope.employees = response
    //     console.log("empJSON retrieved.")
    // })

