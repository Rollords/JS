function listadoFrutas(fruta1,fruta2,...todasfrutas){
    console.log(`La fruta 1 es ${fruta1}`);
    console.log(`La fruta 2 es ${fruta2}`);
    console.log(todasfrutas);
}

listadoFrutas(`fresa`,`cambur`,`patilla`,`durazno`,`melon`,`guayaba`);

let frutas2 =[`mango`,`uvas`,`kiwi`];

listadoFrutas(...frutas2,`fresa`,`cambur`,`patilla`);


function listadoMarcas (marca1,marca2,...marcas) {
    console.log(marca1)
    console.log(marca2)
    console.log(marcas);

}
listadoMarcas(`Ford`,`Toyota`,`Fiat`,`Audi`);


let carrosAltaGama =[`Paganni`,`Porsche`,`Lamborghini`,`Ferrari`];

listadoMarcas(...carrosAltaGama,`toyota`,`Ford`,`Donfeng`)