var quiz = [
	{
    	question: "When did World War Two start?",
    	answer: [ "1941", "1945", "1943", "1939"],
    	correct: 3,
    	result: "World War II was a global war that lasted from 1939 to 1945, although related conflicts began earlier, it involved the vast majority of the world's nations"
	},
    {
    	question: "What is the zone called between North Korea and South Korea?", 
   		answer: [ "The Safe Zone", "Korean Demilitarized Zone", "Military Free Zone", "Korean Zone of Separation"], 
    	correct: 1,
    	result: "The Korean Demilitarized Zone is a strip of land running across the Korean Peninsula. It was established at the end of the Korean War to serve as a buffer zone between North Korea and South Korea"
	},
	{
		question: "How many U.S. Soldiers died in the Vietnam War?",
		answer: [ "58,220", "97,600", "132,300", "23,560" ],
		correct: 0,
		result: "The Vietnam War, estimates of the number of Vietnamese soldiers and civilians killed vary from 800,000 to 3.1 million. Some 200,000 to 300,000 Cambodians, 20,000 to 200,000 Laotians, and 58,220 U.S. service members also died in the conflict, with a further 1,626 missing in action."
	},
	{
		question: "When was the United States Army created?",
		answer: [ "3 June 1784", "4 July 1785", "24 August 1748", "17 January 1759"],
		correct: 0,
		result: "After the Revolutionary War, the Congress of the Confederation created the United States Army on 3 June 1784, to replace the disbanded Continental Army. The United States Army considers itself descended from the Continental Army, and dates its institutional inception from the origin of that armed force in 1775."
	},
	{
		question: "About how many U.S. soldiers have died in all wars combine",
		answer: [ "700,000", "1.9 Million" , "1.2 Million", "900,000"],
		correct: 2,
		result: "In all the American wars there have been 651,008 Battle Deaths; and about 1.2million deaths during service in war time.About 42 million people have served in the military during wartime. About 1/50th of the people serving during a time of war have died."
	}
//    result: ['explanation1', 'explanation2', 'explanation3', 'explanation4', 'explanation5']
];
var i = 0;
var selected;
var length = quiz.length;
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
		if (selected == (quiz[i].correct))
		{
			count++;
			ifcorrect = "Correct!";
			Results(ifcorrect, quiz, i);
			if (i+1 == length)
			{
				End(count, i);
				return false;
			}
		}
		else {
			ifcorrect = "Incorrect!";
			Results(ifcorrect, quiz, i);
			if (i+1 == length)
			{		
				End(count, i);
				return false;
			}
		}
		i++;
		return false;
});
function Questions(quiz, i) {
	$("body").append('<div class="container3"><p>' + quiz[i].question + '</p><ul>');
	var answers = quiz[i].answer.length;
	for (var j = 0; j < answers; j++) {
            $(".container3").append('<li><input type="radio" id="selected" value=' + j + '></p> ' + quiz[i].answer[j] + '</li>');
        };
	$(".container3").append('<form><input type="submit" id="SubmitButton" class="submit" name="Submit" value="Submit"/></form></div>');
}
function Results(ifcorrect, quiz, i) {
	$(".container3").remove();
	$("body").append('<div class="container2"><h1>' + ifcorrect + '</h1><p> ' + quiz[i].result + '</p><a class="close" href="#">Got It!</a></div>');
}
function End() {		
		$("body").append('<div class="container"><h3> ' + count + ' out of ' + length + ' Correctly answered questions </h3><form><input type="submit" id="StartButton" class="button" name="Start" value="Again?"/></form></div>');
		count = 0;
		i = 0;
		return false;
}
});
