<template>
  <div class="layout">
    <Nav />

    <div class="layout-container">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Nav from './components/Nav.vue';
</script>

<style lang="less">
@import url('./styles/index.less');
@import url('./styles/reset.less');

.layout {
  width: 100%;
  height: 100%;
  padding-top: 80px;
}

.layout-container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 20px;
}
</style>
