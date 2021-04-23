<template>
  <div v-if="roomsList.length">
    <h2>ROOMS</h2>
    <div class="row justify-center">
      <div v-for="item in roomsList" :key="item" class="cl-md-6 cl-xl-4">
        <div class="room">
          <div class="room-title">
            {{ item.name }}
          </div>

          <div class="card" @click="goToDetail(item.id)">
            <div class="card-img">
              <img :src="item.imageUrl[0]" alt="">
            </div>
            <ul class="card-details">
              <li class="card-details-item ">
                <div class="card-details-item__group fSize-10">
                  <span>人數</span>
                  <span>床</span>
                  <span>大小</span>
                </div>
                <div class="card-details-item__group fSize-18">
                  <span v-text="peopleLimit(item.descriptionShort.GuestMin,item.descriptionShort.GuestMax)"></span>
                  <span>{{ item.descriptionShort.Bed[0] }}</span>
                  <span>{{ item.descriptionShort.Footage }}㎡</span>
                </div>
              </li>
              <li class="card-details-item card-details-item__baseline  card-details-item__amenities py-3">
                <span v-text="amenities(item.amenities)"></span>
              </li>
              <li class="card-details-item py-6">
                <span>假日</span>
                <span>${{ item.holidayPrice }}</span>
              </li>
              <li class="card-details-item py-6">
                <span>平日</span>
                <span>${{ item.normalDayPrice }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, inject } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { getAmenities } from '../composition-api'

export default {
  name: 'Rooms',

  setup () {
    const store = useStore()
    const router = useRouter()
    const Swal = inject('Swal')

    // 呼叫全部房型清單api
    const init = async () => {
      try {
        await store.dispatch('getRoomsList')
        await store.dispatch('getRoomDetail')
      } catch (error) {
        Swal.fire({
          title: '錯誤',
          text: error.response.data.message,
          icon: 'error'
        })
      }
    }

    // 取得房間清單(store)
    const roomsList = computed(() => store.getters.roomsList)

    // 取得房間設施
    const amenities = (params) => getAmenities(params)

    // 房間人數邏輯
    const peopleLimit = computed(() => {
      return function (min, max) {
        return min === max ? max : `${min}~${max}`
      }
    })

    const goToDetail = (id) => {
      router.push({
        path: `/reservation/${id}`
      }
      )
    }

    // 初始化
    onMounted(async () => {
      init()
    })

    return { roomsList, amenities, peopleLimit, goToDetail }
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

// 單一房型container(父層)
.room{
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 5px;
  margin-bottom: 100px;
}

// 房型卡片標題區塊(左側)
.room-title{
  writing-mode: vertical-lr;
  font-size: 26px;
  padding: 10px;
}

// 房型卡片區塊(右側)
.card{
  width: 100%;
  height: 100%;
  padding: 5px;
  border: 1px solid #E3EAE2;
  cursor: pointer;
  &-img{
    height: 300px;
    overflow: hidden;
    position: relative;
    display: flex;
    img{
      width: 100%;
      object-fit: cover;
      object-position: 50% 70%;
    }
  }
  &-details{
    display: flex;
    flex-direction: column;
    height: calc(100% - 300px);
    justify-content: space-around;
  }
  &-details-item{
    position: relative;
    &__amenities{
      span{
        font-size: 12px;
        letter-spacing: 2px;
        line-height: 20px;
        word-break: keep-all;
      }
    }
    &__baseline::before{
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
    &__baseline::after{
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
    &__group{
      display: flex;
      padding: 10px 0;
      span{
        width: 33.3333%;
      }
    }
  }
  &-details-item:last-child{
    background-color: #E3EAE2;
  }
}
</style>
