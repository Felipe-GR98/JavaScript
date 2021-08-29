let numeros = Number(prompt('sortear um numero de 1 até : '));
function sorteio(){
    let numerosSorteados = Math.round(Math.random()* numeros);
    document.getElementById('sorteado').innerHTML = (`Seu numero sorteado é : ${numerosSorteados}`);
}