let controlador = 0;

function aciona(){
    if(controlador == 0){
        document.getElementById("vermelho").style.backgroundColor='red';
        document.getElementById("amarelo").style.backgroundColor='#3E3E3E';
        document.getElementById("verde").style.backgroundColor='#3E3E3E';
        controlador++;
        setTimeout(aciona,6000);
    }
    else if(controlador == 2){
        document.getElementById("amarelo").style.backgroundColor='yellow';
        document.getElementById("vermelho").style.backgroundColor='#3E3E3E';
        document.getElementById("verde").style.backgroundColor='#3E3E3E';
        controlador = 0;
        setTimeout(aciona,3000);
    }
    else if(controlador == 1){
        document.getElementById("verde").style.backgroundColor='green';
        document.getElementById("vermelho").style.backgroundColor='#3E3E3E';
        document.getElementById("amarelo").style.backgroundColor='#3E3E3E';
        controlador++;
        setTimeout(aciona,6000);
    }
}
