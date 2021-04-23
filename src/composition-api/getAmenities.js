export function amenities (params) {
  const keyArr = Object.keys(params)

  const map = new Map([
    ['Air-Conditioner', '冷氣'],
    ['Breakfast', '早餐'],
    ['Child-Friendly', '適合兒童'],
    ['Great-View', '景觀'],
    ['Mini-Bar', '小吧檯'],
    ['Pet-Friendly', '寵物友善'],
    ['Refrigerator', '冰箱'],
    ['Room-Service', '客房服務'],
    ['Smoke-Free', '禁止吸煙'],
    ['Sofa', '沙發'],
    ['Television', '電視'],
    ['Wi-Fi', 'wifi']
  ])

  const have = []

  keyArr.forEach(item => {
    if (params[item]) have.push(map.get(item))
  })

  return have.join()
}
