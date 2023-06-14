<template>
  <div class="article-container">
    <!-- 标题 -->
    <div class="title">{{ article?.title }}</div>

    <div class="meta">
      <img class="avatar" src="@/assets/avatar.jpg" alt="" />
      <div class="meta-right">
        <div class="author">{{ article?.admin_info?.nickname }}</div>
        <div class="create-time">
          <span>{{ article?.created_at }}</span>
          <span> · 阅读 {{ article?.browse }}</span>
        </div>
      </div>
    </div>

    <div class="content">
      {{ article.content }}
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'Article' };
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import request from '@/utils/request';

const route = useRoute();

onMounted(() => {
  getArticle();
});

const article = ref<any>({});

const getArticle = async () => {
  const res = await request.get(`article/${route.params.id}`);
  console.log(res);
  article.value = res;
};
</script>

<style scoped lang="less">
.article-container {
  width: 100%;
  min-height: 100%;
  padding: 20px 30px;
  border: 1px solid @color-grey1;
  border-radius: 5px;
  box-shadow: 0 2px 8px #ccc;
  background: #fff;

  .title {
    font-size: 30px;
    font-weight: bold;
    margin: 10px 0;
  }

  .meta {
    display: flex;
    margin-bottom: 30px;
    .avatar {
      display: block;
      width: 50px;
      height: 50px;
      margin: 0 12px 0 0;
      border-radius: 50%;
    }

    .meta-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .author {
      font-size: 18px;
    }

    .create-time {
      color: @color-grey3;
    }
  }
}
</style>
