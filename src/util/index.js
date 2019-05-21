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

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce (func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

// 获取指定URL参数
export function getUrlParams (url, name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = url.match(/\?(\S*)/)[1].match(reg)
  if (r != null) return (r[2])
  return null
}
