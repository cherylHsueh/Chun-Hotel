<template>
  <main>
    <router-view></router-view>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from '../components/layout/TheFooter.vue'

export default {
  name: 'Home',
  components:
    {
      TheFooter
    }
}
</script>
