let rock=document.getElementById('rock');
let paper=document.getElementById('paper');
let scis=document.getElementById('scissors');
let restart=document.getElementById('restartt');
let textplace=document.getElementById('Place');
let wins=document.getElementById('winsp');
let loss=document.getElementById('lossp');
let draw=document.getElementById('drawp');
let lossc=0;
let winc=0;
let drawc=0;
let time=document.getElementById('time');
let win=document.getElementById('wins');
let los=document.getElementById('loss');
let dra=document.getElementById('draw');
//This is the rock
let ui;
let po=51;
let count=0;
let click=document.getElementById('click');
let nwin=document.getElementById('win');
let losss=document.getElementById('losss');
let draww=document.getElementById('draww');
let b=Math.random();
let loq=b;
ui=setInterval(timerr, 100);

rock.addEventListener('click', rockf);

function rockf() {
    
    clearInterval(ui);
    ui=setInterval(timerr, 100); //the interval for the timer function
    click.play();
    if (loq<=0.33333)
    {
    animatechange3(textplace);
    textplace.innerText= "You lost, the game chose Paper!";
    lossc=lossc+1;
    loss.innerText= lossc;
    animateChange(loss);
    animateChange2(los);
    }
    else if (loq>=0.66666){
        animatechange3(textplace)
        textplace.innerText='You won, the game chose Scissors!';
        winc=winc+1;
        wins.innerText= winc;
        animateChange(wins);
        animateChange2(win);
    }
    else{
        animatechange3(textplace)
        textplace.innerText='Its a draw, the game chose Rock as well.';
        drawc=drawc+1;
        count--;
        draw.innerText= drawc;
        animateChange(draw);
        animateChange2(dra);
    }
    let b=Math.random();
    loq=b;
    po=51;
    count++;
    if (winc-lossc>=1 && count>=5 || lossc-winc>=1 && count>=5 || winc==3 || lossc==3)
        {
            if (winc-lossc>0)
                {
                    textplace.innerText= "The game has ended in a win";
                    nwin.play();
                }
                else if(winc-lossc<0)
                {
                    textplace.innerText= "The game has ended in a loss";
                    losss.play();
                }
            clearInterval(ui);
            rock.removeEventListener('click', rockf);
            paper.removeEventListener('click', paperf);
            scis.removeEventListener('click', scisf);
        }
}

//This is the paper

paper.addEventListener('click', paperf)

function paperf(){
    {
        clearInterval(ui);
        ui=setInterval(timerr, 100); //the interval for the timer function
        click.play();
        if (loq>=0.66667)
        {
        textplace.innerText='You lost, the game chose Scissors!';
        animatechange3(textplace)
        lossc=lossc+1;
        loss.innerText= lossc;
        animateChange(loss);
        animateChange2(los);
        }
        else if (loq<=0.66666 && loq>=0.33334)
        {
            textplace.innerText='You won, the game chose Rock!';
            animatechange3(textplace)
            winc=winc+1;
            wins.innerText= winc;
            animateChange(wins);
            animateChange2(win);
        }
        else{
            textplace.innerText='Its a draw, the game chose Paper as well.';
            animatechange3(textplace)
            drawc=drawc+1;
            count--;
            draw.innerText= drawc;
            animateChange(draw);
            animateChange2(dra);
        }
        let b=Math.random();
        loq=b;
        po=51;
        count++;
        if (winc-lossc>=1 && count>=5 || lossc-winc>=1 && count>=5 || winc==3 || lossc==3)
            {
                if (winc-lossc>0)
                {
                    textplace.innerText= "The game has ended in a win";
                    nwin.play();
                }
                else if(winc-lossc<0)
                {
                    textplace.innerText= "The game has ended in a loss";
                    losss.play();
                }
            clearInterval(ui);
            rock.removeEventListener('click', rockf);
            paper.removeEventListener('click', paperf);
            scis.removeEventListener('click', scisf);
            }
    }
}

//This is the scissors

function scisf() {
    clearInterval(ui);
    ui=setInterval(timerr, 100); //the interval for the timer function
    click.play();
    if (loq>=0.33334 && loq<=0.666665)
    {
    textplace.innerText='You lost, the game chose Rock!';
    animatechange3(textplace)
    lossc=lossc+1;
    loss.innerText= lossc;
    animateChange(loss);
    animateChange2(los);
}
    else if (loq<=0.33333){
        textplace.innerText='You won, the game chose Paper!';
        animatechange3(textplace)
        winc=winc+1;
        wins.innerText= winc;
        animateChange(wins);
        animateChange2(win);
    }
    else{
        textplace.innerText='Its a draw, the game chose Scissors as well.';
        animatechange3(textplace)
        drawc=drawc+1;
        draw.innerText= drawc;
        count--;
        animateChange(draw);
        animateChange2(dra);
    }
    let b=Math.random();
    loq=b;
    po=51;
    count++;
    if (winc-lossc>=1 && count>=5 || lossc-winc>=1 && count>=5 || winc==3 || lossc==3)
    {
        if (winc-lossc>0)
        {
            textplace.innerText= "The game has ended in a win";
            nwin.play();
        }
        else if(winc-lossc<0)
        {
            textplace.innerText= "The game has ended in a loss";
            losss.play();
        }
        clearInterval(ui);
        rock.removeEventListener('click', rockf);
        paper.removeEventListener('click', paperf);
        scis.removeEventListener('click', scisf);
    }
}

scis.addEventListener('click', scisf);

//function for restart

function restarttt() {
    winc=0;
    lossc=0;
    drawc=0;
    count=0;
    textplace.innerText= "The game has been restarted!";
    setInterval(ui, 100);
    po=51;
    draw.innerText=drawc;
    loss.innerText=lossc;
    wins.innerText=winc;
    rock.addEventListener('click', rockf);
    paper.addEventListener('click',paperf);
    scis.addEventListener('click',scisf);
    animateChange(loss);
    animateChange2(los);
    animatechange3(textplace)
    animateChange(draw);
    animateChange2(dra);
    animateChange(wins);
    animateChange2(win);
    nwin.pause();
    nwin.currentTime = 0;
    losss.pause();
    losss.currentTime = 0;
    draww.pause();
    draww.currentTime = 0;
};

restartt.addEventListener('click', restarttt);

// function for timer
function timerr() {
    po--;
    if (po<=0) {
        clearInterval(ui)
        textplace.innerText="Choose Rock, Paper, or Scissors!"
        animatechange3(textplace);
    }
};

function animateChange(element) {
    element.classList.add("animas");
    setTimeout(()=>{
        element.classList.remove("animas");
    }, 500);
} ;

function animateChange2(element) {
    element.classList.add("points");
    setTimeout(()=>{
        element.classList.remove("points");
    }, 500);
}

function animatechange3(element) {
    element.classList.add("anima");
    setTimeout(()=>{
        element.classList.remove("anima");
    }, 500);
}