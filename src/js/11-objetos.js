const curso = {
    nombre: "programacion",
    duracion: "40 horas",

    disponible: true,
    informacion: {
        modulos:15,
        modalidad: {
            presencial:true,
            online:true,
        },
    },
};

console.log(curso);
console.log(curso.duracion);
console.log(curso.informacion.modalidad.presencial);

const {duracion, disponible,informacion, informacion:{modulos,modalidad,modalidad:{presencial,online}}} = curso;
console.log(disponible);
console.log(`la modalidad es presencial: ${presencial}`);


const phone = {
    marca: 'Iphone',
    pantalla: '16pulgadas',
    caracteristicas: {
        almancenamiento: {
        ram: '16gb',
        rom: '256gb',
        },
        resistencia: 'ips68',
    },
    disponibles:'50',
    precio:500,
}

const {marca,pantalla,disponibles,caracteristicas,precio,caracteristicas:{resistencia,almancenamiento,almancenamiento:{ram,rom}}} = phone;

console.log(`Tenemos ${disponibles} telefonos marca ${marca}, con pantalla de ${pantalla}, version de ${rom} de almacenamiento y ${ram} de memoria ram, cuenta con resistencia a salpicaduras ${resistencia}... ${precio}$ precio en divisa xD`);

const hospital = {
    nombre:'Centro medico Maracay',
    medicos: {
        rayosX: {
            encargado: 'Dr. Javier',
            experiencia: '5 años',
            turno: 'Diurno',
        },
        prenatal: {
            encargado0: 'Dra. Elisabeth',
            experiencia0: '9 años',
            turno0: 'Nocturno',
        },
        consultaGeneral: {
            encargado1: 'Dr. Alberto',
            experiencia1: '4 años',
            turno1: 'Diurno',
        },
        cirugia: {
            encargado2: 'Dra. Anna',
            experiencia2: '15 años',
            turno2: 'Diurno',
        },
    },
    pagoConsulta: '40$',
    horario: '24 horas',
    estacionamiento: 'estacionamiento',    
}
const {nombre,medicos,medicos:{rayosX:{encargado,experiencia,turno},prenatal:{encargado0,experiencia0,turno0},consultaGeneral:{encargado1,experiencia1,turno1},cirugia:{encargado2,experiencia2,turno2}}, pagoConsulta,horario,estacionamiento} = hospital;

console.log(`En el ${nombre}, contamos con un excelente equipo laboral para brindar el merjor servicio las ${horario}, tenemos ${estacionamiento} activo para nuestros clientes... Nuestos especialistan son:

    Area de Rayos X: ${encargado} cuenta con una experiencia de ${experiencia}, atiente en el turno ${turno}
    
    Area Prenatal: ${encargado0} cuenta con una experiencia de ${experiencia0}, atiente en el turno ${turno0}
    
    Area Consultoria General: ${encargado1} cuenta con una experiencia de ${experiencia1}, atiente en el turno ${turno1}
    
    Area Cirugia General: ${encargado2} cuenta con una experiencia de ${experiencia2}, atiente en el turno ${turno2}
    
    TODAS LAS CONSULTAS TIENEN UN COSTO DE ${pagoConsulta} TASA BCV`);
