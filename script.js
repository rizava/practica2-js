/*  1. El estudiante debe generar una salida igual a la de la imagen
cuadrado
Restricciones: 

A. debe usar ciclos
B. en caso de usar condiciones solo puede utilizar 1 if else
C.Solo esta habilitado para usar 2 console.log
*/

for(let i = 0; i < 11; i++){
    console.log(i === 0 || i === 10 ? `**************` : `*            *`)
}


for (let i = 1 ; i <= 6 ;++i){
    let resultado = '';
    for (let j = 1 ; j <= i ;++j){
    resultado += '* ';   
    }
    
   console.log(resultado)
       
}               

/*2.  Ejercicio TzStriker consiste en tomar N numeros y rrecorrelos con un iterador, en este ejercicio deben imprimir segun la condicion.

A. En caso de ser multiplo de 3 imprime Tz
B. En caso de ser Multiplo de 5 imprime Striker
C. En caso de ser multiplo de 3 y 5 imprime TzStriker
D.En caso de no ser ninguno, imprime el numero

Restricciones

a. Debe usarse un ciclo for
b. Debe usuarse maximo 3 condiciones
c. el numero de numeros debe ser variable
Imagen
Recorrerlos*/

let num = 100

let mul1 = 4
let mul2 = 8

for(let i = 0; i <= num; i++){
    if (i % (mul1 * mul2) === 0) console.log('TzStriker')
    else if (i % 3 === 0) console.log('Tz') //
    else if (i % 5 === 0) console.log('Striker') //
    else console.log(i)
}

/*
3. Dado el numero deben imprimir la tabla de multiplicar del 1 al 10

Ejemplo tabla del 5

5 X 1  = RESULTADO
5 X 2  = RESULTADO
5 X 3 = RESULTADO
.....
5 X 10  = RESULTADO
Ejercicios Avanzados
Ejercicios Avanzados:
*/

let numero = 9
 for(let i = 1 ; i <= 10 ; i++){
     console.log(`${numero} * ${i} = ${numero * i}`)
 }












