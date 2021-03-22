function relogio(){
    //Declaração das variáveis atribuindo elementos DOM 
    var hora = document.getElementById('horas');
    var minuto = document.getElementById('minutos');
    var segundo = document.getElementById('segundos');

    //Declaração de variáveis atribuindo valores de Horas, minutos e segundos, respectivamente.
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    //Atribuindo os valores de Horas, minutos e segundos respectivamente a elementos do DOM
    hora.innerHTML = h;
    minuto.innerHTML = m;
    segundo.innerHTML = s;
    
}

//Define um intervalo de 1s para cada atualização do relógio
var interval = setInterval(relogio,1000);
