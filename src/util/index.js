export function greet () {
  const hour = new Date().getHours()
  let greeting = ''
  switch (true) {
    case hour > 6 && hour < 9:
      greeting = '早上好'
      break
    case hour >= 9 && hour <= 12:
      greeting = '上午好'
      break
    case hour > 12 && hour < 17:
      greeting = '下午好'
      break
    case hour >= 17 && hour < 19:
      greeting = '傍晚好'
      break
    case hour >= 19 && hour < 22:
      greeting = '晚上好'
      break
    default:
      greeting = '工作辛苦了'
  }
  return greeting
}
