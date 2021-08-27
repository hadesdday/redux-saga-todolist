import axiosService from "../commons/Services/axiosService";
import { API_ENDPOINT } from "../constants";

const url = "tasks";

export const getTasks = () => {
   return axiosService.get(`${API_ENDPOINT}/${url}`);
};
