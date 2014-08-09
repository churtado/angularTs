/// <reference path='_all.ts' />
var app;
(function (app) {
    'use strict';

    var myapp = angular.module('app', ['ngRoute']);

    myapp.controller("mainController", [
        "$scope", "$location", "$log", function ($scope, $location, $log) {
            return new app.MainController($scope, $location, $log);
        }]);

    myapp.controller("userController", [
        "$scope", "github", "$routeParams", "$log", function ($scope, github, $routeParams, $log) {
            return new app.UserController($scope, github, $routeParams, $log);
        }]);

    myapp.controller("repoController", [
        "$scope", "github", "$routeParams", "$log", function ($scope, github, $routeParams, $log) {
            return new app.RepoController($scope, github, $routeParams, $log);
        }]);

    myapp.factory("github", [
        "$http", "$log", function ($http, $log) {
            return new app.GithubService($http, $log);
        }]);

    /*app.directive("directive", [function(){
    return new app.ScaffoldDirective();
    }]);*/
    myapp.config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.when('/main', {
                templateUrl: 'partials/main.html',
                controller: "mainController"
            }).when("/user/:username", {
                templateUrl: "partials/user.html",
                controller: "userController"
            }).when("/repo/:username/:reponame", {
                templateUrl: "partials/repo.html",
                controller: "repoController"
            }).otherwise({ redirectTo: '/main' });
        }]);
})(app || (app = {}));
//# sourceMappingURL=app.js.map
