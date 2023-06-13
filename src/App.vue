<template>
  <div class="layout">
    <Nav />

    <div class="container">
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100% - 30px);
  background: #fff;
}
</style>
