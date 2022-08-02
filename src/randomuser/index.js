import axios from "axios";


const random = axios.create({
    baseURL: 'https://randomuser.me/api'
    
  })
  export default random;