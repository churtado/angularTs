/// <reference path='_all.ts' />

module app {
    'use strict'

    var myapp: ng.IModule = angular.module('app', ['ngRoute'])

    myapp.controller("mainController", ["$scope","$location","$log", function ($scope:IMainScope, $location:ng.ILocationService, $log:ng.ILogService) {
            return new app.MainController($scope, $location, $log);
        }]);

    myapp.controller("userController", ["$scope","github","$routeParams", "$log", function ($scope:IUserScope, github:IGithubService, $routeParams:IUserRouteParamsService, $log:ng.ILogService) {
        return new app.UserController($scope, github, $routeParams, $log);
    }]);

    myapp.controller("repoController", ["$scope","github","$routeParams", "$log", function ($scope:IRepoScope, github:IGithubService, $routeParams:IRepoRouteParamsService, $log:ng.ILogService) {
        return new app.RepoController($scope, github, $routeParams, $log);
    }]);

    myapp.factory("github", ["$http", "$log", function ($http:ng.IHttpService, $log:ng.ILogService) {
            return new app.GithubService($http, $log);
        }]);

    /*app.directive("directive", [function(){
        return new app.ScaffoldDirective();
    }]);*/

    myapp.config(['$routeProvider', function($routeProvider: ng.route.IRouteProvider) {
		$routeProvider
            .when('/main', {
                templateUrl: 'partials/main.html',
                controller: "mainController"
            })
            .when("/user/:username", {
                templateUrl: "partials/user.html",
                controller: "userController"
            })
            .when("/repo/:username/:reponame", {
                templateUrl: "partials/repo.html",
                controller: "repoController"
            })

            .otherwise({redirectTo: '/main'})
  	}])
}