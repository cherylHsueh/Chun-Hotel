import { ref } from 'vue'
import dayjs from 'dayjs'

export const weekdays = ref(0)
export const holiday = ref(0)
export const amount = ref(0)

export function totalPrice (dateRange, roomInfo) {
  let { start, end } = dateRange
  const { normalDayPrice, holidayPrice } = roomInfo

  weekdays.value = 0
  holiday.value = 0
  amount.value = 0

  while (dayjs(start).isBefore(dayjs(end))) {
    const days = dayjs(start).get('day')

    days === 6 || days === 0 ? holiday.value++ : weekdays.value++

    start = dayjs(start).add(1, 'day')
  }

  const weekdaysSubtotal = normalDayPrice * weekdays.value
  const holidaySubtotal = holidayPrice * holiday.value
  amount.value = weekdaysSubtotal + holidaySubtotal

  return { weekdays, holiday, amount }
}
