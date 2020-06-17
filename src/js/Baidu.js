/**
 * @name: 百度相关的服务
 * @author: SunSeekerX
 * @Date: 2020-05-28 17:57:58
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-05-28 18:00:46
 */

import config from '@/config/index'

export function initBaiduTongji() {
  var _hmt = _hmt || []
  ;(function () {
    var hm = document.createElement('script')
    hm.src = `https://hm.baidu.com/hm.js?${config.baiduTongji.key}`
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  })()
}
