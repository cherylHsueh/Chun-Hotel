import { createStore } from 'vuex'

import { apiGetRoomList, apiGetRoomDetail } from '../api'

const types = {
  SET_ORIGIN_ROOMS_LIST: ' SET_ORIGIN_ROOMS_LIST',
  SET_ROOMS_LIST: ' SET_ROOMS_LIST',
  SET_CURRENT_ROOM_INFO: ' SET_CURRENT_ROOM_INFO',
  SET_RESERVATION: 'SET_RESERVATION',
  SET_IS_LOADING: 'SET_IS_LOADING'
}

export default createStore({
  state: {
    originRoomsList: [],
    roomsList: [],
    reservation: [],
    isLoading: false
  },

  mutations: {
    [types.SET_ORIGIN_ROOMS_LIST] (state, payload) {
      state.originRoomsList = payload
    },
    [types.SET_ROOMS_LIST] (state, payload) {
      state.roomsList = payload
    },
    [types.SET_RESERVATION] (state, payload) {
      state.reservation = payload
    },
    [types.SET_IS_LOADING] (state, payload) {
      state.isLoading = payload
    }
  },

  actions: {
    // 取得全部房型清單api
    async getRoomsList ({ dispatch, commit }) {
      try {
        dispatch('setIsLoading', true)
        const res = await apiGetRoomList()
        commit(types.SET_ORIGIN_ROOMS_LIST, res.data.items)
      } catch (error) {
        throw new Error(error.response.data.message)
      } finally {
        setTimeout(() => {
          dispatch('setIsLoading', false)
        }, 1000)
      }
    },

    // 取得單一房型細節api
    async getRoomDetail ({ commit, state }, id) {
      try {
        if (!id) {
          const idArr = []

          state.originRoomsList.forEach(item => idArr.push(item.id))

          Promise.all([
            apiGetRoomDetail(idArr[0]),
            apiGetRoomDetail(idArr[1]),
            apiGetRoomDetail(idArr[2]),
            apiGetRoomDetail(idArr[3]),
            apiGetRoomDetail(idArr[4]),
            apiGetRoomDetail(idArr[5])])
            .then(res => {
              const payload = []
              res.forEach(item => {
                payload.push(item.data.room[0])
              })

              commit(types.SET_ROOMS_LIST, payload)
            })
          return
        }

        const res = await apiGetRoomDetail(id)

        if (res.data.success) return res
      } catch (error) {
        throw new Error(error.response.data.message)
      }
    },

    // 存取預約成功資訊
    accessReservationInfo ({ commit }, info) {
      commit(types.SET_RESERVATION, info)
    },

    // 設定Loading狀態
    setIsLoading ({ commit }, boolean) {
      commit(types.SET_IS_LOADING, boolean)
    }
  },

  getters: {
    roomsList: (state) => state.roomsList,
    reservation: (state) => state.reservation,
    isLoading: (state) => state.isLoading
  }
})
