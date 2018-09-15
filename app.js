//////
const myargv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = myargv._[0];
//console.log(argv);


switch (comando) {
    case 'crear':
        let tarea = [];
        tarea = porHacer.crear(myargv.descripcion);
        console.log('Crear por hacer: ', tarea);
        break;
    case 'listar':
        let listado = porHacer.listar();
        for (let tarea of listado) {
            console.log('\n============POR HACER================'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('====================================='.green);
        }
        console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        let status = porHacer.actualizar(myargv.descripcion, myargv.completado);
        console.log('Actualiza el estado de una tarea por hacer: ', status);
        break;
    case 'borrar':
        let status2 = porHacer.borrar(myargv.descripcion);
        console.log('EL elmento fue borrado: ', status2);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}