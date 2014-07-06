var triviaControllers = angular.module('triviaControllers', ['triviaServices']);

triviaControllers.controller('QuestionListCtrl', ['$scope', 'FirebaseService', function($scope, FirebaseService) {
	$scope.questions = FirebaseService.getQuestions();

	$scope.toggleAnswer = function(question) {
		question.showAnswer = !question.showAnswer;
	}

	$scope.answerQuestion = function(question, correct) {
		question.answered = true;
		question.correct = correct;
	}

	$scope.deleteQuestion = function(questionId) {
		$scope.questions.$remove(questionId);
	}
}]);

triviaControllers.controller('QuestionNewCtrl', ['$scope', '$location', 'FirebaseService', function($scope, $location, FirebaseService) {
	$scope.question = {};

	$scope.persistQuestion = function(question) {
		$scope.questions = FirebaseService.getQuestions();
		$scope.questions.$add(question).then(function(ref) {
			$location.url('/questions');
		});
	};
}]);

triviaControllers.controller('QuestionDetailCtrl', ['$scope', '$routeParams', '$location', 'FirebaseService', function($scope, $routeParams, $location, FirebaseService) {
	$scope.question = FirebaseService.getQuestion($routeParams.questionId);

	$scope.persistQuestion = function(question) {
		$scope.question.$update({question: question.question, answer: question.answer}).then(function(ref) {
			$location.url('/questions');
		});
	};
}]);

