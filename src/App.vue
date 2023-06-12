<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Nav from './components/Nav.vue';
</script>

<template>
  <Nav />

  <div class="layout">
    <router-view />
  </div>
</template>

<style scoped></style>
