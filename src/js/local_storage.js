"use strict";

if (typeof Storage !== "undefined") {
    console.log("Local Storage esta Disponible");
} else {
    console.log("Local Storage NO esta Disponible");
}

localStorage.setItem("Titulo", "Curso de PHP");

localStorage.getItem("Titulo");

console.log(localStorage.getItem("Titulo"));

document.querySelector("#curso").innerHTML=localStorage.getItem("Titulo");

let user = {
    nombre: "Jose Melendez",
    email: "Rollordstv@gmail.com",
    web: "NO TENGO xd",
};
localStorage.setItem("user", JSON.stringify(user));

let userJs = JSON.parse(localStorage.getItem("user"));
console.log(userJs);

document.querySelector("#alumno").append(` ${userJs.nombre}  ${userJs.email}`);