/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-06-15 17:22:31
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-09-09 16:47:24
 */

import config from '@/config/index'

import { initBaiduTongji } from './utils/baidu'
import { initValine } from './utils/comment'
// import { loadScript, loadCSS, logDynamicLoadFiles } from '@/js/utils/index'

/**
 * @name 监听点击A标签，非本站链接进行新标签打开
 */
function watchSiteLink() {
  $(document).on('click', 'a', function (event) {
    const { href, hostname } = event.target
    // 检查点击a标签的href是一个http url才进行新标签打开
    if (/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(href)) {
      if (hostname !== window.location.hostname) {
        event.preventDefault()
        window.open(href)
      }
    }
  })
}

/**
 * @name 文档准备好
 */
$(document).ready(() => {
  // 监听点击A标签，非本站链接进行新标签打开
  watchSiteLink()

  // 动画初始化
  AOS.init();

  // 百度统计
  if (config.baiduTongji.open) {
    initBaiduTongji()
  }

  // 评论
  if (config.valineOptions.open) {
    initValine(config.valineOptions)
  }
})
