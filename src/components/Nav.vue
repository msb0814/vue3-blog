<template>
  <header class="nav">
    <div class="container">
      <!-- logo -->
      <h1 class="logo" @click="handleClickMenu('home')">
        <img src="@/assets/avatar.jpg" alt="" />
      </h1>

      <!-- 导航区 -->
      <div class="nav-content">
        <div
          class="nav-item"
          :class="{ 'nav-item-active': nav.name === activeTab }"
          :key="nav.name"
          v-for="nav in navList"
          @click="handleClickMenu(nav.name)"
        >
          {{ nav.label }}
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navList: Array<NavItem> = [
  { label: '首页', name: 'home' },
  { label: '存档', name: 'archive' },
  { label: '文章', name: 'articles' },
  { label: '关于', name: 'about' }
];

const activeTab = ref<string>('home');

const handleClickMenu = (name: string) => {
  router.push({ name });
  activeTab.value = name;
};
</script>

<style scoped lang="less">
.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 60px;
  font-size: 18px;
  background: #fff;
  box-shadow: 0 2px 8px #ccc;

  .container {
    display: flex;
    align-items: center;
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;

    .logo {
      width: 50px;
      height: 50px;
      cursor: pointer;
      margin: 0 30px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .nav-content {
      display: flex;
      justify-content: space-evenly;
      height: 100%;

      .nav-item {
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
        margin: 0 10px;
        padding: 0 5px;
        cursor: pointer;
        transition: color 0.1s ease;

        &-active {
          color: @color-theme;
        }

        &:hover {
          color: #333;

          &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: @color-theme;
          }
        }
      }
    }
  }
}
</style>
