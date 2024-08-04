let h1=document.querySelector('h1');
let h2=document.querySelector('h2');

let gameSeq=[];
let userSeq=[];
let colors=['orange','brown','blue','purple'];

let started=false;
let level=0;
let highScore=0;
let score=0;

document.addEventListener('keypress',()=>{
    if(started === false)
    {
        started=true;
        levelUp();
    }
})

function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let idx=Math.floor(Math.random()*4);
    let randBtn=document.querySelector(`.${colors[idx]}`);
    btnFlash(randBtn);
    gameSeq.push(colors[idx]);
}
function btnFlash(btn)
{
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },250);
   
}
function btnPress()
{
    let btn=this;
    btnFlash(btn);

    userColor=btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
//This section makes the user-clicked button flash on being clicked
let allBtns=document.querySelectorAll('.btn');
for(btns of allBtns)
{
    btns.addEventListener("click", btnPress)
}
//--------------------------------
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length === gameSeq.length)
        setTimeout(levelUp,1000);
    }
    else{
        if(level>highScore)
            highScore=level;
        h2.innerText=`Game over! Your score is ${level} and the HIGHEST SCORE is ${highScore}
        Press any key to start`;
        
        reset();
        document.body.style.backgroundColor='red';
        setTimeout(redScreen,150);
    }
}
function reset()
{
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}
function redScreen()
{
    document.body.style.backgroundColor='white';
}