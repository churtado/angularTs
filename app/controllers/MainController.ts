/// <reference path='../_all.ts' />

module app {
    'use strict'

    export interface IMainScope extends ng.IScope{
        username:string;
        search:Function;
    }

    export class MainController {

        private log:ng.ILogService;
        private scope:IMainScope;
        private location:ng.ILocationService;

        constructor($scope:IMainScope, $location:ng.ILocationService,$log:ng.ILogService) {
            this.location = $location;
            this.scope = $scope;
            this.log = $log;
            this.log.debug("instance created");
            this.scope.username = "angular";
            this.scope.search = this.search;
        }

        search = (username) => {
            this.log.debug("searching for " + username);
        }
    }

}
