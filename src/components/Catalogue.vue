<template>
  <div class="catalogue-container">
    <ul class="catalogue-item" :key="article.id" v-for="article in props.articleList">
      <li @click="handleToArticle(article.id)">
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
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default { name: 'catalogue' };
</script>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  articleList: { type: Array<ArticleItem>, required: true }
});

const handleToArticle = (id: number) => {
  router.push(`/article/${id}`);
};
</script>

<style scoped lang="less">
.catalogue-container {
  width: 100%;
  border: 1px solid @color-grey1;
  border-radius: 5px;
  box-shadow: 0 2px 8px #ccc;
  background: #fff;

  li {
    padding: 20px 20px 0 20px;
  }

  .catalogue-item {
    // padding: 10px;
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
      line-height: 30px;
    }

    &-footer {
      line-height: 20px;
      border-bottom: 1px solid @color-grey1;
      padding-bottom: 10px;

      > span {
        margin-left: 5px;
      }
    }
  }
}
</style>
