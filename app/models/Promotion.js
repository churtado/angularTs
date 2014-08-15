/// <reference path='../_all.ts' />
var app;
(function (app) {
    'use strict';

    var Promotion = (function () {
        function Promotion(promotion) {
            this.description = promotion.description;
            this.casesAmount = promotion.casesAmount;
            this.revenuePerCase = promotion.revenuePerCase;
            this.mechanic = promotion.mechanic;
            this.supportLevel = promotion.supportLevel;
            this.dateFrom = promotion.dateFrom;
        }
        return Promotion;
    })();
    app.Promotion = Promotion;
})(app || (app = {}));
//# sourceMappingURL=Promotion.js.map
