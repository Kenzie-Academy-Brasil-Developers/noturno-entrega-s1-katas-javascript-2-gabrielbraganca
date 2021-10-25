// comece a criar a sua função add na linha abaixo
function add(numero1,numero2){
    return numero1 + numero2
}
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo

function multiply(numero1, numero2){
  let output = 0;

  for (let contador = 0; contador < numero2; contador++ ){
            output = add(output, numero1)
   }
   return output
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power (num1, num2){
let output = num1;

for (let contador = 1 ; contador < num2; contador++){
           output = multiply(output, num1)

}
return output
}

// descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(num1){
let output = num1;

for(let contador = num1 - 1; contador > 0; contador--){
          output = multiply(contador, output)

}
return output
}

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
