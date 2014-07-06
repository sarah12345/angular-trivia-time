var triviaTimeApp = angular.module('triviaTimeApp', []);

triviaTimeApp.controller('GameController', ['$scope', '$http', function($scope, $http) {
	$http.get('data/games.json').success(function(data) {
		$scope.games = data;
	});
}]);