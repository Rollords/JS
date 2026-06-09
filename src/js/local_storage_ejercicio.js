const car = {
    marca: "Audi",
    velocidad: "300Kmh",
    puertas: "2 Puertas",
    modelo: "R8",
};

localStorage.setItem(`Marca`, `${car.marca}`);
localStorage.setItem(`Velocidad`, `${car.velocidad}`);
localStorage.setItem(`Num Puertas`, `${car.puertas}`);
localStorage.setItem(`Modelo`, `${car.modelo}`);

localStorage.removeItem("Modelo");

document.querySelector("#marca").innerHTML= localStorage.getItem("Marca");
localStorage.clear();

localStorage.setItem("Auto", JSON.stringify(car));

const carJs = JSON.parse(localStorage.getItem("Auto"));
console.log(carJs);

document.querySelector("#text").append(`${carJs.marca} ${carJs.modelo} ${carJs.velocidad} ${carJs.puertas}`);

