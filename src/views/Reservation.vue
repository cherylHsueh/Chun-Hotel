<template>
  <template v-if="Object.keys(roomInfo).length">
    <!-- Header -->
    <header class="mosaic-header">
      <div class="mosaic-header__items">
        <div class="mosaic-header__item mosaic-header__item--1">
          <img :src="roomInfo.imageUrl[0]" alt="">
        </div>

        <div class="mosaic-header__item mosaic-header__item--2">
          <img :src="roomInfo.imageUrl[1]" alt="">
        </div>

        <div class="mosaic-header__item mosaic-header__item--3">
          <img :src="roomInfo.imageUrl[2]" alt="">
        </div>
      </div>
      <div class="mosaic-header__title">
        <span>{{ roomInfo.name }}</span>
      </div>
    </header>

    <!-- 主要區塊 -->
    <main class="main">
      <div class="container">
        <!-- 返回主頁 -->
        <a a class="back-link" @click="backToHome">
          <fa-icon icon="chevron-left"></fa-icon>
          <span>查看其他房型</span>
        </a>

        <div class="row">
          <!-- 表單 -->
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
                        v-model="dateRange"
                        is-range
                        color="green"
                        class="form__field--date"
                        :masks="masks"
                        :min-date="minDate"
                        :max-date="maxDate"
                        :popover="{
                          placement: 'bottom',
                          visibility: 'click'
                        }"
                        :disabled-dates="disabledDates"
                      >
                        <template #default="{ inputValue,inputEvents}">
                          <input
                            :value="dateRange.start?inputValue.start:''"
                            placeholder="入住"
                            readonly
                            v-on="inputEvents.start "
                          >
                          <img src="../assets/images/svg/arrow-right.svg" alt="arrow-right">
                          <input
                            :value="dateRange.start?inputValue.end:''"
                            placeholder="退房"
                            readonly
                            v-on="inputEvents.end"
                          >
                        </template>
                      </DatePicker>
                    </div>

                    <!-- 費用計算 -->
                    <transition
                      mode="out-in"
                      enter-active-class="animate__animated animate__fadeInLeft"
                    >
                      <div v-if="calculateShow" class="form__field">
                        <div class="form__field--fee">
                          <span>平日(一～四)</span>
                          <span>${{ roomInfo.normalDayPrice }} x {{ dateCalResult.weekdays }} 晚</span>
                          <span>${{ roomInfo.normalDayPrice * dateCalResult.weekdays }}</span>
                        </div>
                        <div class="form__field--fee">
                          <span>假日(六～日)</span>
                          <span>${{ roomInfo.holidayPrice }} x {{ dateCalResult.holiday }} 晚</span>
                          <span>${{ roomInfo.holidayPrice * dateCalResult.holiday }}</span>
                        </div>
                        <div class="form__field--amount">
                          <span>${{ dateCalResult.amount }}</span>
                        </div>
                      </div>
                    </transition>

                    <!-- 姓名 -->
                    <div class="form__field">
                      <label for="guestname">姓名</label>
                      <input
                        id="guestname"
                        v-model.trim="guestInfo.name"
                        type="text"
                      >
                    </div>
                    <!-- 電話 -->
                    <div class="form__field">
                      <label for="tel">電話</label>
                      <input
                        id="tel"
                        v-model="guestInfo.tel"
                        type="tel"
                        onkeyup="value=value.replace(/[^\d]/g,'')"
                      >
                    </div>
                    <!-- 確定預定日期按鈕 -->
                    <div class="form__btn-wrapper">
                      <button @click.prevent="submit">
                        確定預定日期
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <!-- 房型資訊 -->
          <section class="cl-s-12 cl-md-12 cl-xl-6 flex-wrap">
            <room-intro :room-info="roomInfo" is-reservation></room-intro>
          </section>
        </div>
      </div>
    </main>
  </template>
</template>

<script>
import { ref, reactive, onMounted, computed, inject, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { getAmenities, getRoomDesc, getTotalPrice } from '../composition-api'
import { apiPostBooking } from '../api'
import RoomIntro from '@/components/RoomIntro'

export default {
  name: 'Reservation',

  components: { RoomIntro },

  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const dayjs = inject('dayjs')
    const Swal = inject('Swal')

    const dateRange = ref({ start: null, end: null })// 日期範圍
    const masks = reactive({ title: 'YYYY MMMM' }) // 日期相關參數
    const guestInfo = ref({})// 訂房人資訊
    const roomInfo = ref({}) // 房型資訊
    const roomDesc = ref({}) // 房型描述
    const amenities = ref({}) // 房間設施
    const isBookedDate = ref([]) // 被預訂日期
    const dateCalResult = ref({}) // 平日假日天數
    const calculateShow = ref(false) // 房價計算顯示

    onMounted(async () => {
      try {
        store.dispatch('setIsLoading', true)

        const res = await store.dispatch('getRoomDetail', route.params.id)
        roomInfo.value = res.data.room[0]
        isBookedDate.value = res.data.booking

        // 取得房型說明
        roomDesc.value = getRoomDesc(roomInfo.value.descriptionShort)

        // 取得房間設施
        amenities.value = getAmenities(roomInfo.value.amenities)
      } catch (error) {
        Swal.fire({
          title: 'error',
          icon: 'error'
        })
      } finally {
        setTimeout(() => {
          store.dispatch('setIsLoading', false)
        }, 1000)
      }
    })

    // 禁止選取日期
    const disabledDates = computed(() => {
      const disabled = []
      isBookedDate.value.forEach(item => {
        disabled.push(item.date)
      })
      return disabled
    })

    // 選取日期大於今日
    const minDate = computed(() => dayjs(new Date()).add(1, 'day').format('YYYY-MM-DD'))

    // 選取日期限制90天內
    const maxDate = computed(() => dayjs(new Date()).add(90, 'day').format('YYYY-MM-DD'))

    // 驗證必填欄位
    const isRequired = computed(() => {
      return !dateRange.value.start || !dateRange.value.end || !guestInfo.value.name || !guestInfo.value.tel
    })

    // 計算平日假日天數及費用
    watch([() => dateRange.value.start, () => dateRange.value.end], ([newStart, newEnd]) => {
      if (newStart && newEnd) {
        dateCalResult.value = getTotalPrice(dateRange.value, roomInfo.value)
        setTimeout(() => {
          calculateShow.value = true
        }, 500)
      }
    })

    // 確認送出
    const submit = async () => {
      try {
        if (isRequired.value) {
          return Swal.fire({
            title: '尚有未填寫資料',
            text: '請輸入完整訂房資訊',
            icon: 'warning'
          })
        }

        store.dispatch('setIsLoading', true)

        const startDate = dayjs(dateRange.value.start).format('YYYY-MM-DD')
        const endDate = dayjs(dateRange.value.end).format('YYYY-MM-DD')
        const date = [startDate, endDate]

        const payload = {
          date,
          name: guestInfo.value.name,
          tel: guestInfo.value.tel
        }

        const res = await apiPostBooking(route.params.id, payload)

        if (res.data.success) {
          router.push({ name: 'Success' })
          const payload = {
            ...res.data,
            dateCalResult: dateCalResult.value
          }
          store.dispatch('accessReservationInfo', payload)
        }
      } catch (error) {
        Swal.fire({
          title: '預約失敗',
          text: error.response.data.message,
          icon: 'error'
        })
      } finally {
        store.dispatch('setIsLoading', false)
      }
    }

    // 返回主頁(查看其他房型)
    const backToHome = () => {
      router.push({ path: '/' })
    }

    return { dateRange, masks, guestInfo, roomInfo, roomDesc, amenities, submit, disabledDates, minDate, maxDate, dateCalResult, calculateShow, backToHome }
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
  max-width: 1280px;
}

.booking-card{
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
      border-radius: 0;
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
    &--subtotal{
      width:100%;
      padding:10px
    }
    &--fee{
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 15px 0;
      position: relative;
      span{
        width: 33.333%;
      }
    }
    &--fee span:first-child{
      text-align: left;
    }
    &--fee span:last-child{
      text-align: right;
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

</style>
