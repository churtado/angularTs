/// <reference path='../_all.ts' />

module app {
    'use strict'

    export interface IRepoScope extends ng.IScope{
        repo:any;
        username:string;
        reponame:string;
        error:string;
    }

    export interface IRepoRouteParamsService extends ng.route.IRouteParamsService{
        username:string;
        reponame:string;
    }

    export class RepoController {

        private scope:IRepoScope;
        private github:IGithubService;
        private routeParams:IRepoRouteParamsService;
        private log:ng.ILogService;

        constructor($scope:IRepoScope, github:app.IGithubService, $routeParams:IRepoRouteParamsService, $log:ng.ILogService) {
            this.scope = $scope;
            this.github = github;
            this.routeParams = $routeParams;
            this.log = $log;
            this.scope.username = this.routeParams.username;
            this.scope.reponame = this.routeParams.reponame;
            github.getRepoDetails(this.scope.username, this.scope.reponame).then(this.onRepo, this.onError);
        }

        onRepo = (data) => {
            this.scope.repo = data;
        }

        onError = (reason) => {
            this.scope.error = reason;
        }

    }

}
