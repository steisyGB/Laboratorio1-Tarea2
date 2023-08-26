//Calcular la media y la mediana de un conjunto de valores ingresado por el usuario. Para realizar el cálculo de la media y la mediana no puede usar for. Solamente puede usarlo para el ingreso de datos del usuario. Debe crear una función que reciba como parámetro el array y retorne el objeto esperado.//

let sumatoria = [];
let contador = 0;
for (let i = 1; i <= 3; i++){
    let data = prompt("ingrese solo valores numericos")
    console.log(typeof data);
    let valorNumerico = parseFloat(data);
    if (isNaN(data)) continue
    sumatoria.push(valorNumerico)
    contador++
}

function media(numeros) {
    let total = 0;
    numeros.forEach((numero) => {
        total += numero;
    });
    console.log(`La media es: ${total / 3}`);
}

function mediana(numeros){
    const orden = numeros.sort((a, b) => a - b);
    let media = Math.floor(orden.length / 2);

    if (orden.length % 2 === 1)
        console.log(`La mediana es: ${orden[media]}`);
    else
        console.log(`La mediana es: ${(orden[media - 1] + orden[media]) / 2.0}`);
}


media(sumatoria);
mediana(sumatoria);
