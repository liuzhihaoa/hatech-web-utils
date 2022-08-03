import Dayjs from 'dayjs'

/**
 * 时间工具函数
 * dayjs https://day.js.org/zh-CN/
 */
export default class DateUtils {
  constructor() {
    this.dayjs = Dayjs
    this.formatText = 'YYYY-MM-DD HH:mm:ss'
  }
  /**
   * 判断是否是date
   * @param {any} obj 判断对象
   */
  isDate(obj) {
    return obj && typeof obj === 'object' && obj instanceof Date
  }
  /**
   * 是否是dayjs对象
   * @param {any} obj
   */
  isDayjs(obj) {
    return obj && typeof obj === 'object' && obj instanceof Dayjs
  }
  /**
   * 对比两个时间
   * @param {Date|Dayjs} one 第一个值
   * @param {Date|Dayjs} otherOne 第二个值
   * @return 0: 相同，-1:第一个值时间在前，第二个值时间靠后，1：第一个值时间在后，第二个值时间靠前
   */
  compare(one, otherOne) {
    if (!this.isDate(one) || !this.isDayjs(one)) return undefined
    if (!this.isDate(otherOne) || !this.isDayjs(otherOne)) return undefined

    one = this.isDayjs(one) ? one : Dayjs(one)
    otherOne = this.isDayjs(otherOne) ? otherOne : Dayjs(otherOne)
    if (one.isSame(otherOne)) return 0
    return one.isBefore(otherOne) ? -1 : 1
  }
  /**
   * 格式式时间
   * @param {Date} date 时间
   * @param {String} format 格式
   * @return 格式化后的字符串
   */
  format(date, format) {
    if (!date) return date
    format = format || this.formatText
    if (this.isDayjs(date)) return date.format(format)
    return Dayjs(date).format(format)
  }
  /**
   * 当前时间
   * @param {String} format 
   * @return 当前时间的格式化字符串
   */
  current(format) {
    return this.format(Dayjs(), format)
  }
  /**
   * 计算时间，并以分秒形式返回
   * @param {Int} milliseconds 毫秒数
   * @return 时间长度，最多到分
   */
  reckon(milliseconds) {
    if (typeof milliseconds !== 'number') return
    const secords = milliseconds / 1000
    return `${Math.ceil(secords / 60)}\`${secords % 60}\`\``
  }
  /**
   * 时间过了多久
   * @param {Number} timestamp 时间戳
   * @param {Object} config 配置
   * @return {String} 过了多久的时间
   */
  timeago(timestamp, config = {}) {
    const {
      mill = false,
      returnType = 'string',
      levels = {
        day: true, hour: true, minute: true, secord: true
      }
    } = config
    let day, hour, minute, secord;
    const result = {}
    if (mill) timestamp = timestamp / 1000
    if (levels.day) {
      day = Math.floor(timestamp / (24 * 60 * 60))
      timestamp = timestamp % (24 * 60 * 60)
      result.day = day
    }
    if (levels.hour) {
      hour = Math.floor(timestamp / (60 * 60))
      timestamp = timestamp % (60 * 60)
      result.hour = hour
    }
    if (levels.minute) {
      minute = Math.floor(timestamp / 60)
      result.minute = minute
    }
    if (levels.secord) {
      secord = Math.floor(timestamp % 60)
      result.secord = secord
    }
    if (returnType === 'string') {
      return `${result.day && result.day > 0 ? result.day + '天' : ''}${result.hour && result.hour > 0 ? result.hour + '时' : ''}${result.minute && result.minute > 0 ? result.minute + '分' : ''}${result.secord && result.secord > 0 ? result.secord + '秒' : ''}`
    }
    return result
  }
}
