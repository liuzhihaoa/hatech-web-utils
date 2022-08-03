/**
 * 字符串工具
 */
export default class StringUtils {
  /**
   * 判断是否是字符串
   * @param {any} string 
   */
  isString(string) {
    return string && typeof string === 'string'
  }
  /**
   * 判断是否不是字符串
   * @param {any} string 
   */
  notString(string) {
    return !string || typeof string !== 'string'
  }
  /**
   * 判断是否为空字符串
   * @param {any} string 
   */
  isEmpty(string) {
    return string === undefined || string === null || string === ''
  }
  /**
   * 判断是否不是空字符串
   * @param {any} string 
   */
  notEmpty(string) {
    return !this.isEmpty(string)
  }
  /**
   * 下划线转驼峰
   * @param {String} string 
   */
  toHump(string) {
    if (this.notString(string) || this.isEmpty(string)) return string
    return string.replace(/\\_(\w)/g, (all, letter) => letter.toUpperCase())
  }
  /**
   * 驼峰转下划线
   * @param {String} string 
   */
  toLine(string) {
    if (this.notString(string) || this.isEmpty(string)) return string
    return string.replace(/([A-Z])/g, '_$1').toLowerCase()
  }
}
