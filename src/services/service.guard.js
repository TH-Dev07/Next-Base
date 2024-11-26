import axios from "axios";

const service = axios;

service.interceptors.request.use(config => {
    return config;
}, err => {
    return Promise.reject(err);
});

service.interceptors.response.use(res => {
    return res;
}, err => {
    return Promise.reject(err);
});

export default service;
