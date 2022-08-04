let randomNumber1 =Math.ceil(Math.random()*6);
var randomimg="dice"+randomNumber1+".png";
var randomsrc="images/"+randomimg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomsrc);

let randomNumber2 =Math.ceil(Math.random()*6);
var randomimg="dice"+randomNumber2+".png";
var randomsrc1="images/"+randomimg;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomsrc1);

var res=document.getElementById("result");
if(randomNumber1>randomNumber2){
    res.innerHTML="Player 1 is winner"
}else if(randomNumber2>randomNumber1){
    res.innerHTML="player2 is winner ";
}else res.innerHTML="tie";