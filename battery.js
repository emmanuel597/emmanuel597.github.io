let option1 = document.getElementById("option1");
let option4 = document.getElementById("option4");
let option3 = document.getElementById("option3");
let option2 = document.getElementById("option2");
let value = document.getElementById("value");
let input = document.getElementById("input");
let enter = document.getElementById("enter");
let value4 = 60;
let value5 = 50;

option1.addEventListener("click", () => {value.innerHTML="100%"; value4=100; 
option1.style.borderBottom="1px solid grey";
option3.style.borderBottom="0";
option4.style.borderBottom="0 ";
option2.style.borderBottom="0";})
option2.addEventListener("click", () => {value.innerHTML="70%"; value4=70;
option2.style.borderBottom="1px solid grey";
option3.style.borderBottom="0";
option1.style.borderBottom="0 ";
option4.style.borderBottom="0";})
option3.addEventListener("click", () => {value.innerHTML="40%"; value4=40;
option3.style.borderBottom="1px solid grey";
option4.style.borderBottom="0";
option1.style.borderBottom="0 ";
option2.style.borderBottom="0";})
option4.addEventListener("click", () => {value.innerHTML="10%"; value4=10;
option4.style.borderBottom="1px solid grey";
option3.style.borderBottom="0";
option1.style.borderBottom="0 ";
option2.style.borderBottom="0";})

enter.addEventListener("click", function3)
function function3(){
    if(input.value==1 || input.value<5 && input.value>1){document.getElementById("bhealth").innerHTML="bad"; value5=30}
    else if(input.value==5 || input.value<10 && input.value>5){document.getElementById("bhealth").innerHTML="moderate"; value5=60}
    else if(input.value==10 || input.value>10){document.getElementById("bhealth").innerHTML="good"; value5=100}
}
let blevel = document.getElementById("blevel");
let save = document.getElementById("save");
save.addEventListener("click", () => {
    localStorage.setItem("state1", value4);
 localStorage.setItem("state2", value5);
 let date = new Date;
 localStorage.setItem("date1", date.toLocaleDateString());
  window.alert("saved")})

