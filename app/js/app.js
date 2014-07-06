var triviaApp = angular.module('triviaApp', ['ngRoute']);

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

triviaApp.controller('QuestionListCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('data/questions.json').success(function(data) {
		$scope.questions = data;
	});
	$scope.toggleAnswer = function(question) {
		question.showAnswer = !question.showAnswer;
	}
}]);

