angular.module('priceCalculator' , [])
.controller('PriceController' , function(){
   this.amount = 10; 
   this.stripeFixFee = 0.3;
   this.stripePercent = 0.029;
   this.tmgFixFee = 1.5;
   this.tmgPercent = 0.085;
   
   this.tmgComission = function tmgComission(){
       var totalAfterComission = (this.amount + this.tmgFixFee)/(1 - this.tmgPercent);
       var comission = totalAfterComission - this.amount;
       return comission;
   }
   
   this.stripeComission = function stripeComission(){
       var currentAmount = this.amount + this.tmgComission();
       var totalAfterComission = (currentAmount + this.stripeFixFee)/(1 - this.stripePercent);
       var comission = totalAfterComission - currentAmount;
       return comission;
   }
   
   this.total = function total(){
       return this.amount + this.tmgComission() + this.stripeComission();
   }
   
});