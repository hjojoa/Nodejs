const {obtenerPromedio,argv} = require('./datos.js');

console.log(argv);
if(argv._[0] == 'promedio'){
    console.log('EL promedio de '+argv.n+ ' es ');
}else{
    console.log(' promedio no calculado');
}