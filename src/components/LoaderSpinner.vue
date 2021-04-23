<template>
  <div v-if="isLoading" class="loader__wrapper">
    <div class="loader">
      <div class="loader__ball"></div>
      <div class="loader__shadow"></div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'LoaderSpinner',

  setup () {
    const store = useStore()

    const isLoading = computed(() => store.getters.isLoading)

    return { isLoading }
  }
}
</script>

<style lang="scss">
.loader__wrapper{
  width: 100%;
  height: 100vh;
  background: rgba(211,211,211,.5);
  position: fixed;
  top:0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  &__ball{
    width: 50px;
    height: 50px;
    background:#A5BB94;
    border-radius: 50%;
    animation: ball .5s linear infinite;
  }
  &__shadow{
    width: 50px;
    height: 15px;
    background: #000;
    opacity: 0.1;
    position: absolute;
    top: 59px;
    left: 0;
    border-radius: 50%;
    animation: shadow .5s linear infinite;
  }
}

@keyframes ball {
  25% { transform: translateY(10px);}
  50% {transform: translateY(20px);}
  75% { transform: translateY(10px)}
  100% { transform: translateY(0) }
}

@keyframes shadow {
  50% {
    transform: scale(1.2,1);
  }
}
</style>
