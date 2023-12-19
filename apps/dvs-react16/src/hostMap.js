const map = {
  "//localhost:7300/": "/dvs-vue3/",
  "//localhost:7600/": "/dvs-react16/",
  "//localhost:8000/": "/dvs-main/"
};

export default function hostMap(host) {
  if (process.env.NODE_ENV === "production") return `//${window.location.host}${map[host]}`;
  return host;
}
