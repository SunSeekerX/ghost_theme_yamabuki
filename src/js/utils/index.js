/**
 * @name: 全局工具js
 * @author: SunSeekerX
 * @Date: 2020-05-28 17:23:25
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-05-29 14:08:47
 */

const loadFiles = {
  js: [],
  css: [],
}

/**
 * 动态加载JS文件的方法
 * Load javascript file method
 *
 * @param {String}   fileName              JS文件名
 * @param {Function} [callback=function()] 加载成功后执行的回调函数
 * @param {String}   [into='head']         嵌入页面的位置
 */
export function loadScript(fileName, callback = () => {}, into = 'body') {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = fileName
  script.onload = function () {
    loadFiles.js.push(fileName)
    callback()
  }
  if (into === 'head') {
    document.getElementsByTagName('head')[0].appendChild(script)
  } else {
    document.body.appendChild(script)
  }
}

/**
 * 动态加载CSS文件的方法
 * Load css file method
 *
 * @param {String}   fileName              CSS文件名
 * @param {Function} [callback=function()] 加载成功后执行的回调函数
 * @param {String}   [into='head']         嵌入页面的位置
 */
export function loadCSS(fileName, callback = () => {}, into = 'body') {
  const css = document.createElement('link')
  css.type = 'text/css'
  css.rel = 'stylesheet'
  css.onload = css.onreadystatechange = () => {
    loadFiles.css.push(fileName)
    callback()
  }
  css.href = fileName
  if (into === 'head') {
    document.getElementsByTagName('head')[0].appendChild(css)
  } else {
    document.body.appendChild(css)
  }
}

/**
 * @name 打印动态加载的资源
 */
export function logDynamicLoadFiles() {
  console.log('已经动态加载资源：', loadFiles)
}
