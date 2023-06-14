<template>
  <div class="about-container">
    <img class="avatar" src="@/assets/avatar.jpg" alt="" />
    <div class="name">msb</div>
    <div class="job">前端开发工程师</div>
    <div>
      <a href="https://github.com/msb0814" target="blank">https://github.com/msb0814</a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  > div {
    margin: 10px 0;
  }
  .avatar {
    display: block;
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
    border-radius: 50%;
  }

  .name {
    font-weight: blod;
    font-size: 30px;
  }
}
</style>
