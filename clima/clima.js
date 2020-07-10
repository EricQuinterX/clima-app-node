const axios = require('axios');
const endpoint = 'https://api.openweathermap.org/data/2.5/weather';
const ApiKey = '3766a35c45c88d28b7071811447c704b';

const getTemperature = async (lat, lon) => {

    const resp = await axios.get(`${endpoint}?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getTemperature
}

