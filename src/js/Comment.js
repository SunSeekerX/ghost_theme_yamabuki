/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-05-28 18:05:10
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-05-29 13:55:11
 */

import { loadScript } from '@/js/utils/index'

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
