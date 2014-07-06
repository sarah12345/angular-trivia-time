var triviaTimeApp = angular.module('triviaTimeApp', []);

triviaTimeApp.controller('GameController', function($scope) {
	$scope.games = [
		{
			name: 'Riddle Challenge',
			rating: 3,
			questions: []
		},
		{
			name: 'AngularJS Concepts',
			rating: 4,
			questions: []
		}
	]
});