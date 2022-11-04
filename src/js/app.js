import config from '@/config/index'

import { initBaiduTongji } from './utils/baidu'
import { initValine } from './utils/comment'
// import { loadScript, loadCSS, logDynamicLoadFiles } from '@/js/utils/index'

/**
 * @name 监听点击A标签，非本站链接进行新标签打开
 */
function watchSiteLink() {
  // 链接跳转
  document.querySelectorAll('.gh-article a').forEach((block) => {
    if (
      block.getAttribute('href') !== null &&
      !/^(#|javascript).*/.test(block.getAttribute('href'))
    ) {
      block.setAttribute('target', '_blank')
    }
  })

  // $(document).on('click', null, function (event) {
  //   console.log(event)
  //   const { href, hostname } = event.target
  //   // 检查点击a标签的href是一个http url才进行新标签打开
  //   if (/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(href)) {
  //     if (hostname !== window.location.hostname) {
  //       event.preventDefault()
  //       window.open(href)
  //     }
  //   }
  //   console.log(
  //     /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(href),
  //     hostname,
  //     window.location.hostname
  //   )
  //   event.preventDefault()
  // })
}

/**
 * @name 文档准备好
 */
$(document).ready(() => {
  // 监听点击A标签，非本站链接进行新标签打开
  watchSiteLink()

  // 动画初始化
  AOS.init()

  // 百度统计
  if (config.baiduTongji.open) {
    initBaiduTongji()
  }

  // 评论
  // if (config.valineOptions.open) {
  //   initValine(config.valineOptions)
  // }

  // twikoo
  if ($('#tcomment').length !== 0 && window._ghost_env_twikoo_id) {
    twikoo.init({
      envId: window._ghost_env_twikoo_id, // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
      el: '#tcomment', // 容器元素
      // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
      // path: location.pathname, // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数
      // lang: 'zh-CN', // 用于手动设定评论区语言，支持的语言列表 https://github.com/imaegoo/twikoo/blob/main/src/client/utils/i18n/index.js
    })
  }
})
