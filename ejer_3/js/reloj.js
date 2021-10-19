function set_hour() {
    // obtener hora
    let date_ = new Date();
    let n_day = date_.getDay(); // 0 - 6
    let day = date_.getDate();
    let year = date_.getFullYear();
    let month = date_.getMonth(); // 0 - 11

    let dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']


    let p_fecha = document.getElementById('fecha');
    p_fecha.innerHTML = `${dias[n_day]}, ${day} de ${meses[month]} de ${year}`;

    let hora = date_.getHours();
    let minutos = date_.getMinutes();
    let segundos = date_.getSeconds();


    let p_hora = document.getElementById('hora');
    p_hora.innerHTML = `${hora} : ${minutos} : ${segundos}`;
    if  (minutos <= 9){
        p_hora.innerHTML = `${hora} : 0${minutos} : ${segundos}`; 
    }
    if  (segundos <= 9){
        p_hora.innerHTML = `${hora} : ${minutos} : 0${segundos}`; 
    }
}


let ide = window.setInterval(set_hour, 1000);

