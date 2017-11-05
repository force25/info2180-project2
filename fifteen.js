var emptyTop="400px";
var emptyLeft="400px";
var result;
window.onload = function(){	
var puzzle = document.getElementById("puzzlearea")
var inner = puzzle.getElementsByTagName("DIV");
var width = 0;
var height = 0;


createPuzzle();
puzzle.style.setProperty("top", "-100px");
changeTop();
changeLeft();
Grid();
changeHover();
getall();
shuffleClick();
}

function createPuzzle(){
var puzzle = document.getElementById("puzzlearea");
var inner = puzzle.getElementsByTagName("DIV");
for (var j = 0; j<inner.length;j++){
  inner[j].setAttribute("class","puzzlepiece");
		}
	}

function getall(){
var p
var puzzle = document.getElementById("puzzlearea").getElementsByTagName("DIV");
	for (var j = 0; j<puzzle.length;j++){
		puzzle[j].addEventListener("click", function(){
			 p = parseInt(this.innerHTML-1);
			ifmoveable(p);
		if(result=="true"){
			move(p);
			}
			else{
				console.log(result);
			}
		});
	}
}
function shuffleClick(){
	var click = document.getElementById("shufflebutton");
	click.addEventListener("click",shuffle);
}

function shuffle(){
	for (var j = 1; j<=100;j++){
		piece = Math.floor((Math.random() * 14) + 0);
		move(piece);
	}
}

function changeHover(){
	var puzzle = document.getElementById("puzzlearea").getElementsByTagName("DIV");
	for (var j = 0; j<puzzle.length;j++){
		puzzle[j].addEventListener("mouseover", function(){
		p = parseInt(this.innerHTML-1);
		ifmoveable(p);
		if (result=="true"){
		this.style.textDecoration="underline";
		this.style.borderColor = "red";
		this.style.color="#006600";
		toDefaualt();
		}
		else{return 0;}
});
	}
}

function toDefaualt(){
	var puzzle = document.getElementById("puzzlearea").getElementsByTagName("DIV");
	for (var j = 0; j<puzzle.length;j++){
		puzzle[j].addEventListener("mouseleave", function(){
		if (result=="true"){
		this.style.borderColor="black";
		this.style.textDecoration="none";
		this.style.color="black";
		}
		else{return 0;}
});
	}
}


function ifmoveable(piece){
   var puzzle = document.getElementById("puzzlearea").getElementsByTagName("DIV");
   var topEmpty  = parseInt(emptyTop);
   var leftEmpty  =  parseInt(emptyLeft);
		if(parseInt(puzzle[piece].style.left)+100 ==leftEmpty && parseInt(puzzle[piece].style.top) == topEmpty){			
			result = "true";
   }
   else if(parseInt(puzzle[piece].style.left)-100 ==leftEmpty && parseInt(puzzle[piece].style.top) == topEmpty){
			result = "true";
   }
   else if(parseInt(puzzle[piece].style.left) ==leftEmpty && parseInt(puzzle[piece].style.top)+100== topEmpty){
			result = "true";
   }
   else if(parseInt(puzzle[piece].style.left)==leftEmpty && parseInt(puzzle[piece].style.top)-100 == topEmpty){
			result = "true";
   }
   else{
	   result= "false";
   }
}
function move(piece){
	var puzzle = document.getElementById("puzzlearea")
	var inner = puzzle.getElementsByTagName("DIV")[piece];
	temp=inner.style.top;
	inner.style.top= emptyTop;
	emptyTop= temp;
	temp=inner.style.left;
	inner.style.left= emptyLeft;
	emptyLeft= temp;
}		

function changeTop(){
var width = 0;
var puzzle = document.getElementById("puzzlearea").getElementsByTagName("DIV");
for (var j = 0; j<puzzle.length;j++){
   if (j%4 == 0){
	 width = width+100;
   }
   puzzle[j].style.setProperty("top", width+"px");
	}
}
function changeLeft(){
var puzzle = document.getElementById("puzzlearea").getElementsByTagName("DIV");
var height = 0;
	for (var j = 0; j<puzzle.length;j++){
	 height = height+100;
	 if (j%4 == 0){
	 height = 100;
   }
	 puzzle[j].style.setProperty("left", height+"px");
   }
}

function Grid(){
var puzzle = document.getElementById("puzzlearea")
var inner = puzzle.getElementsByTagName("DIV");
inner[14].style.backgroundPosition = " -200px -300px";
inner[13].style.backgroundPosition = " -100px -300px";
inner[12].style.backgroundPosition = "  0px -300px";
inner[11].style.backgroundPosition = " -300px -200px";
inner[10].style.backgroundPosition = " -200px -200px";
inner[9].style.backgroundPosition  = " -100px -200px";
inner[8].style.backgroundPosition  = "  0px -200px";
inner[7].style.backgroundPosition  = " -300px -100px";
inner[6].style.backgroundPosition  = " -200px -100px";
inner[5].style.backgroundPosition  = " -100px -100px";
inner[4].style.backgroundPosition  = "  0px -100px";
inner[3].style.backgroundPosition  = " -300px 0px";
inner[2].style.backgroundPosition  = " -200px 0px";
inner[1].style.backgroundPosition  = " -100px 0px";
inner[0].style.backgroundPosition  = " 0px 0px";
}