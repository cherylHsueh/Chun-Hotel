<template>
  <div class="header">
    <div class="header__logo">
      <img src="../assets/logo.svg" alt="logo">
      <h1>不想上班</h1>
    </div>
    <div class="header__title">
      Success!
    </div>
  </div>

  <!-- 主要區塊 -->
  <main v-if="Object.keys(roomInfo).length" class="main">
    <div class="container">
      <!-- 返回主頁 -->
      <a a class="back-link" @click="backToHome">
        <fa-icon icon="chevron-left"></fa-icon>
        <span>查看其他房型</span>
      </a>
      <div class="row">
        <!-- 訂房人資訊 -->
        <section class="cl-s-12 cl-md-12 cl-xl-6">
          <div class="booking-card">
            <div class="booking-card__wrapper">
              <div class="booking-card__info">
                <h4>預約成功！</h4>
                <ul class="booking-card__info--guest">
                  <li>
                    <span>姓名:</span>
                    <span>{{ roomInfo.booking[0].name }}</span>
                  </li>
                  <li>
                    <span>電話:</span>
                    <span>{{ roomInfo.booking[0].tel }}</span>
                  </li>
                </ul>
                <ul class="booking-card__info--price">
                  <li>
                    <span>平日(一～四)</span>
                    <span>${{ roomInfo.room[0].normalDayPrice }} x {{ roomInfo.dateCalResult.weekdays }}晚</span>
                    <span>${{ roomInfo.room[0].normalDayPrice * roomInfo.dateCalResult.weekdays }}</span>
                  </li>
                  <li>
                    <span>假日(六～日)</span>
                    <span>${{ roomInfo.room[0].holidayPrice }} x {{ roomInfo.dateCalResult.holiday }}晚</span>
                    <span>${{ roomInfo.room[0].holidayPrice * roomInfo.dateCalResult.holiday }}</span>
                  </li>
                </ul>

                <span class="booking-card__info--amount fSize-24">${{ roomInfo.dateCalResult.amount }}</span>
              </div>
            </div>
          </div>

          <div class="remind-info">
            <div class="remind-info__title">
              提醒!
            </div>

            <div class="remind-info__checks">
              <span class="remind-info__checks--title  fSize-12">checkin 時間</span>
              <span class="room-checks__time fSize-24">
                {{ `${ roomInfo.room[0].checkInAndOut['checkInEarly']}~${ roomInfo.room[0].checkInAndOut['checkInLate']}` }}
              </span>
            </div>
            <div class="remind-info__checks">
              <span class="remind-info__checks--title  fSize-12">最晚checkout 時間</span>
              <span class="room-checks__time fSize-24">
                {{ roomInfo.room[0].checkInAndOut['checkOut'] }}
              </span>
            </div>
          </div>
        </section>

        <!-- 房型資訊 -->
        <section class="cl-s-12 cl-md-12 cl-xl-6 flex-wrap">
          <room-Intro :room-info="roomInfo.room[0]"></room-Intro>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import RoomIntro from '@/components/RoomIntro'

export default {
  name: 'Success',

  components: {
    RoomIntro
  },

  setup () {
    const store = useStore()
    const router = useRouter()

    const dateCalResult = ref({}) // 平日假日天數

    const roomInfo = computed(() => {
      return store.getters.reservation
    })

    // 返回主頁(查看其他房型)
    const backToHome = () => {
      router.push({ path: '/' })
    }

    return { roomInfo, dateCalResult, backToHome }
  }
}
</script>

<style lang="scss" scoped>

section{
  display: flex;
  flex-direction: column;
}

.container{
  max-width: 1280px;
}

// header區塊(頁面標題)
.header{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3rem 0;
  &__logo{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    max-width: 100px;
    margin: 0 45px;
    font-size: 12px;
    letter-spacing: 8px;
    img{
      max-width: 50px;
      height: 50px;
      margin: auto;
    }
  }
  &__title{
    width: 100%;
    font-size: 110px;
    font-family: 'Dancing Script', cursive;
    letter-spacing: 20px;
    @include rwd(mobile){
      font-size: 55px;
    }
  }
}

// 主要區塊
.main{
  margin: 6rem 0;
  @include rwd(mobile){
    margin: 3rem 0;
  }
}

// 訂房人資訊
.booking-card{
  width: 80%;
  margin:0 auto;
  padding-top:20px;
  color:#496146;
  @include rwd(mobile){
    width: 100%;
  }
  &__wrapper{
    padding: 20px;
    border: 1px solid #A5BB94;
  }
  &__info{
    h4{
      font-size: 26px;
      color:#707070;
      letter-spacing: 5px;
    }
    ul li{
      width: 100%;
      padding: 20px 0;
      display: flex;
    }
    ul li span{
      padding-right: 10px;
    }
    ul li span:last-child{
      font-weight: bold;
    }
    &--guest{
      li{
        justify-content: flex-start;
      }
    }
    &--price{
      li span{
        width: 33.333%;
        text-align: right;
      }
      li span:first-child{
        text-align: left;
      }
    }
    &--price::after{
      content:'';
      display:block;
      width: 100%;
      height: 1px;
      background-color: #A5BB94;
    }
    &--amount{
      display: block;
      text-align: right;
      padding-top: 15px;
      font-weight: bold;
    }
  }
}

// 提醒資訊
.remind-info{
  width: 80%;
  margin: 5% auto;
  padding: 10px 0;
  border: 1px solid #A5BB94;
  color: #496146;
  background-color: #E3EAE2;
  @include rwd(mobile){
    width: 100%;
  }
  &__title{
    padding:10px 0 10px 30px;
    text-align:left;
    font-size: 12px;
  }
  &__checks{
    display: inline-block;
    width: 50%;
    padding-left: 30px;
    text-align: left;
    span{
      margin: auto;
      display: block;
      padding: 5px 0;
    }
  }
}

</style>
