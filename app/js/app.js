var triviaTimeApp = angular.module('triviaTimeApp', []);

triviaTimeApp.controller('TriviaController', ['$scope', '$http', function($scope, $http) {
	$http.get('data/questions.json').success(function(data) {
		$scope.questions = data;
	});
	$scope.toggleAnswer = function(question) {
		question.showAnswer = !question.showAnswer;
	}
}]);