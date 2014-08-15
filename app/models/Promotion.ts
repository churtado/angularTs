/// <reference path='../_all.ts' />

module app {
    'use strict'

    export interface IPromotion{
        description:string;
        casesAmount:number;
        revenuePerCase:number;
        mechanic:string;
        supportLevel:string;
        dateFrom:Date;
    }

    export class Promotion implements IPromotion{

        public description:string;
        public casesAmount:number;
        public  revenuePerCase:number;
        public  mechanic:string;
        public  supportLevel:string;
        public  dateFrom:Date;


        constructor(promotion:IPromotion){
            this.description = promotion.description;
            this.casesAmount = promotion.casesAmount;
            this.revenuePerCase = promotion.revenuePerCase;
            this.mechanic = promotion.mechanic;
            this.supportLevel = promotion.supportLevel;
            this.dateFrom = promotion.dateFrom;
        }

    }
}
