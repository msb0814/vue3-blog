import { defineStore } from 'pinia';
import request from '@/utils/request';

// defineStore 第一个参数是id，必需且值唯一
export const useUserStore = defineStore('user', {
  //state返回一个函数，防止作用域污染
  state: () => {
    return {
      userInfo: {
        name: ''
      },
      token: ''
    };
  },
  getters: {},
  actions: {
    updateUserInfo(userInfo: { name: string; age: number }) {
      this.userInfo = userInfo;
    },

    updateToken(token: string) {
      this.token = token;
    },

    // 管理员登录
    async adminLogin(payload: { email: string; password: string }) {
      const { data } = await request.post('/admin/login', ...payload);
      return data;
    }
  }
});
