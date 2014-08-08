/// <reference path='_all.ts' />
var app;
(function (app) {
    'use strict';

    var myapp = angular.module('app', ['ngRoute']);

    myapp.controller("mainController", [
        "$scope", "$location", "$log", function ($scope, $location, $log) {
            return new app.MainController($scope, $location, $log);
        }]);

    myapp.factory("service", [function () {
            return new app.ScaffoldService();
        }]);

    /*app.directive("directive", [function(){
    return new app.ScaffoldDirective();
    }]);*/
    myapp.config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.when('/main', {
                templateUrl: 'partials/main.html',
                controller: "mainController"
            }).otherwise({ redirectTo: '/main' });
        }]);
})(app || (app = {}));
//# sourceMappingURL=app.js.map
