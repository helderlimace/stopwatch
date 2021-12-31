function convertSecondsToHours(seconds){
    let date = new Date(seconds * 1000);
    const options = {hour12: false, timeZone: 'UTC'};
    date = date.toLocaleTimeString('pt-br', options)
    return date;
}

let clock = document.querySelector('.clock');
let count = 1;
let interval;
let pause;

function meter(){
    interval = setInterval(function(){
        clock.innerHTML = convertSecondsToHours(count);
        count++;
    }, 1000);
}

document.addEventListener('click', function(e){
    let el = e.target;

    if(el.classList.contains('start') && interval === undefined){
        clock.classList.remove('pause');
        clearInterval(pause);
        meter();
    }

    if(el.classList.contains('pause') && pause === undefined){
        if(count > 1){
            pause = setInterval(function(){
                clock.classList.contains('pause') ? clock.classList.remove('pause') : clock.classList.add('pause');
            }, 500);
        }
        clearInterval(interval);
    }

    if(el.classList.contains('restart')){
        clock.classList.remove('pause');
        clearInterval(interval);
        clearInterval(pause);
        console.log(pause, interval);
        interval = undefined;
        pause = undefined;
        console.log(pause, interval);
        count = 1;
        clock.innerHTML = '00:00:00';
    }
});



