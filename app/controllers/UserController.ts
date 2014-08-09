/// <reference path='../_all.ts' />

module app {
    'use strict'

    export interface IUserScope extends ng.IScope{
        username:string;
        user:any;
        github:app.IGithubService;
        repoSortOrder:string;
        repos:any;
        error:string;
    }

    export interface IUserRouteParamsService extends ng.route.IRouteParamsService{
        username:string;
    }

    export class UserController {

        private log:ng.ILogService;
        private github:IGithubService;
        private scope:IUserScope;
        private routeParams:IUserRouteParamsService;

        constructor($scope:IUserScope, github:app.IGithubService, $routeParams:IUserRouteParamsService, $log:ng.ILogService) {
            this.scope = $scope;
            this.github = github;
            this.routeParams = $routeParams;
            this.log = $log;
            $scope.username = this.routeParams.username;
            $scope.repoSortOrder = "-stargazers_count";
            github.getUser(this.scope.username).then(this.onUserComplete, this.onError);
        }

        onUserComplete = (data) => {
            this.scope.user = data
            this.github.getRepos(this.scope.user).then(this.onRepos, this.onError);
        }

        onRepos = (data) => {
            this.scope.repos = data;
        }

        onError = (reason) => {
            this.scope.error = reason;
        }

    }

}
