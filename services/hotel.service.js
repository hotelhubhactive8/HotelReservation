import axios from 'axios';

const http = axios.create({
  baseURL: 'https://hotels4.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '559205a37emsh621be2d286dbae2p14d07bjsn849802c68179',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
  },
});

export default http;
