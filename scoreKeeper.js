var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display= document.querySelector("#p1Display");
var	p2Display = document.getElementById("p2Display");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var gameOver = false;
var winningScore = 5;
var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function(){
	if(!gameOver)
		p1Score++;
		if(p1Score === winningScore){
			gameOver = true;
			p1Display.classList.add("winner");
		} 			
		p1Display.innerHTML = p1Score;
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			gameOver = true;
			p2Display.classList.add("winner");
		}
		p2Display.innerHTML = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function(){
	winningScoreDisplay.innerHTML =  this.value;
	winningScore = Number(this.value);
	reset();
});

function reset(){
	p2Score = 0;
	p1Score = 0;
	p1Display.innerHTML = 0;
	p2Display.innerHTML = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}