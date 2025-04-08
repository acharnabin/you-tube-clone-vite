import axios from "axios";
import { baseURL } from "./endpoints";

const AxiosInstance = axios.create({
  baseURL: baseURL,
});

// REQUEST HANDLE
AxiosInstance.interceptors.request.use((config)=>{

    config.headers={
        Authorization:'bearer xxxdnedjsdj'
    }


    return config
})


// RESPONSE
AxiosInstance.interceptors.response.use((value)=>{

    return value
})

export default AxiosInstance;
