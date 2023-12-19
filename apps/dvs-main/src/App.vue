<template>
  <nav>
    <div>
      <router-link to="/vue3">vue3</router-link> |
      <router-link to="/vue3-sub/home">home</router-link> |
      <router-link to="/vue3-sub/location">location</router-link>
    </div>
    <div>
      <router-link to="/react16"> react16 </router-link> |
      <router-link to="/react16-sub/home">home</router-link> |
      <router-link to="/react16-sub/dialog">dialog</router-link> |
      <router-link to="/react16-sub/location">location</router-link> |
      <router-link to="/react16-sub/communication">communication</router-link> |
      <router-link to="/react16-sub/nest">nest</router-link> |
      <router-link to="/react16-sub/font">font</router-link>
    </div>
  </nav>
  <router-view />
</template>

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
