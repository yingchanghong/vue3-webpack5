import axios from 'axios';
import pro from 'nprogress';
import 'nprogress/nprogress.css';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import router from '../router/index';
const http = axios.create({
  timeout: 6000,
  baseURL: 'http://localhost:9998',
});

http.interceptors.request.use(
  config => {
    pro.start();
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
    // const token = store.state.token;
    // token && (config.headers.Authorization = token);
    // return config;
  },
  error => Promise.error(error)
);
http.interceptors.response.use(res => {
  const { code, message } = res.data;
  pro.done();
  if (code === 5005) {
    localStorage.removeItem('token');
    ElMessage.warning(message || '登录已过期，请重新登录');
    router.push('/login');
    // return false;
  }
  if (code === 500) {
    return ElMessage.error(message || '网络请求错误');
  }
  return res.data;
});
export default http;
