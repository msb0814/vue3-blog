<template>
  <div class="siderbar-container">
    <div
      class="category"
      :class="{ 'category-active': cate.id === props.activeId }"
      :key="cate.id"
      v-for="cate in props.categoryList"
      @click="handleClickCategory(cate.id)"
    >
      {{ cate.name }}
    </div>

    <div class="add-box">
      <Icon class="btn-add" v-show="!showInput" iconName="icon-jia" @click="showInput = true" />
      <div class="input-box" v-show="showInput">
        <input class="input" v-model="newName" type="text" />
        <Icon class="btn-submit" iconName="icon-duihao" @click="handleAddCategory" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'SiderBar' };
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import request from '@/utils/request';

const props = defineProps({
  activeId: { type: Number, required: true },
  categoryList: { type: Array<Category>, required: true }
});

const emit = defineEmits(['on-active']);

onMounted(() => {});

const showInput = ref<boolean>(false);
const newName = ref<string>('');

// 添加按钮的回调
const handleAddCategory = () => {
  const name = newName.value;
  if (name) {
    request.post('/category', {
      name,
      key: new Date().getTime()
    });
    newName.value = '';
  }
  showInput.value = false;
};

const handleClickCategory = (id: number) => {
  emit('on-active', id);
};
</script>

<style scoped lang="less">
.siderbar-container {
  width: 180px;
  padding: 10px 13px;
  font-size: 18px;
  border: 1px solid @color-grey1;
  border-radius: 5px;
  box-shadow: 0 2px 8px #ccc;
  background: #fff;

  .category {
    padding: 0 5px;
    margin: 2px 0;
    border-radius: 5px;
    line-height: 40px;
    cursor: pointer;

    &-active {
      color: @color-theme;
      background: @color-background;
    }

    &:hover {
      color: @color-theme;
      background: @color-grey2;
    }
  }

  .btn-add {
    cursor: pointer;
  }

  .add-box {
    margin-top: 5px;

    .input-box {
      position: relative;
      .input {
        border: 1px solid @color-theme;
        width: 100%;
        height: 30px;
        border-radius: 5px;
        padding: 0 10px;
      }

      .btn-submit {
        position: absolute;
        height: 100%;
        right: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
