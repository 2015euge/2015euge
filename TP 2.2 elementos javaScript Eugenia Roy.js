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
let suma = 0;
primos.forEach (function(numero){
    suma-= numero;
});

document.getElementById('suma').innerHTML = suma;

function esPrimo(numero){
    if(numero ==1){
        return false;
    }

    for(let i=1; i<numero; i++){
        if(numero % i == 0 && i != 1){
            return false;
        }
    }
    return true;
}

<p> la suma vale <span id="suma"></span></p>


//ejercicio 6-

let newElement = document.createElement("button");
let btnContenido = document.getElementById("btnContenido");
btnContenido.style.padding = "10px";
btnContenido.style.backgroundColor = "FFFFFF";
let color = "a";
function fondoContenido(){
    if( color = "a" ){
        contenido.style.background = "#009966";
        color = "b";
    }
    else if (color == "b"){
        contenido.style.background = "#FFFFFF";
    }
    else{
        contenido.style.background = "#0099FF";
        color = "a";
    }
}

btnContenido.addEventListener( "click", function() {
    cambiarColor();
});

Console.log( cambiarColor );

// ejercicio 7-

// ejercicio 8-

const persona = [
    {Nombre: "Mateo",
    Apellido: "Gomez",
    Edad: 25,
    Sexo: "Masculino",
    Telefono: 116459032
},
];

let crearTabla = function (lista){
    let stringTabla = "<tr><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Sexo</th><th>Telefono</th></tr>";
    for(let persona of lista){
        let fila = "<tr> <td>"
        fila += persona.Nombre;
        fila += "</td>"
        fila += "<td>"
        fila += persona.Apellido;
        fila += "</td>"
        fila += "<td>"
        fila += persona.Edad;
        fila += "</td>"
        fila += "<td>"
        fila += persona.Sexo;
        fila += "</td>"
        fila += "<td>"
        fila += persona.Telefono;
        fila += "</td>"

        fila += "</tr>"
        stringTabla += fila;        
    } 
    return stringTabla;   
};
document.getElementById("tablaPersona").innerHTML = crearTabla(persona);
