<template>
  <div class="archive-container">
    <sider-bar class="siderbar" :activeId="activeId" :categoryList="categoryList" @on-active="handleChangeActive" />

    <Catalogue class="catalogue" :articleList="articleList" />
  </div>
</template>

<script lang="ts">
export default { name: 'Archive' };

interface articleParams {
  page?: number;
  desc?: string;
  category_id?: number | null;
  keyword?: string;
}
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import request from '@/utils/request';
import SiderBar from './components/SiderBar.vue';
import Catalogue from '@/components/Catalogue.vue';

onMounted(() => {
  getCategoryList();
  getArticleList();
});

const activeId = ref<number>(0); // 当前选中的分类
const categoryList = ref<Array<Category>>([]); // 分类列表

// 获取分类列表
const getCategoryList = async () => {
  const allCate: Category = {
    id: 0,
    name: '全部',
    status: 1,
    sort_order: 1,
    parent_id: -1
  };

  const res = await request.get('/category');
  categoryList.value = [allCate, ...res.data];
};

const articleList = ref<Array<ArticleListItem>>([]); // 文章列表

// 获取文章列表
const getArticleList = async () => {
  const params: articleParams = {
    // page: 10,
    category_id: activeId.value || null
  };

  const res = await request.get('/article', { params });

  // 找到分类的名称
  const list = res.data?.map((item: ArticleListItem) => {
    const categoryName = categoryList.value.find((cItem: Category) => cItem.id === item.category_id)?.name;
    return { categoryName, ...item };
  });

  articleList.value = list;
};

// 点击侧边栏分类
const handleChangeActive = async (id: number) => {
  activeId.value = id;
  // 刷新文章列表
  await getArticleList();
};
</script>

<style scoped lang="less">
.archive-container {
  display: flex;
  justify-content: space-between;
  min-height: 100%;
  .siderbar {
    position: fixed;
    top: 80px;
  }

  .catalogue {
    margin-left: 200px;
    width: calc(100% - 200px);
    min-height: 100%;
  }
}
</style>
