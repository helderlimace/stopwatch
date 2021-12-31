function convertSecondsToHours(seconds){
    let date = new Date(seconds * 1000);
    const options = {hour12: false, timeZone: 'UTC'};
    date = date.toLocaleTimeString('pt-br', options)
    return date;
}

let clock = document.querySelector('.clock');
let count = 1;
let interval;

function meter(){
    interval = setInterval(function(){
        clock.innerHTML = convertSecondsToHours(count);
        count++;
    }, 1000);
}

document.addEventListener('click', function(e){
    let el = e.target;

    if(el.classList.contains('start')){
        meter();
    }

    if(el.classList.contains('pause')){
        clearInterval(interval);
    }

    if(el.classList.contains('restart')){
        clearInterval(interval);
        clock.innerHTML = '00:00:00';
    }
});



