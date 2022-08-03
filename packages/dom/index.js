
export default class DomUtils {
  /**
   * 获取输入框DOM的当前光标位置
   * @param {DOM} dom DOM对象
   */
  getCursortPosition(dom) {
    let CaretPos = 0; // IE Support
    if (document.selection) {
      dom.focus();
      let Sel = document.selection.createRange()
      Sel.moveStart('character', -dom.value.length)
      CaretPos = Sel.text.length
    } else if (dom.selectionStart || dom.selectionStart * 1 === 0) {
      // Firefox support
      CaretPos = dom.selectionStart
    }
    return (CaretPos)
  }
  /**
   * 设置光标在DOM中的位置
   * @param {DOM} dom DOM对象
   * @param {Number} pos 位置
   */
  setCaretPosition(dom, pos) {
    pos = pos === 0 ? dom.value.length : pos
    if (dom.setSelectionRange) {
      dom.focus()
      dom.setSelectionRange(pos, pos)
    } else if (dom.createTextRange) {
      let range = dom.createTextRange()
      range.collapse(true)
      range.moveEnd('character', pos)
      range.moveStart('character', pos)
      range.select()
    }
  }
  /**
   * 聚集报错元素
   * @param {String} errorClassName 错误元素类名
   */
  forceError(errorClassName = 'is-error') {
    const isError = document.getElementsByClassName(errorClassName)
    if (!isError || isError.length === 0) return
    if (isError[0].querySelector('input')) {
      isError[0].querySelector('input').focus()
    } else if (isError[0].querySelector('textarea')) {
      isError[0].querySelector('textarea').focus()
    }
  }
}
