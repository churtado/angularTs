/// <reference path='../_all.ts' />
var app;
(function (app) {
    'use strict';

    var GithubService = (function () {
        function GithubService($http, $log) {
            var _this = this;
            this.getUser = function (username) {
                return _this.http.get("https://api.github.com/users/" + username).then(function (response) {
                    return response.data;
                });
            };
            this.getRepos = function (user) {
                return _this.http.get(user.repos_url).then(function (response) {
                    return response.data;
                });
            };
            this.getRepoDetails = function (username, reponame) {
                var repo;
                _this.log.debug("https://api.github.com/repos/" + username + "/" + reponame);
                var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
                var httpService = _this.http;

                return _this.http.get(repoUrl).then(function (response) {
                    repo = response.data;
                    return httpService.get(repoUrl + "/collaborators");
                }).then(function (response) {
                    repo.collaborators = response.data;
                    return repo;
                });
            };
            this.http = $http;
            this.log = $log;
        }
        return GithubService;
    })();
    app.GithubService = GithubService;
})(app || (app = {}));
//# sourceMappingURL=GithubService.js.map
