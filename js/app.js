(function() {
	
//Variable containing question objects and the array of questions

	var currentQuestion = 0,
		score = 0,
		progress = 1,
		question1 = {
			question: "What is a Time Signature?",
			a: "A) A notation signifying at what time the piece should begin.",
			b: "B) A symbol stating the time at which the composer signed the piece.",
			c: "C) A symbol which provides information on beats per measure and beat values.",
			d: "D) All of the above."
			// a: "<input type='radio' name='q1' value='a' id='a'><label id='choice-a'>A)  A notation signifying at what time the piece should begin.</label><br/>"
			// b: "<input type='radio' name='q1' value='b' id='b'><label id='choice-b'>B)  A symbol stating the time at which the composer signed the piece.</label><br/>"
			// c: "<input type='radio' name='q1 value='c' id='c'><label id='choice-c'>C)  A symbol which provides information on beats per measure and beat values.</label><br/>"
			// d: "<input type='radio' name='q1' value='d' id='d'><label id='choice-d'>D)  All of the above.</label><br/>"
		},
		question2 = {
			question: "What is a Key Signature?",
			a: "A) A set of sharp or flat symbols set on a musical staff to show in which \"key\" a piece is.",
			b: "B) The place you SHOULD have left your keys so that you wouldn't lose them.",
			c: "C) A symbol which provides information on beats per measure and beat values.",
			d: "D) A legend of the symbols that will be used throughout a piece of music."
		},
		question3 = {
			question: "What is a Musical Staff?",
			a: "A) A very dangerous infection - can be deadly.",
			b: "B) A set of five horizontal lines and four spaces that each represent a different musical pitch.",
			c: "C) The weapon of choice for Gandolf the Gray.",
			d: "D) The group of actors and musicians that make up the cast of a musical."
		},
		question4 = {
			question: "Which pattern of intervals would, given a starting pitch, create a Major Scale?",
			a: "A) WHWWWHW",
			b: "B) HWWHWWH",
			c: "C) WWHWWHW",
			d: "D) WWHWWWH"
		},
		question5 = {
			question: "What is a Measure?",
			a: "A) A value of something's height, length, width, weight, etc...",
			b: "B) A set of five horizontal lines and four spaces that each represent a different musical pitch.",
			c: "C) The space between two barlines where music is written.",
			d: "D) A symbol which provides information on beats per measure and beat values."
		},
		question6 = {
			question: "What does the top number in a Time Signature signify?",
			a: "A) The number of beats per measure.",
			b: "B) The type of note that gets one beat.",
			c: "C) The number of measures in a piece of music.",
			d: "D) The tempo for a piece of music."
		},
		question7 = {
			question: "What does the bottom number in a Time Signature signify?",
			a: "A) The number of beats per measure.",
			b: "B) The type of note that gets one beat.",
			c: "C) The number of measures in a piece of music.",
			d: "D) The tempo for a piece of music."
		},
		questions = [question1, question2, question3, question4, question5, question6, question7];

//First Question and Answers load on page load

	$(document).ready(function() {
		$('.question-number').text(currentQuestion + 1 + ')');
		$('.questions').text(questions[currentQuestion].question);
		$('#choice-a').text(questions[currentQuestion].a);
		$('#choice-b').text(questions[currentQuestion].b);
		$('#choice-c').text(questions[currentQuestion].c);
		$('#choice-d').text(questions[currentQuestion].d);
		forward();
		// back();
	})

//Check for correct answers
	$('input').on('click', function() {
		if (currentQuestion == 0 && $('input[name=choices]:checked').val() === 'c') {
			score++;
			$('#score').text('Score: ' + score + '/7');
		}
		if (currentQuestion == 1 && $('input[name=choices]:checked').val() === 'a') {
			score++;
			$('#score').text('Score: ' + score + '/7');
		}
		if (currentQuestion == 2 && $('input[name=choices]:checked').val() === 'b') {
			score++;
			$('#score').text('Score: ' + score + '/7');
		}
		if (currentQuestion == 3 && $('input[name=choices]:checked').val() === 'd') {
			score++;
			$('#score').text('Score: ' + score + '/7');
		}
		if (currentQuestion == 4 && $('input[name=choices]:checked').val() === 'c') {
			score++;
			$('#score').text('Score: ' + score + '/7');
		}
		if (currentQuestion == 5 && $('input[name=choices]:checked').val() === 'a') {
			score++;
			$('#score').text('Score: ' + score + '/7');
		}
		if (currentQuestion == 6 && $('input[name=choices]:checked').val() === 'b') {
			score++;
			$('#score').text('Score: ' + score + '/7');
		}
	})

//Forward
function forward() {
	$('.forward').on('click', function() {
		if (currentQuestion == 6) {
			$('.overlay').show();
			$('#final-results').text('Your final score is: ' + score + '/7.');
			$('#final-results').delay(500);
			$('#final-results').fadeIn(2500);
			return false;
		}
		if (currentQuestion < 6) {currentQuestion++};
		if (currentQuestion <= 6) {progress++};
		$('#progress').text('Progress: ' + progress + '/7');
		$('.question-number').text(currentQuestion + 1 + ')');
		$('.questions').text(questions[currentQuestion].question);
		$('#choice-a').text(questions[currentQuestion].a);
		$('#choice-b').text(questions[currentQuestion].b);
		$('#choice-c').text(questions[currentQuestion].c);
		$('#choice-d').text(questions[currentQuestion].d);
		$('input').prop('checked', false);
	})
}

//Back

// function back() {
// 	$('.back').on('click', function() {
// 		if (currentQuestion > 0) {currentQuestion--};
// 		if (currentQuestion > 0) {progress--};
// 		$('#progress').text('Progress: ' + progress + '/7');
// 		$('.question-number').text(currentQuestion + 1 + ')');
// 		$('.questions').text(questions[currentQuestion].question);
// 		$('#choice-a').text(questions[currentQuestion].a);
// 		$('#choice-b').text(questions[currentQuestion].b);
// 		$('#choice-c').text(questions[currentQuestion].c);
// 		$('#choice-d').text(questions[currentQuestion].d);
// 	})
// }

}())