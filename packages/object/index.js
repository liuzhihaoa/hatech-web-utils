/**
 * 数组相关工具函数
 */
export default class ObjectUtils {
  /**
   * 是否是对象
   * @param {*} obj 
   */
  isObject(obj) {
    return toString.apply(obj) === '[object Object]'
  }
  /**
   * 混合多个对象，按传入顺序覆盖
   * @param {Array[Object]} args
   */
  mixin(...args) {
    const self = this
    const result = {}

    function deep(obj, res) {
      Object.keys(obj).forEach(key => {
        const value = obj[key]
        if (self.isObject(value)) {
          if (!res[key]) res[key] = {}
          deep(value, res[key])
        } else {
          res[key] = value
        }
      })
    }

    args.forEach(arg => {
      if (!self.isObject(arg)) {
        return
      }
      deep(arg, result)
    })
    return result
  }
}
