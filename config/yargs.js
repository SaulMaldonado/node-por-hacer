//////////
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('listar', 'Lista las tareas por hacer')
    .command('borrar', 'Borra un elemento', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}