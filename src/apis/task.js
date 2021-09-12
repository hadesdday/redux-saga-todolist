import axiosService from "../commons/Services/axiosService";
import { API_ENDPOINT } from "../constants";
import qs from "query-string";

const url = "tasks";

export const getTasks = (params = {}) => {
  let queryParams = "";
  //kiem tra params co key nhu params truyen vao hay khong
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

export const addTask = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateTask = (data, id) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${id}`, data);
};

export const deleteTask = (id) => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${id}`);
};
