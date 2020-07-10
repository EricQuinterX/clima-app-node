const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad poara obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLon(argv.direccion)
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))

// clima.getTemperature(40, -77)
//     .then( data => console.log(`Clima: ${data} °C`))
//     .catch(console.log)

const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getTemperature(coords.latitud, coords.longitud);
        return `El clima de ${direccion} es de ${temp} °C`;
    } catch (e) {
        return `No se pudo obtener el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);