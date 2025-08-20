const Start=document.getElementById("Start")
const Stop=document.getElementById("Stop")
const Reset=document.getElementById("Reset")
const timer=document.getElementById("timer")
const catpopup=document.getElementById("cat-popup");
let timeleft=1500;
let interval;

const updateTimer=() => {
    const minutes= Math.floor(timeleft/60);
    const seconds= timeleft % 60;

    timer.innerHTML= `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}` ;
}

const showCatPopup=() =>{
    catpopup.style.display="block";
    setTimeout(()=>{
        catpopup.style.display="none";
    },3000);
};



const startTimer=()=> {
    interval=setInterval(  () => {
        timeleft--;
        updateTimer();

        if(timeleft == 0){
            clearInterval(interval);
            showCatPopup();
            timeleft=1500;
            updateTimer();
        }
    },1000);
}

const stopTimer=() => clearInterval(interval);

const resetTimer=() => {
    clearInterval(interval);
    timeleft=1500;
    updateTimer();
}
Start.addEventListener("click",startTimer);
Stop.addEventListener("click",stopTimer);
Reset.addEventListener("click",resetTimer);