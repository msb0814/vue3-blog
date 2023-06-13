<template>
  <div class="login-container">
    <div>
      <div>
        <span>账号</span>
        <input class="username" type="text" v-model="username" />
      </div>

      <div>
        <span>密码</span>
        <input class="password" type="password" v-model="password" />
      </div>
    </div>

    <button @click="handleLogin">登&nbsp;&nbsp;录</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import request from '@/utils/request';

const username = ref<string>('');
const password = ref<string>('');

const handleLogin = async () => {
  console.log(username.value);
  console.log(password.value);

  const res = await request.post('/admin/login', { username: username.value, password: password.value });
  console.log(res);
};
</script>

<style scoped lang="less">
.login-container {
  display: flex;
  flex-direction: column;
  height: 50%;
  padding: 20px;

  > div {
    margin: 30px auto;
  }

  button {
    width: 10%;
    height: 40px;
    margin: 0 auto;
    font-size: 16px;
    color: #fff;
    border: none;
    border-radius: 10px;
    background: @color-theme;
    cursor: pointer;
  }

  .username,
  .password {
    height: 50px;
    width: 300px;
    margin: 10px 0 5px 10px;
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 10px;
    font-size: 16px;
  }
}
</style>
