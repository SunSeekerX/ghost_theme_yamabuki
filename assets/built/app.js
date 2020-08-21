/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @name: 主题配置，运行环境，浏览器
 * @author: SunSeekerX
 * @Date: 2020-05-24 12:24:52
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-08-21 15:48:29
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * @name 百度统计配置
   */
  baiduTongji: {
    // 是否打开
    open: true,
    // 百度统计key
    key: '3f0d7a82297c929467637543290d6e37'
  },

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
    recordIP: true
  }
});

/***/ }),

/***/ "./src/js/Baidu.js":
/*!*************************!*\
  !*** ./src/js/Baidu.js ***!
  \*************************/
/*! exports provided: initBaiduTongji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBaiduTongji", function() { return initBaiduTongji; });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/index */ "./src/config/index.js");
/**
 * @name: 百度相关的服务
 * @author: SunSeekerX
 * @Date: 2020-05-28 17:57:58
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-08-21 15:14:36
 */

console.log(_config_index__WEBPACK_IMPORTED_MODULE_0__["default"]);
function initBaiduTongji() {
  var _hmt = _hmt || [];

  (function () {
    var hm = document.createElement('script');
    hm.src = `https://hm.baidu.com/hm.js?${_config_index__WEBPACK_IMPORTED_MODULE_0__["default"].baiduTongji.key}`;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
  })();
}

/***/ }),

/***/ "./src/js/Comment.js":
/*!***************************!*\
  !*** ./src/js/Comment.js ***!
  \***************************/
/*! exports provided: initValine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initValine", function() { return initValine; });
/* harmony import */ var _js_utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/utils/index */ "./src/js/utils/index.js");
/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-05-28 18:05:10
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-05-29 13:55:11
 */

/**
 * @name 初始化Valine
 */

function initValine(valineOptions) {
  if ($('#vcomments').length !== 0) {
    if (typeof window.Valine === 'undefined') {
      Object(_js_utils_index__WEBPACK_IMPORTED_MODULE_0__["loadScript"])('//unpkg.com/valine/dist/Valine.min.js', () => {
        new Valine(valineOptions);
      });
    } else {
      new Valine(valineOptions);
    }
  }
}

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/index */ "./src/config/index.js");
/* harmony import */ var _Baidu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Baidu */ "./src/js/Baidu.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment */ "./src/js/Comment.js");
/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-06-15 17:22:31
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-08-21 15:48:42
 */


 // import { loadScript, loadCSS, logDynamicLoadFiles } from '@/js/utils/index'

/**
 * @name 监听点击A标签，非本站链接进行新标签打开
 */

function watchSiteLink() {
  $(document).on('click', 'a', function (event) {
    const {
      href,
      hostname
    } = event.target; // 检查点击a标签的href是一个http url才进行新标签打开

    if (/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(href)) {
      if (hostname !== window.location.hostname) {
        event.preventDefault();
        window.open(href);
      }
    }
  });
}
/**
 * @name 文档准备好
 */


$(document).ready(() => {
  // 监听点击A标签，非本站链接进行新标签打开
  watchSiteLink(); // 百度统计

  if (_config_index__WEBPACK_IMPORTED_MODULE_0__["default"].baiduTongji.open) {
    Object(_Baidu__WEBPACK_IMPORTED_MODULE_1__["initBaiduTongji"])();
  } // 评论


  if (_config_index__WEBPACK_IMPORTED_MODULE_0__["default"].valineOptions.open) {
    Object(_Comment__WEBPACK_IMPORTED_MODULE_2__["initValine"])(_config_index__WEBPACK_IMPORTED_MODULE_0__["default"].valineOptions);
  }
});

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/*! exports provided: loadScript, loadCSS, logDynamicLoadFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadScript", function() { return loadScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCSS", function() { return loadCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logDynamicLoadFiles", function() { return logDynamicLoadFiles; });
/**
 * @name: 全局工具js
 * @author: SunSeekerX
 * @Date: 2020-05-28 17:23:25
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-05-29 14:08:47
 */
const loadFiles = {
  js: [],
  css: []
};
/**
 * 动态加载JS文件的方法
 * Load javascript file method
 *
 * @param {String}   fileName              JS文件名
 * @param {Function} [callback=function()] 加载成功后执行的回调函数
 * @param {String}   [into='head']         嵌入页面的位置
 */

function loadScript(fileName, callback = () => {}, into = 'body') {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = fileName;

  script.onload = function () {
    loadFiles.js.push(fileName);
    callback();
  };

  if (into === 'head') {
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    document.body.appendChild(script);
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

function loadCSS(fileName, callback = () => {}, into = 'body') {
  const css = document.createElement('link');
  css.type = 'text/css';
  css.rel = 'stylesheet';

  css.onload = css.onreadystatechange = () => {
    loadFiles.css.push(fileName);
    callback();
  };

  css.href = fileName;

  if (into === 'head') {
    document.getElementsByTagName('head')[0].appendChild(css);
  } else {
    document.body.appendChild(css);
  }
}
/**
 * @name 打印动态加载的资源
 */

function logDynamicLoadFiles() {
  console.log('已经动态加载资源：', loadFiles);
}

/***/ })

/******/ });
//# sourceMappingURL=app.js.map