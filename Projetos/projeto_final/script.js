//assecibilidade
font = 16;
function diminuir() {
    font --;
    document.body.style.fontSize = font +"px";
}
function aumentar() {
    font ++;
    document.body.style.fontSize = font +"px";
}

//darkmode
    let active = false;

    const dark = () => {
        active = active ? false : true;
        const color = [...document.getElementsByClassName('darkmode')];
        color.map((val, i) => {
            if(active){
                color[0].style.cssText = 'background-color: #0d1f34; color: #FFF;border-bottom:3px solid #ADF4FB;'
                color[1].style.cssText = 'background-color: #0f233a; color: #FFF;border-bottom:3px solid #ADF4FB;'
                color[2].style.cssText = 'background-color: #000019; color: #FFF;border-bottom:3px solid #ADF4FB;'
                color[3].style.cssText = 'background-color: #0f233a; color: #FFF;border-bottom:3px solid #ADF4FB;'
                color[4].style.cssText = 'background-color: #0d1f34; color: #FFF;border-bottom:3px solid #ADF4FB;'
            }
            else color[i].attributeStyleMap.clear()
        })
    }

//conversão
        const convert = () => {
        let rel = Number(document.getElementById('real').value);
        let dol = document.getElementById('moedas').value;
        if(dol == 'dolar'){
            rel = (0.20) * rel;
            Number(document.getElementById('result').value = rel.toFixed(2) + ' $');
        }
        else if(dol == 'euro'){
            rel = (0.17) * rel;
            Number(document.getElementById('result').value = rel.toFixed(2) +' €');
        }
        else document.getElementById('result').value ='Escolha uma moeda para converter ';
    }

    //conversão temperatura
        const convertg = () => {
        let c = Number(document.getElementById('graus').value);
        let val = document.getElementById('grau').value;
        if(val == 'fahrenheit'){
            c = (c * 1.8) + 32;
            Number(document.getElementById('result2').value = c.toFixed(2) +' °F');
        }
        else if(val == 'kelvin'){
            c = c + 273.15;
            Number(document.getElementById('result2').value = c.toFixed(2) +' K');
        }
        else document.getElementById('result2').value ='Escolha uma temperatura para converter ';
    }
    
   // calculadora;
//    console.log(document.querySelector('.soma').value)
//     const calcular = () =>{
//         let  a = Number(document.getElementById('numA').value);
//         let  b = Number(document.getElementById('numB').value);
        
//     }

    const calcular = (e) =>{
        let f;
        let  a = Number(document.getElementById('numA').value)
        let  b = Number(document.getElementById('numB').value)
        if(e.innerHTML == "+" ) f = a + b
        if(e.innerHTML == "-" ) f = a - b
        if(e.innerHTML == "*" ) f = a * b
        if(e.innerHTML == "/" ) f = a / b
        if(e.innerHTML == "%" ) f = a % b
        if(e.innerHTML == "a²" ) f = Math.pow(a,2)
        if(e.innerHTML == "b²" ) f = Math.pow(b,2)
        if(e.innerHTML == "ab" ) f = Math.pow(a,b)
        document.getElementById('resultado').value = f;
    }
    