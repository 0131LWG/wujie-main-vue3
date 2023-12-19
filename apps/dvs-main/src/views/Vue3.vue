<template>
  <!--保活模式，name相同则复用一个子应用实例，改变url无效，必须采用通信的方式告知路由变化 -->
  <wujieVue
    width="100%"
    height="100%"
    name="vue3"
    :sync="true"
    :url="vue3Url"></wujieVue>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import hostMap from "@/utils/wujie/hostMap";
  import wujieVue from "wujie-vue3";

  const vue3Url = ref(hostMap("//localhost:7300/"));
</script>

<style lang="scss" scoped></style>
