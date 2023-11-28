import axios from 'axios';

const http = axios.create({
  baseURL: 'https://hotels4.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '4dab8e2676msh27a1c4bf0b53238p1ba624jsn3f0a5abbc40e',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
  },
});

export default http;
