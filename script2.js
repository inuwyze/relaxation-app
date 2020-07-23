
const container=document.getElementById('container');
const text=document.getElementById('text');

const totaltime=7500;
const breathetime=totaltime*2/5;
const holdtime=totaltime*1/5;


breatheAnimation();

function breatheAnimation(){
    text.innerText='breathe in';
    container.className='container grow';
    setTimeout(()=>{
        text.innerText='hold';
        setTimeout(()=>{
            text.innerText='breathe out';
            container.className='container shrink'
        },holdtime)
    },breathetime);
}

setInterval(breatheAnimation,totaltime);