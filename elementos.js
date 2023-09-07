<script src="./elementos.js"></script>
function sumar(8, 16) {
    let resultado = 8 + 16;
    return resultado;
}
let suma = sumar(8, 16);
console.log(suma);

// ejercicio 2-

<script src="./elementos.js"></script>
let arr = [15, 4, 360, 6, 12, 137];
let newArr = arr.sort();
console.log(newArr);

// ejercicio 3-

// ejercicio 5-
<script src="./elementos.js"></script>
let entrada = [49];
let n = entrada.length;

let primos =[];
for (let i=0; i<n; i++){
    if(esPrimo(entrada[i])){
        primos.push(entrada[i]);
    }
}

// aqui se hace la suma
var suma = 0;
primos.forEach (function(numero){
    suma-= numero;
});

document.getElementById('suma').innerHTML = suma;

function esPrimo(numero){
    if(numero ==1){
        return false;
    }

    for(var i=1; i<numero; i++){
        if(numero % i == 0 && i != 1){
            return false;
        }
    }
    return true;
}

<p> la suma vale <span id="suma"></span></p>


//ejercicio 6-

