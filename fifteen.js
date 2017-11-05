var emptyTop="400px";
var emptyLeft="400px";
var result;
//console.log(parseInt(l[j].innerHTML));
window.onload = function(){	
var i = document.getElementById("puzzlearea")
var l = i.getElementsByTagName("DIV");
var width = 0;
var height = 0;

i.style.setProperty("top", "-100px");
changeTop();
changeLeft();
Grid();
getall();
for (var j = 0; j<l.length;j++){
  l[j].setAttribute("class","puzzlepiece");
	}
}

function getall(){
var p
var i = document.getElementById("puzzlearea").getElementsByTagName("DIV");
			
			//var d=i[6+1];
			//console.log(d);
	for (var j = 0; j<i.length;j++){
		i[j].addEventListener("click", function(){
			 p = parseInt(this.innerHTML-1);
			//ifMovable();
			//this.style.borderColor="red";
			//var p = parseInt(i[j].innerHTML-1);
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
function ifmoveable(piece){
   var i = document.getElementById("puzzlearea").getElementsByTagName("DIV");
   var topEmpty  = parseInt(emptyTop);
   var leftEmpty  =  parseInt(emptyLeft);
		if(parseInt(i[piece].style.left)+100 ==leftEmpty && parseInt(i[piece].style.top) == topEmpty){
			result = "true";
   }
   else if(parseInt(i[piece].style.left)-100 ==leftEmpty && parseInt(i[piece].style.top) == topEmpty){
			result = "true";
   }
   else if(parseInt(i[piece].style.left) ==leftEmpty && parseInt(i[piece].style.top)+100== topEmpty){
			result = "true";
   }
   else if(parseInt(i[piece].style.left)==leftEmpty && parseInt(i[piece].style.top)-100 == topEmpty){
			result = "true";
   }
   else{
	   result= "false";
   }
}
function move(piece){
	var i = document.getElementById("puzzlearea")
	var l = i.getElementsByTagName("DIV")[piece];
	temp=l.style.top;
	console.log(temp);
	l.style.top= emptyTop;
	emptyTop= temp;
	temp=l.style.left;
	l.style.left= emptyLeft;
	emptyLeft= temp;
}		
		

function changeTop(){
var width = 0;
var i = document.getElementById("puzzlearea").getElementsByTagName("DIV");
for (var j = 0; j<i.length;j++){
   if (j%4 == 0){
	 width = width+100;
   }
   i[j].style.setProperty("top", width+"px");
	}
}
function changeLeft(){
var i = document.getElementById("puzzlearea").getElementsByTagName("DIV");
var height = 0;
	for (var j = 0; j<i.length;j++){
	 height = height+100;
	 if (j%4 == 0){
	 height = 100;
   }
	 i[j].style.setProperty("left", height+"px");
   }
}

function Grid(){
var i = document.getElementById("puzzlearea")
var l = i.getElementsByTagName("DIV");
//l[15].style.background= "none";
l[14].style.backgroundPosition = " -200px -300px";
l[13].style.backgroundPosition = " -100px -300px";
l[12].style.backgroundPosition = "  0px -300px";
l[11].style.backgroundPosition = " -300px -200px";
l[10].style.backgroundPosition = " -200px -200px";
l[9].style.backgroundPosition  = " -100px -200px";
l[8].style.backgroundPosition  = "  0px -200px";
l[7].style.backgroundPosition  = " -300px -100px";
l[6].style.backgroundPosition  = " -200px -100px";
l[5].style.backgroundPosition  = " -100px -100px";
l[4].style.backgroundPosition  = "  0px -100px";
l[3].style.backgroundPosition  = " -300px 0px";
l[2].style.backgroundPosition  = " -200px 0px";
l[1].style.backgroundPosition  = " -100px 0px";
l[0].style.backgroundPosition  = " 0px 0px";
}