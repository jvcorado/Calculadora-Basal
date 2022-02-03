let peso = document.querySelector('#inputPeso')
let idade = document.querySelector('#inputIdade')
let resultado = document.querySelector('span')
let homem = document.querySelector('#homemCheckBox');
let mulher = document.querySelector('#mulherCheckBox');
let opcao = null;
homem == 1;
mulher ==2; 


function calculoHomem(){

    if(idade.value <= 18 ){
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

function calculoMulher(){

    if(idade.value <= 18 ){
        resultado.innerHTML = (13.384 * parseInt(peso.value) + 692.6)
    }
    else if(parseInt(idade.value)  <=30){
        resultado.innerHTML = (14.818 * parseInt(peso.value) + 486.6)
    }
    else if(parseInt(idade.value)  <=60){
        resultado.innerHTML = (8.126 * parseInt(peso.value) + 845.6)
    }
    else if(parseInt(idade.value)  >=61){
        resultado.innerHTML = (9.082 * parseInt(peso.value) + 658.5)
    }
   
}



