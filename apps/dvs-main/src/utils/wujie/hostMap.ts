// const map: Record<string, string> = {
//   "//localhost:7100/": "//120.76.119.126:8888/demo-react17/",
//   "//localhost:7200/": "//120.76.119.126:8888/demo-vue2/",
//   "//localhost:7300/": "//120.76.119.126:8888/dvs-vue3/",
//   "//localhost:7400/": "//120.76.119.126:8888/demo-angular12/",
//   "//localhost:7500/": "//120.76.119.126:8888/demo-vite/",
//   "//localhost:7600/": "//120.76.119.126:8888/dvs-react16/",
//   "//localhost:7700/": "//120.76.119.126:8888/demo-main-react/",
//   "//localhost:8000/": "//120.76.119.126:8888/"
// };

const map: Record<string, string> = {
  "//localhost:7300/": "/dvs-vue3/",
  "//localhost:7600/": "/dvs-react16/",
  "//localhost:8000/": "/"
};

export default function hostMap(host: string) {
  if (process.env.NODE_ENV === "production") return `//${window.location.host}${map[host]}`;
  return host;
}
