/// <reference path='../_all.ts' />
var app;
(function (app) {
    'use strict';

    var GithubService = (function () {
        function GithubService($http) {
            var _this = this;
            this.getUser = function (username) {
                return _this.http.get("https://api.github.com/users/" + username).then(function (response) {
                    return response.data;
                });
            };
            this.http = $http;
        }
        return GithubService;
    })();
    app.GithubService = GithubService;
})(app || (app = {}));
//# sourceMappingURL=GithubService.js.map
