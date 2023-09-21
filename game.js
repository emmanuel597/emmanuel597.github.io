let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let score = 0;
let highscore = 0
let sec1 = 2500;
let sec2 = 4000;
let sec3 = 3000;
let sec4 = 3500;
let lives = 3;
let start = false;

setInterval(create1, sec1)
function create1(){
    if(start==true){
        box1.style.backgroundColor="grey";
setTimeout(() => {if(box1.style.backgroundColor=="grey"){box1.style.backgroundColor="red"; document.getElementById("lives").innerHTML=lives--;
if(lives==-1){document.getElementById("blank2").style.display="flex"; start=false}}}, 2000)}
}
setInterval(create2, sec2)
function create2(){
    if(start==true){box2.style.backgroundColor="grey"
setTimeout(() => {if(box2.style.backgroundColor=="grey"){box2.style.backgroundColor="red"; document.getElementById("lives").innerHTML=lives--;
if(lives==-1){document.getElementById("blank2").style.display="flex"; start=false}}}, 2000)}
}
setInterval(create3, sec3)
function create3(){
    if(start==true){box3.style.backgroundColor="grey"
setTimeout(() => {if(box3.style.backgroundColor=="grey"){box3.style.backgroundColor="red"; document.getElementById("lives").innerHTML=lives--;
if(lives==-1){document.getElementById("blank2").style.display="flex"; start=false}}}, 2000)}
}
setInterval(create4, sec4)
function create4(){
    if(start==true){box4.style.backgroundColor="grey"
setTimeout(() => {if(box4.style.backgroundColor=="grey"){box4.style.backgroundColor="red"; document.getElementById("lives").innerHTML=lives--;
if(lives==-1){document.getElementById("blank2").style.display="flex"; start=false}}}, 2000)}
}

box1.addEventListener("click", () => {
    if(box1.style.backgroundColor=="grey"){box1.style.backgroundColor="white";
 document.getElementById("score").innerHTML=score++;
 document.getElementById("score2").innerHTML=score;
 if(score>highscore){highscore=score}else{};
 document.getElementById("highscore").innerHTML=highscore;
 localStorage.setItem("state4", highscore)}
 else{}})

box2.addEventListener("click", () => {
    if(box2.style.backgroundColor=="grey"){box2.style.backgroundColor="white";
 document.getElementById("score").innerHTML=score++;
 document.getElementById("score2").innerHTML=score;
 if(score>highscore){highscore=score}else{};
 document.getElementById("highscore").innerHTML=highscore;
 localStorage.setItem("state4", highscore)}
 else{}})

box3.addEventListener("click", () => {
    if(box3.style.backgroundColor=="grey"){box3.style.backgroundColor="white";
 document.getElementById("score").innerHTML=score++;
 document.getElementById("score2").innerHTML=score;
 if(score>highscore){highscore=score}else{};
 document.getElementById("highscore").innerHTML=highscore;
 localStorage.setItem("state4", highscore)}
 else{}})

box4.addEventListener("click", () => {
    if(box4.style.backgroundColor=="grey"){box4.style.backgroundColor="white";
 document.getElementById("score").innerHTML=score++;
 document.getElementById("score2").innerHTML=score;
 if(score>highscore){highscore=score}else{};
 document.getElementById("highscore").innerHTML=highscore;
localStorage.setItem("state4", highscore)}else{}})

document.getElementById("continue").addEventListener("click", () => {document.getElementById("blank").style.display="none"; start=true})
window.addEventListener("load", () => {highscore=localStorage.getItem("state4")})
document.getElementById("playagain").addEventListener("click", () => {location.reload()})