let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("R");
const scissors_div = document.getElementById("S");
const paper_div = document.getElementById("P");

function getcomputerchioce() {
	const choices = ['R', 'S', 'P'];
	const Randomnumber = Math.floor(Math.random()*3);
	return choices[Randomnumber]; 
}
function convettoward(letter) {
	if (letter === "R") return "Rock";
	if (letter === "P") return "Paper";
	return "Scissors"
	
}

function win(A, B) {
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = convettoward(A) +" beats "+ convettoward(B)+ ". You win!";
	document.getElementById(A).classList.add('green-glow');
	setTimeout(function() {document.getElementById(A).classList.remove('green-glow')}, 750);
}
function lose(A, B) {
	compScore++;
	userScore_span.innerHTML = userScore
	compScore_span.innerHTML = compScore
	result_p.innerHTML = convettoward(B) +" beats "+ convettoward(A)+ ". You lose!"
	document.getElementById(A).classList.add('red-glow');
	setTimeout(function() {document.getElementById(A).classList.remove('red-glow')}, 750);
}
function draw(A, B) {
	result_p.innerHTML = "Its a draw!"
	document.getElementById(A).classList.add('gray-glow');
	setTimeout(function() {document.getElementById(A).classList.remove('gray-glow')}, 750);
}

function game(userChoice) {
	const computerChoice = getcomputerchioce(); 
	switch (userChoice + computerChoice) {
		case "RP":
		case "SR":
		case "PS":
			win(userChoice, computerChoice);
			break;
		case "PR":
		case "RS":
		case "SP":
			lose(userChoice, computerChoice);
			break;
		case "RR":
		case "SS":
		case "PP":
			draw(userChoice, computerChoice);
			break;	
	}

}

function main() {

	rock_div.addEventListener("click", function() {
		game("R");
	})
	scissors_div.addEventListener("click", function() {
		game("S");
	})
	paper_div.addEventListener("click", function() {
		game("P");
	})
}

main();