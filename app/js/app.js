var triviaApp = angular.module('triviaApp', ['ngRoute','firebase']);

triviaApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/questions', {
				templateUrl: 'partials/question-list.html',
				controller: 'QuestionListCtrl'
			}).
			otherwise({
				redirectTo: '/questions'
			});
	}]);

triviaApp.controller('QuestionListCtrl', ['$scope', '$firebase', function($scope, $firebase) {
	var firebaseUrl = "https://torid-fire-8241.firebaseio.com/questions";
	$scope.questions = $firebase(new Firebase(firebaseUrl));

	$scope.toggleAnswer = function(question) {
		question.showAnswer = !question.showAnswer;
	}
}]);

