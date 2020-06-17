/**
 * @name: 主题配置，运行环境，浏览器
 * @author: SunSeekerX
 * @Date: 2020-05-24 12:24:52
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-05-31 12:43:44
 */

export default {
  // baiduTongji: {
  //   // 百度统计key
  //   key: '3f0d7a82297c929467637543290d6e37',
  // },
  baiduTongji: false,
  /**
   * @name valine配置
   * @more https://valine.js.org/configuration.html
   */
  valineOptions: {
    // Valine 的初始化挂载器。可以是一个CSS 选择器，也可以是一个实际的HTML元素。
    el: '#vcomments',
    // leancloud 应用 appid
    appId: '4zCOQmtHXSOvLlPnTV108NOw-gzGzoHsz',
    // leancloud 应用 appkey
    appKey: 'sMdusoM6SbN9tgyCCKzTIwif',
    // 评论框占位提示符。
    placeholder: '请您理智发言，共建美好社会！',
    // Gravatar 头像展示方式。
    avatar: 'mm',
    // 当前文章页路径，用于区分不同的文章页，以保证正确读取该文章页下的评论列表。
    path: window.location.pathname,
    // 文章访问量统计
    visitor: true,
    // 代码高亮
    highlight: true,
    // 是否记录评论者IP
    recordIP: true,
  },
}
