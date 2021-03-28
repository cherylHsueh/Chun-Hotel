<template>
  <div class="room">
    <div class="room-title">
      Single Room
    </div>

    <div class="card">
      <div class="card-img">
        <img :src="pic" alt="">
      </div>
      <ul class="card-details">
        <li class="card-details-item container">
          <div class="row py-3 fSize-10">
            <div class="cl-s-4 cl-xl-4 justify-center">
              <span>人數</span>
            </div>
            <div class="cl-s-4 cl-xl-4 justify-center">
              <span>床</span>
            </div>
            <div class="cl-s-4 cl-xl-4 justify-center">
              <span>大小</span>
            </div>
          </div>
          <div class="row pb-3 fSize-18">
            <div class="cl-s-4 cl-xl-4 justify-center">
              <span>1</span>
            </div>
            <div class="cl-s-4 cl-xl-4 justify-center">
              <span>Single</span>
            </div>
            <div class="cl-s-4 cl-xl-4 justify-center">
              <span>18㎡</span>
            </div>
          </div>
        </li>
        <li class="card-details-item card-details-item_baseline py-3">
          <span class="fSize-12">wifi,早餐,電話,空調,冰箱,禁止吸菸,可帶動物</span>
        </li>
        <li class="card-details-item py-6">
          <span>假日</span>
          <span>$3000</span>
        </li>
        <li class="card-details-item py-6">
          <span>平日</span>
          <span>$2888</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'RoomIntro',

  setup () {
    const pic = ref('https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')
    return { pic }
  }
}

</script>

<style lang="scss" >
.room{
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 5px;
  margin-bottom: 100px;
}

.room-title{
  writing-mode: vertical-lr;
  font-size: 26px;
  padding: 10px;
}

.card{
  width: 100%;
  padding: 5px;
  border: 1px solid #E3EAE2;
  &-img{
    max-width: 300px;
    height: 300px;
    overflow: hidden;
    position: relative;

    img{
      width: 100%;
          position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    }
  }
  &-details-item{
    position: relative;
    &_baseline::before{
      content: '';
      display: inline-block;
      width: 100%;
      height: 1px;
      background-color:$secondary-color;
      opacity: .2;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
    &_baseline::after{
      content: '';
      display: inline-block;
      width: 100%;
      height: 1px;
      background-color:$secondary-color;
      opacity: .2;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  &-details-item:last-child{
    background-color: #E3EAE2;
  }
}
</style>
