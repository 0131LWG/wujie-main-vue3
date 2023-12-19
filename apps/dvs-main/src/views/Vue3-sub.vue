<template>
  <!--保活模式，name相同则复用一个子应用实例，改变url无效，必须采用通信的方式告知路由变化 -->
  <wujieVue
    width="100%"
    height="100%"
    name="vue3"
    :url="vue3Url"></wujieVue>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue";
  import hostMap from "@/utils/wujie/hostMap";
  import wujieVue from "wujie-vue3";
  import { useRoute } from "vue-router";

  const route = useRoute();

  const vue3Url = ref(hostMap("//localhost:7300/") + route.params.path);

  watch(
    () => route.params.path,
    () => {
      wujieVue.bus.$emit("vue3-router-change", `/${route.params.path}`);
    },
    { immediate: true }
  );
</script>

<style lang="scss" scoped></style>
