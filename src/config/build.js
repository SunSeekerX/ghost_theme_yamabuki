/**
 * @name: 打包config配置信息，打包进入hbs模板的信息，包括网站备案信息等
 * @author: SunSeekerX
 * @Date: 2020-05-31 12:11:27
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-05-31 12:19:30
 */

module.exports = {
  /**
   * @name 备案信息
   */
  record: {
    // 网站备案信息
    siteRecord: {
      // 信息
      name: '湘ICP备19015624号',
      // 网站备案查询地址：以下为默认
      url: 'http://beian.miit.gov.cn/',
    },

    // 公安备案信息
    publicRecord: {
      // 信息
      name: '',
      // 地址
      url: '',
    },
  },
}
