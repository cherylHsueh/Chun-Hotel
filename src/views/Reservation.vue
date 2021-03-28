<template>
  <header class="mosaic-header">
    <div class="mosaic-header__items">
      <div class="mosaic-header__item mosaic-header__item--1">
        <img src="https://images.unsplash.com/photo-1515511856280-7b23f68d2996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80" alt="">
      </div>

      <div class="mosaic-header__item mosaic-header__item--2">
        <img src="https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="">
      </div>

      <div class="mosaic-header__item mosaic-header__item--3">
        <img src="https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" alt="">
      </div>
    </div>
    <div class="mosaic-header__title">
      <span>Single Room</span>
    </div>
  </header>

  <main class="main">
    <div class="container">
      <div class="row">
        <section class="cl-s-12 cl-md-12 cl-xl-6">
          <div class="booking-card">
            <div class="booking-card__wrapper">
              <div class="booking-card__form">
                <!-- 預約表單 -->
                <form class="form">
                  <!-- 日期 -->
                  <div class="form__field">
                    <label for="date">日期</label>
                    <DatePicker
                      v-model="range"
                      is-range
                      color="green"
                      class="form__field--date"
                      :masks="masks"
                      :min-date="new Date()"
                      :popover="{
                        placement: 'bottom',
                        visibility: 'click'
                      }"
                    >
                      <template #default="{ inputValue,inputEvents}">
                        <input
                          :value="range.start?inputValue.start:''"
                          placeholder="入住"
                          v-on="inputEvents.start "
                        >
                        <img src="../assets/images/svg/arrow-right.svg" alt="arrow-right">
                        <input
                          :value="range.start?inputValue.end:''"
                          placeholder="退房"
                          v-on="inputEvents.end"
                        >
                      </template>
                    </DatePicker>
                  </div>
                  <!-- 費用計算 -->
                  <div class="form__field">
                    <div class="form__field--fee">
                      <span>平日(一～四)</span>
                      <span>$1380 x 2 晚</span>
                      <span>$2760</span>
                    </div>
                    <div class="form__field--fee">
                      <span>假日(六～日)</span>
                      <span>$1500 x 1 晚</span>
                      <span>$1500</span>
                    </div>
                    <div class="form__field--amount">
                      <span>$4260</span>
                    </div>
                  </div>
                  <!-- 姓名 -->
                  <div class="form__field">
                    <label for="guestname">姓名</label>
                    <input id="guestname" type="text" name="guestname">
                  </div>
                  <!-- 電話 -->
                  <div class="form__field">
                    <label for="tel">電話</label>
                    <input id="tel" type="text" name="tel">
                  </div>
                  <!-- 確定預定日期按鈕 -->
                  <div class="form__btn-wrapper">
                    <button>確定預定日期</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section class="cl-s-12 cl-md-12 cl-xl-6 flex-wrap">
          <div>
            <div class="room-info">
              <div class="room-info__title">
                <span>預約房間：</span>
                <h2> Single Room</h2>
              </div>
              <p class="room-info__description">
                Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.
              </p>
              <ul class="room-info__intro-list">
                <li class="room-info__intro-item">
                  房間限制人數：1人
                </li>
                <li>房間大小：18平方公尺</li>
                <li>1張single床,1間獨立衛浴</li>
              </ul>
            </div>
            <ul class="room-amenities">
              <li>wifi,</li>
              <li>早餐,</li>
              <li>電話,</li>
              <li>空調,</li>
              <li>冰箱,</li>
              <li>禁止吸煙,</li>
              <li>可帶寵物</li>
            </ul>
            <div class="room-checks">
              <span class="room-checks__title fSize-12">checkin 時間</span>
              <span class="room-checks__time fSize-24">15:00~21:00</span>
            </div>
            <div class="room-checks">
              <span class="room-checks__title fSize-12">最晚checkout時間</span>
              <span class="room-checks__time  fSize-24">10:00</span>
            </div>
            <div class="room-price">
              <span class="room-price__title fSize-12">平日(一～四)</span>
              <span class="room-price__per-night fSize-24">$1380</span>
            </div>
            <div class="room-price">
              <span class="room-price__title fSize-12">假日(五～日)</span>
              <span class="room-price__per-night fSize-24">$1500</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
  name: 'Reservation',
  setup () {
    // const dayjs = inject('dayjs')

    const range = ref({
      start: null,
      end: null
    })
    const masks = reactive({
      title: 'YYYY MMMM'
    })

    // watch([() => range.value.start, () => range.value.end], ([newStart, newEnd]) => {
    //   if (!newStart | !newEnd) return
    //   console.log('newStart', newStart)
    //   console.log('newEnd', newEnd)
    // })
    const dragRange = ref(null)

    watch(
      () => range.value.start,
      (newStart) => {
        if (newStart) { console.log('newStart', newStart) }
      })

    watch(dragRange, () => {
      console.log('root', dragRange.value.value)
      // console.log(JSON.stringify(val))
    })

    return { range, masks, dragRange }
  }
}
</script>

<style lang="scss" scoped>
// 馬賽克拼板
.mosaic-header{
  position: relative;
  height: 30vw;
  @include rwd(mobile){
    height: 50vw;
  }
  &__items{
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(2,15vw);
    @include rwd(mobile){
      grid-template-rows: repeat(2,25vw);
    }
  }
  &__item{
    position: relative;
    overflow: hidden;
    &--1{
      grid-row: 1/-1;
    }
    &--2{
      grid-column: 2/-1;
    }
    &--3{
      grid-column: 2/-1;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 70%;
      transform: scale(1);
      transition: transform .8s,-webkit-transform .8s;
    }
  }
  &__title{
    width: 100%;
    text-align: right;
    position: absolute;
    bottom: -20px;
    @include rwd(mobile){
      bottom: -5px;
    }
    @include rwd(medium){
      bottom: -15px;
    }
    span{
      padding-right: 15%;
      font-size: 110px;
      font-family: 'Dancing Script', cursive;
      letter-spacing: 20px;
      @include rwd(mobile){
        padding:0;
        font-size: 40px;
        letter-spacing: 10px;
      }
      @include rwd(medium){
        padding:0;
        font-size: 64px;
      }
    }
  }
}

// 主要區塊
.main{
  margin: 3rem 0;
}

.container{
  max-width: 1200px;
}

.booking-card{
  //  width: 100%;
  margin: auto;
  background: #E3EAE2;
  &__wrapper{
    padding: 20px;
  }
}

// 預約表格
.form{
  &__field{
    display: flex;
    flex-wrap: wrap;
    padding: 15px 0px;
    label{
      padding-bottom: 10px;
    }
    input{
      width: 100%;
      height: 55px;
      outline:none;
      color:#425752;
      font-size: 20px;
      padding-left: 20px;
      border:1px solid #A5BB94;
    }
    &--date{
      width: 100%;
      position: relative;
      input{
        width: 50%;
      }
      img{
        position: absolute;
        width: 30px;
        top: 50%;
        left: 45%;
        transform: translate(-50%, -50%);
      }
    }
    &--date input:first-child {
      border-right:none;
    }
    &--date input:nth-child(3) {
      border-left:none;
    }
    &--fee{
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 15px 0;
      position: relative;
    }
    &--fee:nth-child(2):after{
      content: '';
      display: inline-block;
      width: 100%;
      height: 1px;
      background-color: #A5BB94;
      position: absolute;
      bottom: 0;
    }
    &--amount{
      width: 100%;
      text-align: right;
      padding: 10px 0 0 0;
      span{
        font-weight: bold;
        font-size: 23px;
      }
    }
  }
  &__fee::after{
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #A5BB94;
    opacity: .8;
  }
  &__btn-wrapper{
    button{
      width: 100%;
      padding: 27.5px 0;
      border:none;
      font-size: 20px;
      color: #fff;
      background-color: #496146;
    }
  }
}

// 房間相關資訊
.room-info{
  text-align: left;
  &__title{
    font-size: 26px;
    font-weight: 200;
    padding: 10px 0;
    h2{
      padding:15px 0;
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
  padding: 10px 0;
  letter-spacing: 2px;
  background-color: #E3EAE2;
  @include rwd (mobile){
    flex-wrap: wrap;
    line-height: 25px;
  }
  li{

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
