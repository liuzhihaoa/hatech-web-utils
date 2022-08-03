
export default class FileUtils {
  /**
   * 下载二进制文件
   * @param {*} binary 二进制
   * @param {*} fileName 下载的文件名
   */
  downBinary(binary, config) {
    const { fileName, contentType } = config
    const eleLink = document.createElement('a')
    eleLink.download = fileName || `${new Date().valueOf()}`
    eleLink.style.display = 'none'
    const blobConfig = {}
    if (contentType) blobConfig.type = contentType
    const blob = new Blob([binary], blobConfig)
    eleLink.href = URL.createObjectURL(blob)
    document.body.appendChild(eleLink)
    eleLink.click()
    document.body.removeChild(eleLink)
  }
  /**
   * 预览文件
   * @param {Object} params 预览参数
   * @param {String} params.url 文件url
   * @param {String} params.name 预览窗口名字
   * @param {String} params.host 预览服务host地址
   * @param {String} params.port 预览服务端口
   */
  preview(params = {}) {
    const { url, name, host, port } = params
    const { hostname, protocol } = location
    const apiUrl = server ? `${host}:${port}` : `${protocol}//${hostname}:${port}`
    const previewUrl = `${protocol}//${hostname}/img/${url}`
    const src = `${apiUrl}/onlinePreview?url=${previewUrl}`
    const newWindowStyle = 'width=' + window.screen.availWidth +
      ',height=' + window.screen.availHeight +
      ',top=0,left=0,screenX=0,toolbar=no,resizable=no,status=no,menubar=no,location=no,scrollbars=no,fullscreen=1'
    window.open(src, name, newWindowStyle)
  }
  /**
   * 文件预览
   * @param {*} apiUrl 二进制
   * @param {*} previewUrl 预览的文件路径
   * @param {*} windowName 预览窗口名称
   */
  previewFile(apiUrl, previewUrl, windowName) {
    const src = `${apiUrl}/onlinePreview?url=${previewUrl}`
    const newWindowStyle = 'width=' + window.screen.availWidth +
      ',height=' + window.screen.availHeight +
      ',top=0,left=0,screenX=0,toolbar=no,resizable=no,status=no,menubar=no,location=no,scrollbars=no,fullscreen=1'
    window.open(src, windowName, newWindowStyle)
  }
}
