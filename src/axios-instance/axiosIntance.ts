import axios from "axios";
import { baseURL } from "./endpoint";


const AxiosInstance= axios.create({
    baseURL:baseURL,
});

export default AxiosInstance

