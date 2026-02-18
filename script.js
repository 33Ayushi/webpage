
let openBtn=document.getElementById("openBtn");

let closeBtn=document.getElementById("closeBtn");

let letter=document.getElementById("letter");

let text=document.getElementById("text");

let music=document.getElementById("music");



let message="sooo I m sorry whatever happend just happend 😐 \n\n whatever shit i saud  i did not mean that i don not know bs mujhe kuch smhj nhi aa rha tha what should i do thats why voh sab hua  🥺\n buttt butt better you understand that  galti abhi bhi tumahri hi hai .. bczz you make me angry so dont try to make me angry again better you understand 🫣\N i dont want to do bro bcz tumne voh kiya tabhi voh hua whatever leave it 🫂 \n\nYou are my everything babbebee ...\n ndd ndd I love you forever more and more ❤️";


let i=0;



/* OPEN */

openBtn.onclick=function(){


letter.classList.add("show");


/* vibration */

if(navigator.vibrate){

navigator.vibrate([200,100,200]);

}


/* music */

music.play();


/* typing */

setTimeout(typeWriter,800);


/* effects */

heartRain();

roseRain();

createStars();

};



/* Typing */

function typeWriter(){


if(i<message.length){

text.innerHTML+=message.charAt(i);

i++;

setTimeout(typeWriter,120);

}

}



/* Close runs */

closeBtn.onmouseover=function(){


closeBtn.style.position="absolute";

closeBtn.style.top=Math.random()*80+"%";

closeBtn.style.left=Math.random()*80+"%";

};



/* Hearts */

function heartRain(){


setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.classList.add("heart");

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=Math.random()*3+2+"s";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),5000);

},300);

}



/* Roses */

function roseRain(){


setInterval(()=>{

let rose=document.createElement("div");

rose.innerHTML="🌹";

rose.classList.add("rose");

rose.style.left=Math.random()*100+"vw";

rose.style.animationDuration=Math.random()*3+2+"s";

document.body.appendChild(rose);

setTimeout(()=>rose.remove(),5000);

},300);

}



/* Stars around envelope */

function createStars(){


let envelope=document.getElementById("envelope");


for(let i=0;i<80;i++){

let star=document.createElement("div");

star.innerHTML="✨";

star.classList.add("star");

star.style.top=(Math.random()*400 - 200)+"px";

star.style.left=(Math.random()*400 - 200)+"px";

envelope.appendChild(star);

}

}



/* Mouse stars */

document.addEventListener("mousemove",function(e){


let star=document.createElement("div");

star.innerHTML="✨";

star.classList.add("star");

star.style.position="fixed";

star.style.left=e.clientX+"px";

star.style.top=e.clientY+"px";

document.body.appendChild(star);


setTimeout(()=>star.remove(),800);


});

