/**
 * 函数工具
 */
export default class FunctionUtil {
  /**
   * 触发函数，如值不是函数，则直接返回
   * @param {*} value 
   * @param  {...any} args 
   */
  trigger(value, ...args) {
    if (typeof value === 'function') {
      return value(...args)
    }
    return value
  }
}