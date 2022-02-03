let peso = document.querySelector('#inputPeso')
let idade = document.querySelector('#inputIdade')
let resultado = document.querySelector('span')

function somar(){
    resultado.innerHTML = parseInt(peso.value) + parseInt(idade.value);
}

function calculo(){

    if(idade.value <= 18){
        resultado.innerHTML = (17.686 * parseInt(peso.value) + 658.2)
    }
    else if(parseInt(idade.value)  <=30){
        resultado.innerHTML = (15.057 * parseInt(peso.value) + 692.2)
    }
    else if(parseInt(idade.value)  <=60){
        resultado.innerHTML = (11.472 * parseInt(peso.value) + 873.1)
    }
    else if(parseInt(idade.value)  >=61){
        resultado.innerHTML = (11.711 * parseInt(peso.value) + 587.7)
    }
   
}


