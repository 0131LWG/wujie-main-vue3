import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import WujieVue from "wujie-vue3";
import hostMap from "@/utils/wujie/hostMap";
import credentialsFetch from "@/utils/wujie/fetch";
import lifecycles from "@/utils/wujie/lifecycle";
import plugins from "@/utils/wujie/plugin";

const { setupApp, preloadApp, bus } = WujieVue;

// 在 xxx-sub 路由下子应用将激活路由同步给主应用，主应用跳转对应路由高亮菜单栏
bus.$on("sub-route-change", (name: string, path: string) => {
  const mainName = `${name}-sub`;
  const mainPath = `/${name}-sub${path}`;
  const currentName = router.currentRoute.value.name;
  const currentPath = router.currentRoute.value.path;
  console.log(name, path);
  if (mainName === currentName && mainPath !== currentPath) {
    router.push({ path: mainPath });
  }
});

/**
 * 大部分业务无需设置 attrs
 * 此处修正 iframe 的 src，是防止github pages csp报错
 * 因为默认是只有 host+port，没有携带路径
 */
const isProduction = process.env.NODE_ENV === "production";
const attrs = isProduction ? { src: hostMap("//localhost:8000/") } : {};
const degrade =
  window.localStorage.getItem("degrade") === "true" ||
  !window.Proxy ||
  !window.CustomElementRegistry;
const props = {
  jump: (name: string) => {
    router.push({ name });
  }
};

/**
 * 配置应用，主要是设置默认配置
 * preloadApp、startApp的配置会基于这个配置做覆盖
 */
setupApp({
  name: "vue3",
  url: hostMap("//localhost:7300/"),
  attrs,
  exec: true,
  alive: true,
  plugins: [
    { cssExcludes: ["https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"] }
  ],
  props,
  // 引入了的第三方样式不需要添加credentials
  fetch: (url, options) =>
    (url as string).includes(hostMap("//localhost:7300/"))
      ? credentialsFetch(url, options)
      : window.fetch(url, options),
  degrade,
  ...lifecycles
});

/**
 * 配置应用，主要是设置默认配置
 * preloadApp、startApp的配置会基于这个配置做覆盖
 */
setupApp({
  name: "react16",
  url: hostMap("//localhost:7600/"),
  attrs,
  exec: true,
  props,
  fetch: credentialsFetch,
  plugins,
  prefix: { "prefix-dialog": "/dialog", "prefix-location": "/location" },
  degrade,
  ...lifecycles
});

// if (window.localStorage.getItem("preload") !== "false") {
// @ts-ignore
preloadApp({
  name: "vue3"
});

// @ts-ignore
preloadApp({
  name: "react16"
});
// }

createApp(App).use(router).mount("#app");
