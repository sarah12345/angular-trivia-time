var triviaControllers = angular.module('triviaControllers', ['triviaServices']);

triviaControllers.controller('QuestionListCtrl', ['$scope', 'FirebaseService', function($scope, FirebaseService) {
	$scope.questions = FirebaseService.getQuestions();

	$scope.answerQuestion = function(question, correct) {
		question.answered = true;
		question.correct = correct;
	};

	$scope.totalQuestions = function() {
		var questionElements = document.querySelectorAll('i.fa-smile-o');
		return questionElements.length;
	};

	$scope.correctAnswers = function() {
		var questionElements = document.querySelectorAll('i.fa-smile-o.active');
		return questionElements.length;
	};

	$scope.deleteQuestion = function(questionId) {
		$scope.questions.$remove(questionId);
	};
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
		$scope.question.$update({
			question: question.question,
			option1: question.option1,
			option2: question.option2,
			option3: question.option3,
			answer: question.answer
		}).then(function(ref) {
			$location.url('/questions');
		});
	};
}]);

