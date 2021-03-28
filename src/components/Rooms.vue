<template>
  <div>
    <h2>ROOMS</h2>
    <div class="row justify-center">
      <div v-for="item in 6" :key="item" class="cl-md-6 cl-xl-4">
        <room-intro></room-intro>
      </div>
    </div>
  </div>
</template>

<script>
import RoomIntro from '@/components/RoomIntro'

export default {
  name: 'Rooms',

  components: {
    RoomIntro
  }

}
</script>

<style lang="scss" scoped>

h2{
  margin-bottom:100px;
  font-family: 'Dancing Script', cursive;
  font-size: 65px;
  @include rwd (mobile){
    font-size: 36px;
  }
}
</style>
