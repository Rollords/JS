const accion= {
    avanzar:(a)=>console.log(`El carro esta ${a}`),
    detener:(a)=>console.log(`El carro esta ${a}`),
    girar:(a)=>console.log(`El carro esta ${a}`),
    apagado:(a)=>console.log(`El carro esta ${a}`),
    encendido:(a)=>console.log(`El carro esta ${a}`)};

accion.encendido("Encendido");
accion.avanzar("Avanzando");
accion.girar("Girando");
accion.detener("Detenido");
accion.apagado("Apagado");
