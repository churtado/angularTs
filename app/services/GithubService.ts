/// <reference path='../_all.ts' />

module app {
    'use strict'

    export interface IGithubService{
        getUser:Function;
        getRepos:Function;
        getRepoDetails:Function;
    }

    export class GithubService {

        http:ng.IHttpService;

    	constructor($http:ng.IHttpService) {
            this.http=$http;
        }

        getUser = (username) => {
            return this.http.get("https://api.github.com/users/" + username)
                .then(function(response){
                    return response.data;
                });
        }

    }
}