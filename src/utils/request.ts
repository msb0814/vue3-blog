import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ResponseData {
  code: number;
  data?: any;
  message: string;
}

// 创建 axios 实例
let service: AxiosInstance | any;

service = axios.create({
  baseURL: '/api',
  timeout: 50000
});

// request 拦截器 axios 的一些配置
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    console.error('error:', error);
    return Promise.reject(error);
  }
);

// respone 拦截器 axios 的一些配置
service.interceptors.response.use(
  (res: AxiosResponse) => {
    // Some example codes here:
    // code == 0: success
    if (res.status === 200) {
      const data: ResponseData = res.data;
      if (data.code === 200) {
        return data.data;
      } else {
        console.log('error', data.message);
      }
    } else {
      console.log('error', '网络错误!');

      return Promise.reject(new Error(res.data.message || 'Error'));
    }
  },
  (error: any) => Promise.reject(error)
);

export default service;
