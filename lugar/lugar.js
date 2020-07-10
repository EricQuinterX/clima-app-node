const axios = require('axios');

const ApiKey = '3766a35c45c88d28b7071811447c704b';

const getLugarLatLon = async (direccion) => {
    
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(direccion)}&APPID=${ApiKey}`
    });
    const resp = await instance.get();
    if (resp.cod == "404"){
        throw new Error(`No hay resultados para ${direccion}`);
    }
    return {
        direccion: resp.data.name,
        latitud: resp.data.coord.lat,
        longitud: resp.data.coord.lon
    }
}

module.exports = {
    getLugarLatLon
}