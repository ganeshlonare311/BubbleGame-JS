let time=60;
let score=0;
let hitrn=0;

function makeBubble(){
    let bubbles='';
    
for(let i=0;i<126;i++) {
    let randomno=Math.floor(Math.random()*10)+1;
    bubbles +=`<div id="bubble">${randomno}</div>`;
}

document.querySelector("#pbtm").innerHTML=bubbles;
}


function timer(){
    let intervel;
    intervel=setInterval(()=> {
        if(time>0) {
        time--;
        document.querySelector(".timerout").textContent=time;
        }else{
            clearInterval(intervel);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
    },1000)
}

function getNewHit(){
    hitrn=Math.floor(Math.random()*10)+1;
    let val=document.querySelector(".hitval");
    val.textContent=hitrn;
}

function getScore(){
    score+=10;
    document.querySelector(".scoreval").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",(dets)=> {
    let clickno=parseInt(dets.target.textContent);
    if(clickno==hitrn) {
        getScore();
        makeBubble();
        getNewHit();
    }else{
        console.log(dets.target.id);
    }
})

makeBubble();
timer();
getNewHit();