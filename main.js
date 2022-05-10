'use strict';
{
    const timer = document.querySelector('#timer');
    const start = document.querySelector('#start');
    const stop = document.querySelector('#stop');
    const reset = document.querySelector('#reset');

    let startTime;
    let timeoutId;

    let progressTime =0;

    function countUp(){
        

        const d = new Date(Date.now() - startTime + progressTime);
        
        const m = String(d.getMinutes()).padStart(2, '0');

        const s = String(d.getSeconds()).padStart(2, '0');

        const ms = String(d.getMilliseconds()).padStart(3,'0');
        timer.textContent = `${m}:${s}.${ms}`;


        timeoutId =setTimeout(()=>{
            countUp();
        },10);
    }

    function setButtonInitial(){
        start.classList.remove('inactive');
        stop.classList.add('inactive');
        reset.classList.add('inactive');
    }
    function setButtonRunning(){
        start.classList.add('inactive');
        stop.classList.remove('inactive');
        reset.classList.add('inactive');
    }
    function setButtonStopped(){
        start.classList.remove('inactive');
        stop.classList.add('inactive');
        reset.classList.remove('inactive');
    }

    setButtonInitial();

    start.addEventListener('click',()=>{
        if(start.classList.contains('inactive')===true){
            return;
        }
        startTime = Date.now();
        countUp();
        setButtonRunning();
        
    });


    stop.addEventListener('click',()=>{
        if(stop.classList.contains('inactive')===true){
            return;
        }
        clearTimeout(timeoutId);
        progressTime += Date.now() - startTime;
        setButtonStopped();
    });

    reset.addEventListener('click',()=>{
        if(reset.classList.contains('inactive')===true){
            return;
        }
        timer.textContent = '00:00:000';
        progressTime = 0;
        setButtonInitial();
    });

}