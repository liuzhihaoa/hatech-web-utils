/**
 * 数组相关工具函数
 */
export default class ArrayUtils {

  /**
   * 是否是数组
   * @param {*} arr 
   */
  isArray(arr) {
    return toString.apply(arr) === '[object Array]'
  }


  /**
   * 是否是数组
   * @param {*} arr 
   */
  isArray(arr) {
    return toString.apply(arr) === '[object Array]'
  }
  /**
   * 取数组中最大值，compare函数传入对比方法
   * @param {Array} str 需要对比的数组
   * @param {Function} compare 对比函数，默认直接对比 
   */
  max(array = [], compare = (a, b) => a > b) {
    if (!Array.isArray(array)) return
    if (typeof compare !== 'function') return
    if (array.length === 0) return
    let max = array[0]
    array.forEach((item, index) => {
      max = compare(max, item, array) ? max : item
    })
    return max
  }
  /**
   * 取最大数字
   * @param {Array} arrary
   */
  maxOfNumber(array) {
    if (!array || !Array.isArray(array)) return
    return Math.max(...array)
  }
}
