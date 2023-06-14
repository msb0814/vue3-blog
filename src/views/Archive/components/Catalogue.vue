<template>
  <div class="catalogue-container">
    <div class="catalogue-item" :key="article.id" v-for="article in props.articleList">
      <!-- 首行信息 -->
      <div class="catalogue-item-meta">{{ `${article.created_at} &nbsp; | &nbsp; ${article.categoryName} ` }}</div>

      <!--文章标题 -->
      <div class="catalogue-item-title">{{ article.title }}</div>

      <!-- 简介 -->
      <div class="catalogue-item-description">{{ article.description }}</div>

      <!-- 浏览量 -->
      <div class="catalogue-item-footer">
        <Icon iconName="icon-liulanliang" />
        <span> {{ article.browse }} </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'catalogue' };
</script>

<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps({
  articleList: { type: Array<ArticleListItem>, required: true }
});

onMounted(() => {});
</script>

<style scoped lang="less">
.catalogue-container {
  width: calc(100% - 200px);
  min-height: 80%;
  margin-left: 200px;
  padding: 0 10px;
  border: 1px solid @color-grey1;
  border-radius: 5px;
  box-shadow: 0 2px 8px #ccc;
  background: #fff;

  .catalogue-item {
    padding: 10px;
    border-bottom: 1px solid @color-grey1;
    cursor: pointer;

    &:hover {
      background-color: @color-grey2;
    }

    &-meta {
      font-size: 14px;
      line-height: 30px;
      color: @color-text2;
    }

    &-title {
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
    }

    &-description {
      color: @color-text2;
      line-height: 26px;
    }

    &-footer {
      line-height: 20px;

      > span {
        margin-left: 5px;
      }
    }
  }
}
</style>
