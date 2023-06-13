<template>
  <div>文章</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import request from '@/utils/request';

onMounted(() => {
  getCategoryList();
});

// 获取分类列表
const getCategoryList = async () => {
  const res = await request.get('/category');
  console.log(res);
};
</script>

<style scoped lang="less"></style>
