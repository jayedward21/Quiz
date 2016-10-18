var quiz = {
    question: [ 'When did World War 2 start?', 'What is the zone called between North Korea and South Korea', 'How many U.S. Soldiers died in the Vietnam War?', 'When was the United States Army created?', 'About how many U.S. soldiers have died in all wars combine'],
    answera: [ '1941', 'The Safe Zone', '58,220', '3 June 1784', '700,000'],
    answerb: [ '1945', ' Korean Demilitarized Zone', '97,600', '4 July 1785', '1.9 Million'],
    answerc: [ '1943', 'Military Free Zone', '132,300', '24 August 1748', '1.1 Million'],
    answerd: [ '1939', 'Korean Zone of Separation', '23,560', '17 January 1759', '900,000'],
    correct: [ "d", "b", "a", "b", "c"],
//    result: ['explanation1', 'explanation2', 'explanation3', 'explanation4', 'explanation5']
}
var i = 0;
var selected;
var length = 4;
var count = 0;
var ifcorrect;

$(document).ready(function(){

	  $('body').on("click","#selected", function() {
    $('input[type=radio]').prop('checked', false);
    $(this).prop('checked', true);

});
	/*--- Display information modal box ---*/

	$('body').on("click","#StartButton", function() {
    	
		$(".container").remove();
		$("body").append('<div class="container2"><p>This is a over the U.S. Army and will be conducted as follows: </p><ul><li>1. A question will be presented with 4 possible answers.</li><li>2. Choose an answer and click submit.</li><li>3. If you dont know the answer you can click on Skip to go to next question. </li><li>4. The Quiz will not end unless you have made a choice for all questions</ul><p>So, Are you ready?</p><a class="close" href="#">Got It!</a></div>');
		return false;
});
	$('body').on("click",".close", function() {
		$(".container2").remove();
		Questions(quiz, i);
		return false;
});
	$('body').on("click","#SubmitButton", function() {
		$(".container2").remove();
		selected = $('input:radio[id=selected]:checked').val();
		if (selected == (quiz.correct[i]))
		{
			count++;
			ifcorrect = "Correct!";
			Results(ifcorrect, quiz, i);
			if (i == length)
			{
				End(count, i);
				return false;
			}
		}
		else {
			ifcorrect = "Incorrect!";
			Results(ifcorrect, quiz, i);
			if (i == length)
			{		
				End(count, i);
				return false;
			}
		}
		i++;
		return false;
});
$('body').on("click","#SkipButton", function() {
	$(".container2").remove();
	temp[m] = i;
	m++;
	ifcorrect = "Skipped!";
	Results(ifcorrect, quiz, 2);
	if (i == length)
			{
				End(count, i);
				return false;
			}
	i++;
	return false;
});
function Questions(quiz, i) {
	$("body").append('<div class="container3"><p>' + quiz.question[i] + '<p><ul><li><input type="radio" id="selected" value="a"/></p> A. ' + quiz.answera[i] + '</li><br><li><input type="radio" id="selected" value="b"/> B. ' + quiz.answerb[i] + '</li><br><li><input type="radio" id="selected" value="c"/> C. ' + quiz.answerc[i] + '</li><br><li><input type="radio" id="selected" value="d"/> D. ' + quiz.answerd[i] + '</li><form><input type="submit" id="SubmitButton" class="submit" name="Submit" value="Submit"/></form></div>');
}
function Results(ifcorrect, quiz, i) {
	$(".container3").remove();
	$("body").append('<div class="container2"><h1>' + ifcorrect + '</h1><a class="close" href="#">Got It!</a></div>');
}
function End() {		
		$("body").append('<div class="container"><h3> ' + count + ' out of ' + (i + 1) + ' Correctly answered questions </h3><form><input type="submit" id="StartButton" class="button" name="Start" value="Start"/></form></div>');
		count = 0;
		i = 0;
		return false;
}	
});
