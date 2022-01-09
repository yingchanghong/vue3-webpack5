import http from '@/config/http.js';

const login = {
  login(model) {
    return http.post(`/login`, model);
  },
  getInfo(params) {
    return http.get(``, { params });
  },
};
export default login;
