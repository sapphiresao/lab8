$(document).ready(function() {

	var questions = [		"Which of the following is not a programming language?",		"Which of the following is not an object-oriented programming language?",		"What is the output of the following code?\nconsole.log(1 + '2' + '3');",		"Which of the following is not a JavaScript framework?"	];

	var answers = [		"HTML",		"C",		"123",		"Rails"	];

	var choice_options = [		["HTML", "Java", "Python", "CSS"],
		["C", "Java", "Ruby", "Python"],
		["123", "6", "NaN", "TypeError"],
		["React", "Angular", "Vue", "Rails"]
	];

	for (var i = 0; i < questions.length; i++) {
		var question_div = $("<div class='question'></div>").text(questions[i]);
		$("#quiz").append(question_div);

		var choices_div = $("<div class='choices'></div>");
		for (var j = 0; j < choice_options[i].length; j++) {
			var choice_input = $("<input type='radio' name='choice" + i + "' value='" + choice_options[i][j] + "' required>");
			var choice_label = $("<label></label>").text(choice_options[i][j]);
			choices_div.append(choice_input, choice_label);
		}
		$("#quiz").append(choices_div);
	}

	$("#submit-btn").click(function() {
		var score = 0;
		for (var i = 0; i < answers.length; i++) {
			var user_answer = $("input[name='choice" + i + "']:checked").val();
			if (user_answer === answers[i]) {
				score++;
			}
		}
		$("#result").text("Your score is " + score + "/" + answers.length);
	});

});
