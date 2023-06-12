<template>
  <div class="nav">
    <!-- logo -->
    <div class="logo">blog</div>

    <!-- 导航区 -->
    <div class="nav-content">
      <div class="nav-item">首页</div>
      <div class="nav-item" @click="handle">文章</div>
      <div class="nav-item" @click="handle2">archive</div>
      <div class="nav-item">1</div>
      <div class="nav-item">1</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';

const router = useRouter();

const handle = () => {
  console.log(1);

  router.push({ path: '/articles' });
};

const handle2 = () => {
  console.log(1);

  router.push({ path: '/archive' });
};
</script>

<style scoped lang="less">
.nav {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 30px;
  padding: 10px 20px;

  .logo {
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 50%;
    padding: 5px;
  }

  .nav-content {
    display: flex;
    justify-content: space-evenly;

    .nav-item {
      margin: 0 5px;
      cursor: pointer;
    }
  }
}
</style>
