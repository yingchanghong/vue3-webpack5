import http from '@/config/http.js';

const goods = {
  goodList() {
    return http.get(`/goodList`);
  },
  getInfo(params) {
    return http.get(``, { params });
  },
};
export default goods;
