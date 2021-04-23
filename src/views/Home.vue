<template>
  <main class="container">
    <default></default>
    <rooms></rooms>
  </main>
</template>

<script>
import Default from '@/components/Default'
import Rooms from '@/components/Rooms'

export default {
  name: 'Home',

  components: {
    Default,
    Rooms
  }
}
</script>

<style lang="scss" scoped>
.container{
  max-width: 1280px;
}
</style>
