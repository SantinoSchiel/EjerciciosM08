/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

    // Esta función recibe un nombre (string).
    // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
    // [Ejemplo]: "mario" ----> "Mario".
    // Tu código:

function mayuscula(nombre) {
    var palabraSeparada = nombre.split('');

    var primerLetra = palabraSeparada[0].toUpperCase();

    palabraSeparada.shift();

    palabraSeparada.unshift(primerLetra);

    var palabraAgrupada = palabraSeparada.join('');

    return palabraAgrupada;
 }
 
    // Invoca/ejecuta el callback `cb`.
    // [NOTA]: no debes reotrnar nada.
    // Tu código:

 function invocarCallback(cb) {
    cb();
 }
 
    // En este ejercicio recibirás dos números y un callback.
    // El callback realiza una operación matemática, por lo que necesita de los dos números.
    // Retorna el resultado del callback pasándole como parámetros los números.
    // Tu código:

 function operacionMatematica(num1, num2, cb) {
    return cb(num1,num2);
 }
 
    // Recibes un arreglo de números y un callback.
    // Suma todos los números del arreglo.
    // Este resultado debes pasárselo como argumento al callback recibido.
    // [NOTA]: no debes reotrnar nada.
    // Tu código:

 function sumarArray(arrayOfNumbers, cb) {
    suma = 0;
    for(let i = 0;i<arrayOfNumbers.length;i++){
        var suma = suma + arrayOfNumbers[i];
    }
    cb(suma);
 }
 
    // Recibes un arreglo y un callback.
    // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
    // Debes pasarle el elemento como argumento al callback.
    // Tu código:

 function forEach(array, cb) {
    array.forEach((num) => {
        cb(num)
    });
 }
 
    // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
    // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
    // Retorna el nuevo arreglo.
    // Tu código:

 function map(array, cb) {
    nuevoArreglo = [];
    for(let i = 0; i < array.length; i++){
        res = cb(array[i]);
        nuevoArreglo.push(res);
    }
    return nuevoArreglo;
 }
 
    // Debes identificar todos los elementos del arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:

 function filter(arrayOfStrings) {
    nuevoArreglo = [];

    for(let i = 0; i < arrayOfStrings.length; i++){
        stngSplt = arrayOfStrings[i].split('');

        if(stngSplt[0] === 'a'){
            nuevoArreglo.push(arrayOfStrings[i])
        }
    }
    return nuevoArreglo;
 }
 
 /*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
 module.exports = {
    mayuscula,
    invocarCallback,
    operacionMatematica,
    sumarArray,
    forEach,
    map,
    filter,
 };

 console.log(mayuscula('santino'));