import axios from 'axios'

const hotel = axios.create({
  baseURL: 'https://challenge.thef2e.com/api/',
  headers: {
    common: {
      contentType: 'application/json',
      Authorization: 'Bearer 7A5lqccmX49Cc8ofgH8hFFz326yLDN6KEgwFR5sPDNZTAHyrtXA7SZiIjSyr'
    }
  }
})

// [GET]取得所有房型列表
export const getRoomsList = () => hotel.get('/thef2e2019/stage6/rooms')

// [GET]取得單一房型細節
export const getRoomDetail = id => hotel.get(`/thef2e2019/stage6/room/${id}`)

// [POST]預約房型
export const booking = (id, payload) => hotel.post(`/thef2e2019/stage6/room/${id}`, payload)
