var triviaServices = angular.module('triviaServices', []);

triviaServices.constant('FIREBASE_URL','https://wdiy-trivia-time.firebaseio.com/questions');

triviaServices.service('FirebaseService', function($firebase, FIREBASE_URL) {
	this.getQuestion = function(questionId) {
		return $firebase(new Firebase(FIREBASE_URL + '/' + questionId));
	};
	this.getQuestions = function() {
		return $firebase(new Firebase(FIREBASE_URL));
	};
});