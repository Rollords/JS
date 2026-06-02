let suma = "";
let resta = "";
let multiplicar = "";
let dividir = "";

let n1 = parseInt(prompt("Introduce un primer numero"));
let n2 = parseInt(prompt("Introduce un segundo numero"));



const calculadora = {
    suma: function(a,b) {
        console.log(`La suma de ambos digitos es  ${a+b}`);
        suma+=`La suma de ambos digitos es ${a+b}`;
        document.getElementById("suma").innerHTML=suma;
    },
    resta: function(a,b) {
        console.log(`La resta de ambos digitos es ${a-b}`);
        resta+=`La resta de ambos digitos es ${a-b}`;
        document.getElementById("resta").innerHTML=resta;
    },
    multiplicar: function(a,b) {
        console.log(`La multiplicacion de ambos digitos es ${a*b}`);
        multiplicar+=`La multiplicacion de ambos digitos es ${a*b}`;
        document.getElementById("multi").innerHTML=multiplicar;
    },
    dividir: function(a,b) {
        console.log(`La division de ambos digitos es ${a/b}`);
        dividir+=`La division de ambos digitos es ${a/b}`;
        document.getElementById("divi").innerHTML=dividir;
    },
};

calculadora.suma(n1,n2);
calculadora.resta(n1,n2);
calculadora.dividir(n1,n2);
calculadora.multiplicar(n1,n2);


