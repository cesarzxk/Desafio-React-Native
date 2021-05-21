import axios from 'axios';

const api = axios.create({
    baseURL: "https://restapi-teste.herokuapp.com/",
    headers: {'Content-Type': 'application/json'}
  
  });


export default api;