/// <reference path='../_all.ts' />
var app;
(function (app) {
    'use strict';

    var ScaffoldDirective = (function () {
        function ScaffoldDirective() {
            this.templateUrl = 'partials/templates/directive.html';
            this.restrict = 'E';
        }
        ScaffoldDirective.prototype.link = function ($scope, element, attributes) {
            element.text("i'm a directive");
        };
        return ScaffoldDirective;
    })();
    app.ScaffoldDirective = ScaffoldDirective;
})(app || (app = {}));
//# sourceMappingURL=ScaffoldDirective.js.map
