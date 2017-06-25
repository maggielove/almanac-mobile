import axios from 'axios';
import * as Config from '../../.config.json';

let WEATHER_API_KEY = Config.weatherKey;
const WEATHER_API_PATH = 'http://api.wunderground.com/api/';
//TODO: change to use geolocation
const FORECAST_QUERY = '/forecast/q/NY/New_York.json';

const hitWeatherApi = (key) => new Promise((resolve, reject) => {
    return axios.get(WEATHER_API_PATH + key + FORECAST_QUERY)
        .then((res) => {
            resolve(res);
        }).catch(() => {
            reject({ message: 'Hmm, something went wrong.' });
        })
});

export const getForecast = () => hitWeatherApi(WEATHER_API_KEY);
