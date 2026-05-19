/*function suma(n1,n2=3) {
console.log(`La suma de ${n1} mas ${n2} es igual a ${n1+n2}`);
}

suma(15,25);*/

function porConsola(n1,n2) {
    console.log(`La suma es ${n1 + n2}`);
    console.log(`La resta es ${n1-n2}`);
    console.log(`La multiplicacion es ${n1*n2}`);
    console.log(`La division es ${n1/n2}`);
}

//porConsola(10,10);

let suma="";
let multi="";
let resta="";
let divi="";


function porPantalla(n1,n2) {
    suma+= `la suma de dos numeros es: ${n1+n2}`;
    document.getElementById("suma").innerHTML=suma;

    multi+= `la multiplicacion de dos numeros es: ${n1*n2}`;
    document.getElementById("multi").innerHTML=multi;

    divi+= `la division de dos numeros es: ${n1/n2}`;
    document.getElementById("divi").innerHTML=divi;

    resta+= `la resta de dos numeros es: ${n1-n2}`;
    document.getElementById("resta").innerHTML=resta;
}

//porPantalla(10,10);

function calculadora(n1,n2, mostrar = false) {
    if (mostrar == false) {
        porConsola(n1,n2);
    }else {
        porPantalla(n1,n2);
    }return true;
}
calculadora(5,10,true);

function cal(n1,n2,mostrar=false) {mostrar==false ? porConsola(n1,n2) : porPantalla(n1.n2)};

cal(15,15)

