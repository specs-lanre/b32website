localStorage.setItem("entry","");

function do_add(){
let entry=document.getElementById('entry').value
let display = document.getElementById('result')
x = localStorage.getItem("entry");
dsp =x+entry+"+"
display.innerHTML=dsp
localStorage.setItem("entry",dsp);

x = localStorage.getItem("entry");
console.log(x)
}


function do_equals(){

let display = document.getElementById('result2')
x = localStorage.getItem("entry");
console.log(x+0)
y = eval(x+0)
console.log(y)
display.innerHTML=y

}


function do_equals2(){
let display = document.getElementById('result2')
let entry = document.getElementById('entry').value
//x = localStorage.getItem("entry");
y = eval(entry)
console.log(y)
display.innerHTML=y

}




