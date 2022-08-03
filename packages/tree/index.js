/**
 * 树形数据处理工具
 */
export default class TreeUtils {
  /**
   * 递归设置属性
   * @param  {Object} obj 数据源
   * @param  {String} key 设置的键名
   * @param  {Any} value 设置的值
   * @param  {Function} handle? 处理函数，有值是会判断以处理函数返回值为准
   */
  deepSet(obj, key, value, handle) {
    if (Array.isArray(obj)) {
      obj.forEach(item => this.deepSet(item, key, value, handle))
    } else {
      if (handle && typeof handle === 'function') {
        obj[key] = handle(obj, key, value)
      } else {
        obj[key] = value
      }
      if (obj.children && obj.children.length > 0) {
        obj.children.forEach(v => this.deepSet(v, key, value, handle))
      }
    }
  }
  /**
   * 获取数据
   * @param {*} menus 数据源
   * @param {*} value 数据值
   * @param {*} keyDef 数据值对应的字段 
   */
  deepGet(menus, value, keyDef) {
    let result;
    (function func(subMenus) {
      if (result || !subMenus) return
      if (toString.apply(subMenus) === '[object Object]' && subMenus.children) {
        return func(subMenus.children)
      }
      subMenus.forEach(m => {
        // 如果keydef为函数时，回调当前对象和值
        if (
          (typeof keyDef === 'function' && keyDef(m, value))　|| 
          (typeof keyDef === 'string' && m[keyDef] === value) 
        ) {  
          result = m
          return
        }
        
        if (m.children) return func(m.children)
      })
    })(menus)
    return result
  }
  /**
   * 获取数据路径
   * @param {*} menus 数据源
   * @param {*} value 对应的值
   * @param {*} keyDef 取值字段
   * @param {*} handle 回调处理函数
   */
  path(menus, value, keyDef, handle) {
    let result = []
    let target;
    (function func(menu, paths = []) {
      if (target) return false
      if (menu[keyDef] === value) {
        target = menu
        result = paths
        if (handle) handle(menu)
      } else if (menu.children && menu.children.length) {
        menu.children.forEach(m => {
          func(m, [...paths, m])
        })
      }
    })(Array.isArray(menus) ? { children: menus } : menus)
    return result
  }
  /**
   * 收缩展开的树形数据，形成树形数据结构
   * @param {Array} datas 数据源
   * @param {Object} options 配置参数
   * @param {String | Number} options.parent 根节点值
   * @param {Any} options.parent 根节点数据值
   * @param {String} options.props 树形数据配置参数
   * @param {Stinrg} options.props.pid 父节点字段
   * @param {Stinrg} options.props.id 节点唯一主键字段
   * @param {Stinrg} options.props.children 子节点字段
   */ 
  shrink(datas, options = {}) {
    const { parent = '-1', props = {} } = options
    const { pid = 'pid', id = 'id', children = 'children' } = props
    function deep(dataSource, parentId) {
      const childs = dataSource.filter(item => item[pid] === parentId)
      if (childs.length > 0) {
        childs.forEach(item => {
          const itemChildren = deep(dataSource, item[id])
          if (itemChildren && itemChildren.length > 0) {
            item[children] = itemChildren
          }
        })
      } 
      return childs
    }
    const result = deep(datas, parent)
    return result
  }
}