const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const form = document.querySelector('#form');





form.addEventListener('submit', sumarInputs);
input1.addEventListener('keyup', keyUp );

function sumarInputs(ev){
    ev.preventDefault()
    
    const sumaInput = parseInt(input1.value) + parseInt(input2.value);

    result.innerText ='Resultado: ' + sumaInput;
}

function keyUp(){
    console.log('El primer número es' + input1.value)
}

