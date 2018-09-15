//////
const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const guardDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, err => {
        if (err)
            console.log("an error ocurred");
        else
            console.log("SAVED!");
    });
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardDB();

    return porHacer;
}

const actualizar = (descripcion, completado) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(val => {
        return val.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardDB();
        return true;
    } else
        return false;
}

const listar = () => {
    cargarDB();
    return listadoPorHacer;
}

const borrar = (descripcion) => {
    cargarDB();

    let deleteThisIndex = listadoPorHacer.findIndex(val => {
        return val.descripcion === descripcion;
    })

    if (deleteThisIndex == -1) {
        return false
    }

    let newBd = [];
    let newIndex = 0;
    for (let i = 0; i < listadoPorHacer.length; i++) {
        if (i != deleteThisIndex) {
            newBd[newIndex] = listadoPorHacer[i];
            newIndex++
        }
    }

    listadoPorHacer = newBd;
    guardDB();
    return true;

}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}