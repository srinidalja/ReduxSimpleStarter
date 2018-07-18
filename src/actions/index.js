import axios from 'axios';

const API_KEY = 'fa94a21d2fe9df9c9fb0f1ca838aad89';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url= `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WATHER,
        payload: request
    };
}