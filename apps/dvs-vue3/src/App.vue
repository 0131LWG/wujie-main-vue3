<template>
  <router-view />
</template>

<script lang="ts" setup>
  import { watch, onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";

  const route = useRoute();
  const router = useRouter();

  watch(
    () => route,
    (path) => {
      console.log("--------", path);
      window.$wujie?.bus.$emit("sub-route-change", "vue3", path);
    }
  );

  onMounted(() => {
    window.$wujie?.bus.$on("vue3-router-change", (path: string) => {
      console.log("path--------", path);
      router.push(path);
    });
  });
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
