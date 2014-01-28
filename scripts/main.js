requirejs.config({
    //To get timely, correct error triggers in IE, force a define/shim exports check.
    paths: {
    	jquery: 'lib/bower_components/jquery/jquery.min',
        angular: 'lib/bower_components/angular/angular.min',
        //bootstrap: 'lib/bower_components/bootstrap/dist/js/bootstrap.min'
        priceCalculator: 'app/priceCalculator'

    },
});

require(['jquery', 'angular' , 'priceCalculator'], 
	function( $ , angular , priceCalculator){

});

require(["helper/util"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    
});
	
