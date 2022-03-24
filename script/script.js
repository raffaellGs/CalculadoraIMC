var btn = document.getElementById('btn')

function resultImc(){
    var name = document.getElementById('name').value;
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var result =document.getElementById('result')

    
    if(name !== "" && height !== "" && weight !== ""){
        const valorIMC =  ( weight / (height * height)).toFixed(1);

        let classificação = '';

        if(valorIMC <= 18.5){
            classificação = 'Abaixo do Peso'
        }else if(valorIMC <= 25){
            classificação = 'Seu peso está ideal Parabéns!!!'
        }else if(valorIMC <= 30){
            classificação = 'Esta um pouco acimda do Peso'
        }else if (valorIMC <= 40){
            classificação = 'Seu grau de obesidade é I'
        }else if (valorIMC <= 45){
            classificação = 'Seu grau de obesidade é II'
        }else if (valorIMC <= 50){
            classificação = 'Seu grau de obesidade é III'
        }else{
            classificação = 'Você esta muito acima do peso Cuidado!!!'
        }

        result.innerHTML = `Olá ${name} seu IMC é de ${valorIMC} e está ${classificação}`

    }else{
        result.innerHTML = 'Todos os campos são obrigatórios'
    }

}

btn.addEventListener('click', resultImc)