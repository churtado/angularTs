/// <reference path='../_all.ts' />
var app;
(function (app) {
    'use strict';

    var MainController = (function () {
        function MainController($scope, $location, $log) {
            var _this = this;
            this.search = function (username) {
                _this.location.path("/user/" + username);
            };
            this.location = $location;
            this.scope = $scope;
            this.log = $log;
            this.scope.username = "angular";
            this.scope.search = this.search;
        }
        return MainController;
    })();
    app.MainController = MainController;
})(app || (app = {}));
//# sourceMappingURL=MainController.js.map
