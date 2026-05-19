"use strict";

let n1 = parseInt(prompt("Introduce un numero 1",0));
let n2 = parseInt(prompt("Introduce un numero 2",0));

/*console.log(n1,n2);
console.log(`la suma es ${n1+n2}`);
console.log(`la resta de ${n1} menos ${n2} es ${n1-n2}`);
console.log(`la multiplicacion de ${n1} por ${n2} es ${n1*n2}`);
console.log(`la division de ${n1} entre ${n2} es ${n1/n2}`);*/


if (n1>n2) {
    console.log(`El numero ${n1} es MAYOR QUE ${n2}`);
}else if(n1===n2) {
    console.log(`LOS NUMEROS SON IGUALES`);
}else {
    console.log(`El numero ${n2} es MAYOR QUE ${n1}`);
}
