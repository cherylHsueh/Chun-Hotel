<template>
  <div class="room-info">
    <div class="room-info__title">
      <span>預約房間：</span>
      <h2> {{ roomInfo.name }}</h2>
    </div>
    <p class="room-info__description">
      {{ roomInfo.description }}
    </p>
    <ul class="room-info__intro-list">
      <li>
        房間限制人數：{{ roomDesc.peopleLimit }}人
      </li>
      <li>房間大小： {{ roomDesc.footage }}平方公尺</li>
      <li>{{ roomDesc.bed }},{{ roomDesc.privateBath }}間獨立衛浴</li>
    </ul>
  </div>

  <!-- 房間設施 -->
  <div class="room-amenities">
    <span v-text="amenities"></span>
  </div>

  <!--進退房時間及房價 -->
  <template v-if="isReservation">
    <div class="room-checks">
      <span class="room-checks__title fSize-12">checkin 時間</span>
      <span class="room-checks__time fSize-24">{{ `${roomInfo.checkInAndOut['checkInEarly']}~${roomInfo.checkInAndOut['checkInLate']}` }}</span>
    </div>
    <div class="room-checks">
      <span class="room-checks__title fSize-12">最晚checkout時間</span>
      <span class="room-checks__time  fSize-24">{{ roomInfo.checkInAndOut['checkOut'] }}</span>
    </div>
    <div class="room-price">
      <span class="room-price__title fSize-12">平日(一～四)</span>
      <span class="room-price__per-night fSize-24">${{ roomInfo.normalDayPrice }}</span>
    </div>
    <div class="room-price">
      <span class="room-price__title fSize-12">假日(五～日)</span>
      <span class="room-price__per-night fSize-24">${{ roomInfo.holidayPrice }}</span>
    </div>
  </template>
</template>

<script>
import { ref } from 'vue'
import { getRoomDesc, getAmenities } from '../composition-api'

export default {
  name: 'RoomIntro',

  props: {
    roomInfo: {
      type: Object,
      default: () => {}
    },
    isReservation: Boolean
  },

  setup (props) {
    const roomInfo = ref({}) // 房型資訊
    const roomDesc = ref({}) // 房型描述
    const amenities = ref({}) // 房間設施

    if (Object.keys(props.roomInfo).length) {
      roomInfo.value = JSON.parse(JSON.stringify(props.roomInfo))

      // 取得房型說明
      roomDesc.value = getRoomDesc(roomInfo.value.descriptionShort)

      // 取得房間設施
      amenities.value = getAmenities(roomInfo.value.amenities)
    }

    return { props, roomDesc, amenities }
  }
}

</script>

<style lang="scss" scoped>
// 房間相關資訊
.room-info{
  text-align: left;
  &__title{
    font-size: 26px;
    font-weight: 200;
    padding: 20px 0;
    @include rwd(mobile){
      font-size: 22px;
      padding: 20px 0;
    }
    h2{
      padding-top:10px;
    }
  }
  &__description{
    line-height: 25px;
  }
  &__intro-list{
    padding: 10px 0;
    li{
      padding: 10px 0;
    }
  }

}

// 房間設備
.room-amenities{
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 10px;
  line-height: 25px;
  letter-spacing: 2px;
  background-color: #E3EAE2;
  @include rwd (mobile){
    flex-wrap: wrap;
    line-height: 25px;
    font-size: 14px;
  }
}

// 入住離開時間資訊
.room-checks{
  display: inline-block;
  width: 50%;
  padding:10px 0;
  text-align: left;
  span{
    width: 80%;
    margin: auto;
    display:block;
    padding:5px 0;
  }
}

// 房間價格資訊
.room-price{
  display: inline-block;
  width: 50%;
  padding:10px 0;
  text-align: left;
  span{
    width: 80%;
    margin: auto;
    display:block;
    padding:5px 0;
  }
}
</style>
