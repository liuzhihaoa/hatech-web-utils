import ArrayUtils from '../packages/array'
import ObjectUtils from '../packages/object'
import FunctionUtils from '../packages/function'
import CalculateUtils from '../packages/calculate'
import DateUtils from '../packages/date'
import DomUtils from '../packages/dom'
import FileUtils from '../packages/file'
import StringUtils from '../packages/string'
import TreeUtils from '../packages/tree'
import CacheUtils from '../packages/cache'
import RegExpUtils from '../packages/regexp'

const ArrayUtil = new ArrayUtils()
const ObjectUtil = new ObjectUtils()
const FunctionUtil = new FunctionUtils()
const DateUtil = new DateUtils()
const StringUtil = new StringUtils()
const DomUtil = new DomUtils()
const CalculateUtil = new CalculateUtils()
const FileUtil = new FileUtils()
const TreeUtil = new TreeUtils()
const RegExpUtil = new RegExpUtils()
const CacheUtil = new CacheUtils()

/**
 * 初始化，如使用Vue，可直接使用Vue.use(UTILS)绑定到实例上；如不使用Vue.js，可直接运行此函数生成实例对象使用
 * @param {Vue} Vue Vue.js类对象
 */
const install = function (Vue) {
  const utils = {
    arr: ArrayUtil,
    array: ArrayUtil,
    function: FunctionUtil,
    obj: ObjectUtil,
    object: ObjectUtil,
    date: DateUtil,
    string: StringUtil,
    dom: DomUtil,
    calculate: CalculateUtil,
    file: FileUtil,
    tree: TreeUtil,
    regexp: RegExpUtil,
    cache: CacheUtil
  }
  if (Vue) {
    if (!Vue.prototype.$u) {
      Vue.prototype.$u = utils
    }
    Vue.prototype.$utils = utils
  }
  return utils
}

export default {
  install,
  ArrayUtils,
  ObjectUtils,
  FunctionUtils,
  DateUtils,
  StringUtils,
  DomUtils,
  FileUtils,
  TreeUtils,
  CalculateUtils,
  RegExpUtils,
  CacheUtils
}

export {
  ArrayUtil,
  ObjectUtil,
  FunctionUtil,
  DateUtil,
  StringUtil,
  DomUtil,
  FileUtil,
  TreeUtil,
  CalculateUtil,
  RegExpUtil,
  CacheUtil
}
