/// <reference path='../_all.ts' />

module app {
    'use strict'

    export interface IGithubService{
        getUser:Function;
        getRepos:Function;
        getRepoDetails:Function;
    }

    export class GithubService {

        private http:ng.IHttpService;
        private log:ng.ILogService;

    	constructor($http:ng.IHttpService, $log:ng.ILogService) {
            this.http=$http;
            this.log=$log;
        }

        getUser = (username) => {
            return this.http.get("https://api.github.com/users/" + username)
                .then(function(response){
                    return response.data;
                });
        }

        getRepos = (user) => {
            return this.http.get(user.repos_url)
            .then(function(response){
                return response.data;
            });
        }

        getRepoDetails = (username, reponame) => {
            var repo;
            this.log.debug("https://api.github.com/repos/" + username + "/" + reponame);
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
            var httpService = this.http;

            return this.http.get(repoUrl)
                .then(function(response){
                    repo = response.data;
                    return httpService.get(repoUrl + "/collaborators");
                })
                .then(function(response){
                    repo.collaborators = response.data;
                    return repo;
                });
        }

    }
}