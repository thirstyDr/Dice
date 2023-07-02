var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomimg1 = "dice"+randomnumber1+".png";
var randomsrc1 = "images/"+randomimg1;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomsrc1);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomimg2 = "dice"+randomnumber2+".png";
var randomsrc2 = "images/"+randomimg2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomsrc2);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="PLAYER:1 WINS";
}else
if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="PLAYER:2 WINS";
}else{
    document.querySelector("h1").innerHTML="ITS A DRAW";
}