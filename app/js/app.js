var triviaTimeApp = angular.module('triviaTimeApp', []);

triviaTimeApp.controller('QuizController', function($scope) {
	$scope.quizzes = [
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