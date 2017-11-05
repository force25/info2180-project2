var emptyTop="400px";
var emptyLeft="400px";
var result;
window.onload = function(){	
var puzzle = document.getElementById("puzzlearea")
var inner = puzzle.getElementsByTagName("DIV");
var width = 0;
var height = 0;
var btn1 = document.createElement("Button");
var btn2 = document.createElement("Button");
var btn3 = document.createElement("Button");
var btn4 = document.createElement("Button");
var btn5 = document.createElement("Button");
var main = document.getElementById("controls");
main.appendChild(btn1);
main.appendChild(btn2);
main.appendChild(btn3);
main.appendChild(btn4);
main.appendChild(btn5);
var text1= document.createTextNode("Background1");
var text2= document.createTextNode("Background2");
var text3= document.createTextNode("Background3");
var text4= document.createTextNode("Background4");
var text5= document.createTextNode("Background5");
btn1.appendChild(text1);
btn2.appendChild(text2);
btn3.appendChild(text3);
btn4.appendChild(text4);
btn5.appendChild(text5);
var id1 = btn1.setAttribute("id","Default");
var id2 = btn2.setAttribute("id","button2");
var id3 = btn3.setAttribute("id","button3");
var id4 = btn4.setAttribute("id","button4");
var id5 = btn5.setAttribute("id","button5");

createPuzzle();
puzzle.style.setProperty("top", "-100px");
puzzle.style.setProperty("left", "-70px");
changeTop();
changeLeft();
Grid();
changeHover();
getall();
shuffleClick();
changeBack();
}

function changeBack(){
var bg1 = document.getElementById("Default");
var bg2 = document.getElementById("button2");
var bg3 = document.getElementById("button3");
var bg4 = document.getElementById("button4");
var bg5 = document.getElementById("button5");
var b;
	bg1.addEventListener("click",function(){
		b=bg1.innerHTML;
		console.log(b)
		decideImage(b);
			});
	bg2.addEventListener("click",function(){
			b=bg2.innerHTML;
			console.log(b)
			decideImage(b);
			});
	bg3.addEventListener("click",function(){
			b=bg3.innerHTML;
			console.log(b)
			decideImage(b);
			});
	bg4.addEventListener("click",function(){
			b=bg4.innerHTML;
			console.log(b)
			decideImage(b);
			});
	bg5.addEventListener("click",function(){
			b=bg5.innerHTML;
			console.log(b)
			decideImage(b);
			});
}
function decideImage(bg){
var puzzle = document.getElementById("puzzlearea")
var inner = puzzle.getElementsByTagName("DIV");
	if(bg== "Background1"){
		for (var j = 0; j<inner.length;j++){
		inner[j].style.backgroundImage = "url('https://raw.githubusercontent.com/force25/info2180-project2/gh-pages/background.jpg')";
				}
		}
		else if(bg == "Background2"){
		for (var j = 0; j<inner.length;j++){
		inner[j].style.backgroundImage = "url('https://raw.githubusercontent.com/force25/info2180-project2/gh-pages/rin.jpg')";
				}	
		}
		else if(bg == "Background3"){
		for (var j = 0; j<inner.length;j++){
		inner[j].style.backgroundImage = "url('https://raw.githubusercontent.com/force25/info2180-project2/gh-pages/saber.jpg')";
				}
		}
		else if(bg == "Background4"){
		for (var j = 0; j<inner.length;j++){
		inner[j].style.backgroundImage = "url('https://raw.githubusercontent.com/force25/info2180-project2/gh-pages/sakura.jpg')";
				}	
		}
		else if(bg == "Background5"){
		for (var j = 0; j<inner.length;j++){
		inner[j].style.backgroundImage = "url('https://raw.githubusercontent.com/force25/info2180-project2/gh-pages/scathach.jpg')";
				}			
		}
		else{return console.log("d");}
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