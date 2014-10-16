// js/hexclock.js
'use strict';

/**
 * Déclaration Application hexClockApp
 */

var hexClockApp = angular.module('hexClockApp', [
    // Dépendances du module
    'hexClock'
]);

/**
 * Déclaration du module hexClock
 */
var hexClock = angular.module('hexClock',[]);

/**
 * Contrôleur clockCtrl
 */

hexClock.controller('clockCtrl', ['$scope', '$interval',
    function ($scope, $interval) {

    	var timer = $interval(function(){
    		$scope.date = new Date();
    	}, 1000);

    	var time = $scope.time = {};
    		time.date = new Date();
    		time.currentTime = "#" + time.date.getHours() + time.date.getMinutes() + time.date.getSeconds();
    }
]);