import axios from 'axios';

const API_KEY = 'a3cb99e4a46d3c130772308d454ee522';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER ='FETCH_WEATHER';

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); //returns a promise
  

  return {   //action
    type:FETCH_WEATHER ,
    payload:request     //we pass the promise to actions payload
  };

}
