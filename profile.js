document.getElementById("info").addEventListener("click", () => {
    if(type==0){document.getElementById("infobox").style.display="flex"; document.getElementById("infobox2").style.display="none"; document.getElementById("infobox3").style.display="none"}
   else if(type==3){document.getElementById("infobox2").style.display="flex"; document.getElementById("infobox").style.display="none"; document.getElementById("infobox3").style.display="none"}
    else if(type==2){document.getElementById("infobox3").style.display="flex"; document.getElementById("infobox").style.display="none"; document.getElementById("infobox2").style.display="none"};
    document.getElementById("optio2").style.display="none";
 document.getElementById("username").style.display="none"
})
document.getElementById("edit").addEventListener("click", () => {document.getElementById("optio2").style.display="flex";
document.getElementById("username").style.display="none";
document.getElementById("infobox3").style.display="none";
 document.getElementById("infobox").style.display="none";
 document.getElementById("infobox2").style.display="none"})
document.getElementById("user").addEventListener("click", () => {document.getElementById("username").style.display="block"; 
document.getElementById("optio2").style.display="none";
document.getElementById("infobox3").style.display="none";
 document.getElementById("infobox").style.display="none";
 document.getElementById("infobox2").style.display="none"})

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let username = document.getElementById("username");
let type = 0;

option1.addEventListener("click", () => {document.getElementById("penimage").src="stylus 4,2.png"; type=0; document.getElementById("model").innerHTML="basic stylus"; localStorage.setItem("state8", type)})
option2.addEventListener("click", () => {document.getElementById("penimage").src="stylus 3,2.png"; type=2; document.getElementById("model").innerHTML="master stylus"; localStorage.setItem("state8", type)})
option3.addEventListener("click", () => {document.getElementById("penimage").src="stylus 2,2.png"; type=3; document.getElementById("model").innerHTML="ultra stylus"; localStorage.setItem("state8", type)})
username.addEventListener("input", () => {document.getElementById("usernamev").innerHTML=username.value; localStorage.setItem("state7", username.value)})

document.getElementById("issues").addEventListener("input", ()=>{localStorage.setItem("state5", document.getElementById("issues").value)})
document.getElementById("repairs").addEventListener("input", ()=>{localStorage.setItem("state6", document.getElementById("repairs").value)})

let blevel = document.getElementById("blevel");
let bhealth = document.getElementById("bhealth");
let sensitivity = document.getElementById("sensitivity");

window.addEventListener("load", functionsave) 
function functionsave(){ 
   blevel.value=localStorage.getItem("state1")
       document.getElementById("repairs").value=localStorage.getItem("state6")
    document.getElementById("issues").value=localStorage.getItem("state5")
    username.value=localStorage.getItem("state7")
    type=localStorage.getItem("state8")
    if(type==0){document.getElementById("penimage").src="stylus 4,2.png"}
    else if(type==2){document.getElementById("penimage").src="stylus 3,2.png"}
    else if(type==3){document.getElementById("penimage").src="stylus 2,2.png"};
    if(type==0){document.getElementById("model").innerHTML="basic stylus"}
    else if(type==3){document.getElementById("model").innerHTML="ultra stylus"}
     else if(type==2){document.getElementById("model").innerHTML="master stylus"}
    document.getElementById("usernamev").innerHTML=username.value
    document.getElementById("date1").innerHTML=localStorage.getItem("date2")
    document.getElementById("date2").innerHTML=localStorage.getItem("date1")
    document.getElementById("date3").innerHTML=localStorage.getItem("date1")
    bhealth.value=localStorage.getItem("state2")
    sensitivity.value=localStorage.getItem("state3")
}