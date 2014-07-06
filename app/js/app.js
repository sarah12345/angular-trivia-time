var triviaApp = angular.module('triviaApp', ['ngRoute','firebase']);

triviaApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/questions', {
				templateUrl: 'partials/question-list.html',
				controller: 'QuestionListCtrl'
			}).
			when('/questions/new', {
				templateUrl: 'partials/question-new.html',
				controller: 'QuestionNewCtrl'
			}).
			when('/questions/:questionId', {
				templateUrl: 'partials/question-new.html',
				controller: 'QuestionDetailCtrl'
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

triviaApp.controller('QuestionNewCtrl', ['$scope', '$firebase', '$location', function($scope, $firebase, $location) {
	$scope.question = {};

	$scope.persistQuestion = function(question) {
		var firebaseUrl = "https://torid-fire-8241.firebaseio.com/questions";
		$scope.questions = $firebase(new Firebase(firebaseUrl));
		$scope.questions.$add(question).then(function(ref) {
			$location.url('/questions');
		});
	};
}]);

triviaApp.controller('QuestionDetailCtrl', ['$scope', '$firebase', '$routeParams', '$location', function($scope, $firebase, $routeParams, $location) {
	var firebaseUrl = "https://torid-fire-8241.firebaseio.com/questions/" + $routeParams.questionId;
	$scope.question = $firebase(new Firebase(firebaseUrl));

	$scope.persistQuestion = function(question) {
		$scope.question.$update({question: question.question, answer: question.answer}).then(function(ref) {
			$location.url('/questions');
		});
	};
}]);

