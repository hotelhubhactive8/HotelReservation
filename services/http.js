import axios from 'axios';
// import { REACT_APP_RAPIDAPI_KEY, REACT_APP_RAPIDAPI_HOST } from '@env';

// console.log(REACT_APP_RAPIDAPI_KEY, REACT_APP_RAPIDAPI_HOST);

const http = axios.create({
  baseURL: 'https://hotels4.p.rapidapi.com',
  headers: {
    // "content-type": "application/json",
    'X-RapidAPI-Key': '75211e3760msh6c41fd9e5c5ff5dp1a789ejsn85ce26457f2e',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
  },
});

export default http;
