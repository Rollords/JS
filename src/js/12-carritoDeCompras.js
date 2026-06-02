const carrito = [];

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 500,
};
const producto2 = {
    nombre: 'Celular',
    precio: 500,
};
const producto3 = {
    nombre: 'Iphone',
    precio: 600,
};

const add = (...a) => carrito.push(...a);
add(producto,producto2,producto3);

console.log(carrito);

const producto4 = {
    nombre: 'Teclado',
    precio: 50,
};

carrito.unshift(producto4);

console.log(carrito)
