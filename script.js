const container=document.getElementById('container');
const text=document.getElementById('text');


const totaltime=7500;
const breathetime=(totaltime)*2/5;
const hold=(totaltime)/5;


    breathAnimation();


function breathAnimation(){

    text.innerText='breathe in';
    container.className='container grow';
    setTimeout(()=>{
        text.innerText='hold';
        setTimeout(()=>{
            text.innerText='breathe out';
            container.className='container shrink';
        },hold);
    },breathetime);
    
}

setInterval(breathAnimation,totaltime);