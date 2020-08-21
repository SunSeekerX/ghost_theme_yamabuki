/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-05-28 18:05:10
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-08-21 16:25:28
 */

import { loadScript } from './index'

/**
 * @name 初始化Valine
 */
export function initValine(valineOptions) {
  if ($('#vcomments').length !== 0) {
    if (typeof window.Valine === 'undefined') {
      loadScript('//unpkg.com/valine/dist/Valine.min.js', () => {
        new Valine(valineOptions)
      })
    } else {
      new Valine(valineOptions)
    }
  }
}
