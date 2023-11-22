import axios from 'axios';

const http = axios.create({
  baseURL: 'https://hotels4.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '84bfe74e77msh99b2db0522b1e77p15618fjsn033bdcf4b580',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
  },
});

export default http;
