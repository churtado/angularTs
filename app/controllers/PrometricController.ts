/// <reference path='../_all.ts' />

//TODO: make the model into a typescript class

module app {
    'use strict'

    //typscript inheritance at work with scope and other services... http, etc.
    export interface IPrometricScope extends ng.IScope{
        promotion:{
            description:string;
            casesAmount:number;
            revenuePerCase:number;
            mechanic:string;
            supportLevel:string;
            dateFrom:Date;
        }
        getRevenue:Function;

        //mechanic and support level with ajax via $http and promises
        mechanics:any;
        supportLevels:any;

        calendar:{
            today:Function;
            clear:Function;
            disabled:Function;
            toggleMin:Function;
            minDate:Date;
            opened:boolean;
            open:Function;
            dateOptions:any;
            initDate:Date;
            formats:any;
            format:string;

        };
    }

    export class PrometricController {

        private log:ng.ILogService;
        private scope:IPrometricScope;
        private http:ng.IHttpService;


        constructor($scope:IPrometricScope, $http:ng.IHttpService, $log:ng.ILogService) {
            //Angular services
            this.scope = $scope;
            this.log = $log;
            this.http = $http;

            //my very basic model
            this.scope.promotion={
                description:null,
                casesAmount:null,
                revenuePerCase:null,
                mechanic:"choose",
                supportLevel:null,
                dateFrom:null
            }

            this.scope.calendar={
                today:null,
                clear:null,
                disabled:null,
                toggleMin:null,
                minDate:null,
                opened:null,
                open:null,
                dateOptions:null,
                initDate:null,
                formats:null,
                format:null
            }

            //if this were more complicated I would make it a service
            this.scope.getRevenue = this.getRevenue;

            //filling up the combos with promises
            this.http.get("http://localhost:2403/mechanics/")
                .then(this.onMechanics);

            this.http.get("http://localhost:2403/support-level/")
                .then(this.onSupportLevels);

            //initializing the calendar...
            this.scope.calendar.today = () => {
                this.scope.promotion.dateFrom = new Date();
            };
            this.scope.calendar.today();

            this.scope.calendar.clear = () => {
                this.scope.promotion.dateFrom = null;
            };

            this.scope.calendar.disabled = (date, mode) => {
                return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
            };

            this.scope.calendar.toggleMin = () => {
                this.scope.calendar.minDate = this.scope.calendar.minDate ? null : new Date();
            };
            this.scope.calendar.toggleMin();

            this.scope.calendar.open = ($event) => {
                $event.preventDefault();
                $event.stopPropagation();

                this.scope.calendar.opened = true;
            };

            this.scope.calendar.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };

            this.scope.calendar.initDate = new Date('2016-15-20');
            this.scope.calendar.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            this.scope.calendar.format = this.scope.calendar.formats[0];

        }

    onMechanics = (response) =>{
        this.scope.mechanics= response.data;
    }

    onSupportLevels = (response) =>{
        this.scope.supportLevels = response.data;
    }

    getRevenue = () => {
            //this.log.debug("cases: " + this.scope.promotion.casesAmount + " rev/case: " + this.scope.promotion.revenuePerCase);

            if(angular.isDefined(this.scope.promotion.casesAmount) && angular.isDefined(this.scope.promotion.revenuePerCase)){
                return this.scope.promotion.casesAmount * this.scope.promotion.revenuePerCase;
            }else{
                return;
            }

        }


    }

}
