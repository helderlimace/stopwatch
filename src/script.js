function cron(){

    function converterSegundosParaHora(seg){
        let hora = new Date(seg * 1000);
        const options = {hour12:false, timeZone: 'UTC'};
        hora = hora.toLocaleTimeString('pt-br', options);
        return hora;
    }

    let relogio = document.querySelector('.clock');
    relogio.innerHTML = '00:00:00';

    let count = 1;
    let time;

    function cronometro(){
        
        time = setInterval(() => {
            relogio.innerHTML = converterSegundosParaHora(count);
            count++;
        }, 1000);
    }

    document.addEventListener('click', function(e){
        let el = e.target;

        if(el.classList.contains('iniciar')){
            cronometro();
        }

        if(el.classList.contains('pausar')){
            clearInterval(time);
        }

        if(el.classList.contains('reiniciar')){
            clearInterval(time);
            count = 1;
            relogio.innerHTML = '00:00:00';
        }
    });

    converterSegundosParaHora();

}

cron();