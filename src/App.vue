<template>
  <router-view></router-view>
  <!-- Footer -->
  <the-footer></the-footer>
  <!-- 全局加載畫面 -->
  <loader-spinner></loader-spinner>
</template>

<script>
import TheFooter from '@/components/layout/TheFooter'
import LoaderSpinner from '@/components/LoaderSpinner'

export default {
  name: 'App',
  components: {
    TheFooter,
    LoaderSpinner
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-color;
}

#nav {
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
