import axios from "axios";
import { COINGEKO_API_URL } from "./constants.js";


const axiosinstance = axios.create ({
    baseURL: COINGEKO_API_URL,
});
export default axiosinstance;