/*let person= parseInt(prompt("Cuantas personas hay en el local?"));
const patatas= person/5;
const egg= patatas*5;
const onion = patatas*0.3;

console.log(`Hay ${person} personas en el local, el sumistro de ingredientes debe ser el siguiente
    ${patatas}kg de patatas.
    ${egg} huevos.
    ${onion}kg cebollas.`);

------------------------------EJERCICIO 2--------------------------

let hour= parseFloat(prompt("Cuantas horas trabajaste?"));
let tarifa= parseFloat(prompt("Cual es tu tarifa por hora trabajada?"));

console.log(`Dada las ${hour} horas trabajadas y la tarifa ${tarifa}$ acordada por hora, este trabajador deberia percibir un ingreso de ${hour*tarifa}$ TASA BCV`);

------------------------------EJERCICIO 3--------------------------


let price= parseFloat(prompt("Cual es el precio del Producto?"));
let discount= parseFloat(prompt("Que descuento tiene el Producto?"));
let cambio= parseFloat(prompt("Con cuanto paga??????"));
const show = (price*discount)/100;

function app(a,b) {
    document.getElementById("price").innerHTML=`El producto tiene un precio de ${a}$.`;
    document.getElementById("discount").innerHTML=`El descuento para este producto es de ${b}%.`;
    document.getElementById("show").innerHTML=`El monto a descontar seria: ${show}$.`;
    document.getElementById("total").innerHTML=`El monto total con descuento seria: ${a-show}$ Tasa BCV.`;
    document.getElementById("cambio").innerHTML=`Su cambio seria ${cambio-(a-show)}`;
};

app(price,discount);

*/


let hour= parseInt(prompt("Cuantas horas paso usando el sistema?"));
let minute= parseInt(prompt("Cuantos minutos paso usando el sistema?"));

minute= minute*60;
hour= (hour*60)*60;


console.log(`Usted Uso el sistema ${hour+minute} segundos compa.`)