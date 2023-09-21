document.getElementById("continue").addEventListener("click", () => {document.getElementById("blank").style.display="none"})
let key1 = document.getElementById("key1");
let key2 = document.getElementById("key2");
let key3 = document.getElementById("key3");
let key4 = document.getElementById("key4");
let key5 = document.getElementById("key5");
let key6 = document.getElementById("key6");
let key7 = document.getElementById("key7");
let key8 = document.getElementById("key8");
let key9 = document.getElementById("key9");
let value = document.getElementById("value");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let button = document.getElementById("button");
let progress = document.getElementById("progress");
let progress2 = document.getElementById("resultp");
let num = 1;
let num2 = 1;
let save2 = document.getElementById("save2");
setTimeout(function1, 1000)
function function1 (){
    if(num == 1){key1.style.backgroundColor="rgb(198, 198, 198"}
    else if(num == 2){key2.style.backgroundColor="rgb(198, 198, 198"}
    else if(num == 3){key3.style.backgroundColor="rgb(198, 198, 198"}
    else if(num == 4){key4.style.backgroundColor="rgb(198, 198, 198"}
    else if(num == 5){key5.style.backgroundColor="rgb(198, 198, 198"}
    else if(num == 6){key6.style.backgroundColor="rgb(198, 198, 198"}
    else if(num == 7){key7.style.backgroundColor="rgb(198, 198, 198"}
    else if(num == 8){key8.style.backgroundColor="rgb(198, 198, 198"}
    else if(num == 9){key9.style.backgroundColor="rgb(198, 198, 198"}
}

key1.addEventListener("click", () => {if(num==1){progress.value=10;
    num=2;
     console.log(num);
    key1.style.backgroundColor="grey"}else{}})
key1.addEventListener("click", function1)

key2.addEventListener("click", () => {if(num==2){progress.value=20;
    num=3;
     console.log(num);
    key2.style.backgroundColor="grey"}else{}})
key2.addEventListener("click", function1)

key3.addEventListener("click", () => {if(num==3){progress.value=30;
    num=4;
     console.log(num);
    key3.style.backgroundColor="grey"}else{}})
key3.addEventListener("click", function1)

key4.addEventListener("click", () => {if(num==4){progress.value=40;
    num=5;
     console.log(num);
    key4.style.backgroundColor="grey"}else{}})
key4.addEventListener("click", function1)

key5.addEventListener("click", () => {if(num==5){progress.value=50;
    num=6;
     console.log(num);
    key5.style.backgroundColor="grey"}else{}})
key5.addEventListener("click", function1)

key6.addEventListener("click", () => {if(num==6){progress.value=60;
    num=7;
     console.log(num);
    key6.style.backgroundColor="grey"}else{}})
key6.addEventListener("click", function1)

key7.addEventListener("click", () => {if(num==7){progress.value=70;
    num=8;
     console.log(num);
    key7.style.backgroundColor="grey"}else{}})
key7.addEventListener("click", function1)

key8.addEventListener("click", () => {if(num==8){progress.value=80;
    num=9;
     console.log(num);
    key8.style.backgroundColor="grey"}else{}})
key8.addEventListener("click", function1)

key9.addEventListener("click", () => {if(num==9){progress.value=90;
    num=0;
     console.log(num);
    key9.style.backgroundColor="grey";
if(progress.value==90){document.getElementById("blank2").style.display="flex"}}else{}})
key9.addEventListener("click", function1)

document.getElementById("next").addEventListener("click", () => {document.getElementById("slide").style.display="flex";document.getElementById("blank2").style.display="none";document.getElementById("box2").style.display="none";document.getElementById("pagenum").innerHTML="page 2"; progress.value=0 })

let hole1 = document.getElementById("hole1");
let hole2 = document.getElementById("hole2");
let hole3 = document.getElementById("hole3");
let hole4 = document.getElementById("hole4");
let hole5 = document.getElementById("hole5");
let hole6 = document.getElementById("hole6");
let hole7 = document.getElementById("hole7");
let hole8 = document.getElementById("hole8");
let hole9 = document.getElementById("hole9");
let slider1 = document.getElementById("slider1");
let slider2 = document.getElementById("slider2");
let slider3 = document.getElementById("slider3");
setTimeout(function2, 1000)
function function2 (){
    if(num2 == 1){hole1.style.backgroundColor="rgb(198, 198, 198"}
    else if(num2 == 2){hole2.style.backgroundColor="rgb(198, 198, 198"}
    else if(num2 == 3){hole3.style.backgroundColor="rgb(198, 198, 198"}
    else if(num2 == 4){hole4.style.backgroundColor="rgb(198, 198, 198"}
    else if(num2 == 5){hole5.style.backgroundColor="rgb(198, 198, 198"}
    else if(num2 == 6){hole6.style.backgroundColor="rgb(198, 198, 198"}
    else if(num2 == 7){hole7.style.backgroundColor="rgb(198, 198, 198"}
    else if(num2 == 8){hole8.style.backgroundColor="rgb(198, 198, 198"}
    else if(num2 == 9){hole9.style.backgroundColor="rgb(198, 198, 198"}
}

hole1.addEventListener("click", () => {if(num2==1){progress.value=10;
    num2=2;
     console.log(num2);
     slider1.value=30
    hole1.style.backgroundColor="grey"}else{}})
hole1.addEventListener("click", function2)

hole2.addEventListener("click", () => {if(num2==2){progress.value=20;
    num2=3;
     console.log(num);
     slider1.value=60
    hole2.style.backgroundColor="grey"}else{}})
hole2.addEventListener("click", function2)

hole3.addEventListener("click", () => {if(num2==3){progress.value=30;
    num2=4;
     console.log(num);
     slider1.value=90
    hole3.style.backgroundColor="grey"}else{}})
hole3.addEventListener("click", function2)

hole4.addEventListener("click", () => {if(num2==4){progress.value=40;
    num2=5;
     console.log(num);
     slider2.value=30
    hole4.style.backgroundColor="grey"}else{}})
hole4.addEventListener("click", function2)

hole5.addEventListener("click", () => {if(num2==5){progress.value=50;
    num2=6;
     console.log(num);
     slider2.value=60
    hole5.style.backgroundColor="grey"}else{}})
hole5.addEventListener("click", function2)

hole6.addEventListener("click", () => {if(num2==6){progress.value=60;
    num2=7;
     console.log(num);
     slider2.value=90
    hole6.style.backgroundColor="grey"}else{}})
hole6.addEventListener("click", function2)

hole7.addEventListener("click", () => {if(num2==7){progress.value=70;
    num2=8;
     console.log(num);
     slider3.value=30
    hole7.style.backgroundColor="grey"}else{}})
hole7.addEventListener("click", function2)

hole8.addEventListener("click", () => {if(num2==8){progress.value=80;
    num2=9;
     console.log(num);
     slider3.value=60
    hole8.style.backgroundColor="grey"}else{}})
hole8.addEventListener("click", function2)

hole9.addEventListener("click", () => {if(num2==9){progress.value=90;
    num2=0;
     console.log(num);
     slider3.value=90
    hole9.style.backgroundColor="grey";
if(progress.value==90){document.getElementById("blank3").style.display="flex"}}else{}})
hole9.addEventListener("click", function2)
let bnum = 1;
document.getElementById("next2").addEventListener("click", () => {document.getElementById("buttonbox").style.display="flex";document.getElementById("blank3").style.display="none";document.getElementById("slide").style.display="none";document.getElementById("pagenum").innerHTML="page 3"; progress.value=0 })
button.addEventListener("click", () => { document.getElementById("bvalue").innerHTML=bnum++;
progress.value=bnum*9;
if(progress.value==90){document.getElementById("blank4").style.display="flex"}})

document.getElementById("next3").addEventListener("click", () => {document.getElementById("blank4").style.display="none";
document.getElementById("buttonbox").style.display="none";
document.getElementById("pagenum").innerHTML="result";
 progress.value=0;
  document.getElementById("plabel").innerHTML="result";
  let result = parseInt(value.value)+parseInt(value2.value)+parseInt(value3.value);
  progress.style.display="none"; console.log(result);
  document.getElementById("result").style.display="flex";

if(result==0 || result>0 && result<5){document.getElementById("state").innerHTML="high"; progress2.value = 90-result}
else if(result==5 || result>5 && result<10){document.getElementById("state").innerHTML="medium";  progress2.value = 60-result}
if(result==10 || result>10){document.getElementById("state").innerHTML="low";  progress2.value=30-result};
sensitivity.value=progress2.value; localStorage.setItem("state3", sensitivity.value); window.alert("saved")})


save2.addEventListener("click", () => { localStorage.setItem("state3", progress2.value);
let date2 = new Date;
localStorage.setItem("date2", date2.toLocaleDateString());
 window.alert("saved")})
document.getElementById("close").addEventListener("click", () => {document.getElementById("blank0").style.display="none"})
document.getElementById("instruction").addEventListener("click", () => {document.getElementById("blank0").style.display="flex"})

