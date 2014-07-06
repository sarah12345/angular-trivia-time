var triviaServices = angular.module('triviaServices', []);

triviaServices.constant('FIREBASE_URL','https://torid-fire-8241.firebaseio.com/questions');

triviaServices.factory('FirebaseService', function($firebase, FIREBASE_URL) {
	return {
		getQuestion: function(questionId) {
			return $firebase(new Firebase(FIREBASE_URL + '/' + questionId));
		},
		getQuestions: function() {
			return $firebase(new Firebase(FIREBASE_URL));
		}
	};
});