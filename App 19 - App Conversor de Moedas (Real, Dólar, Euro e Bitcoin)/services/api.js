import axios from "axios";
const api = axios.create ({
  baseURL: "https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=3110d41608cc9c47be9d"
})

export default api;