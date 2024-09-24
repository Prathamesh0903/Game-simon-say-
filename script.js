//step1=btn press game start
//step 2=btn flash ,level update

let gameseq=[];    //to track game sequence
let userseq=[];    // to track user sequence
let color=["yellow","purple","pink","blue"];

let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;       
    }
  levelup();
});

function levelup(){
  userseq=[];
level++;
h3.innerText=`level ${level}`;
let randindex=Math.floor(Math.random()*4);
let randcolor=color[randindex];
let randbtn=document.querySelector(`.${randcolor}`)
// console.log(randindex);
// console.log(randcolor);
// console.log(randbtn);
gameseq.push(randcolor);
console.log(gameseq);
flash(randbtn);
}

function flash(btn){
   btn.classList.add("flash")
   setTimeout(function(){ 
    btn.classList.remove("flash")
   },250);
}

function userflash(btn){          //after clicking button green flash yenya sathi
  btn.classList.add("userflash")
  setTimeout(function(){ 
   btn.classList.remove("userflash")
  },250);
}



function btnPress(){
  //console.log(this);
  let btn=this;  // khalchya for loop ch button acces krnyasathi this vaprla
  console.log("button was pressed");
  userflash(btn);
  usercolor=btn.getAttribute("id");
  console.log(usercolor);
  userseq.push(usercolor);
  console.log(userseq);
  checkans(userseq.length-1);
}

let btns=document.querySelectorAll(".btn"); 
for(btn of btns){
btn.addEventListener("click",btnPress)
} 

function checkans(idx){
  if(gameseq[idx]==userseq[idx]){
 if(gameseq.length==userseq.length){
setTimeout(levelup,1000);
}
  }
  else{
    h3.innerHTML=`Game Over!! Your Score is <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function() {
      document.querySelector("body").style.backgroundColor="white";
    }, 150);
    reset();
  }
}


function reset(){
  started=false;
  gameseq=[];
  userseq=[];
  level=0;
}