<template>
  <!-- header starts -->
  <div class="py-5 text-center">
    <img height="150" src="@/assets/logo1.jpg" alt />
    <h2>小鑫文章栏</h2>
    <p class="lead">以人为镜可明得失,以代码为镜可通逻辑!</p>
    <router-link
      class="btn btn-outline-primary mr-2"
      :to="{ name: 'resourceHomePage' }"
      >首页</router-link
    >
    <router-link
      class="btn btn-outline-primary"
      :to="{ name: 'resourceNewPage' }"
      >添加</router-link
    >
  </div>
  <!-- header ends -->
</template>

<script>
export default {};
</script>

<style></style>
