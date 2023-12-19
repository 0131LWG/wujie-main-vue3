<template>
  <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
  <wujieVue
    width="100%"
    height="100%"
    name="react16"
    :url="react16Url"></wujieVue>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import hostMap from "@/utils/wujie/hostMap";
  import wujieVue from "wujie-vue3";
  import { useRoute } from "vue-router";

  const route = useRoute();

  const react16Url = computed(() => {
    console.log("path------", hostMap("//localhost:7600/") + route.params.path);
    return hostMap("//localhost:7600/") + route.params.path;
  });
</script>

<style lang="scss" scoped></style>
