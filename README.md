# Ghost Theme Yamabuki

`Ghost blog`主题。参考：[PrimulaGhost](https://themeix.com/livedemo?theme=PrimulaGhost)

预览：[https://yoouu.cn/](https://yoouu.cn/)



## 主题特色

- 百度统计支持
- Valine 评论系统的支持
- 简约清新的日系风格
- ...

## 使用

需要有`node.js`和`npm`基础知识

### 克隆源码

```bash
git clone https://github.com/SunSeekerX/ghost-theme-yamabuki
```

### 安装依赖

进入项目的根目录执行,已经配置国内镜像，理论不需要任何代理安装也能起飞

```bash
yarn
```

### 替换配置信息

本主题有两个配置信息，分别在`${app}/src/config/index`，`${app}/src/config/build`

`${app}/src/config/index`

在运行时的配置，例如初始化评论，百度统计等

```javascript
export default {
  /**
   * @name 百度统计配置
   */
  baiduTongji: {
    // 是否打开
    open: true,
    // 百度统计key
    key: '3f0d7a82297c929467637543290d6e37',
  },

  /**
   * @name valine配置
   * @more https://valine.js.org/configuration.html
   */
  valineOptions: {
    // 是否打开
    open: true,
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
```

`~~${app}/src/config/build`~~

~~在编译时的配置，打包完成需要替换主题内的模板字符串，例如备案信息等~~

```javascript
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
```

### 编译打包

项目根目录下执行

```bash
yarn zip
```

### 上传主题

打包之后的文件位于`${app}/dist/`，通过`ghost`后台上传即可。

## 开发

### 本地开发步骤

> 开发步骤有一点偏门，但是很实用，能实时预览效果，
>
> Ghost 主题的上传的原理就是打包你本地的主题文件，解压到 Ghost 的 `content/themes` 目录下。
>
> 我们要做的就是在这个目录下开发。然后直接修改文件就能看见效果了。
>
> 但是不能直接将文件移过来，需要打包主题上传一次，然后就能在后台看见你上传的主题。
>
> 找到主题的文件夹，把你没有打包的文件夹复制到 `content/themes/${your theme name}` 就将这个目录变成了开发目录。

1. 完成使用的步骤之后你会得到一个 `yamabuki-x.x.x.zip` 的文件，从后台上传上去。

2. 找到你本地安装的 `Ghost` 目录，找到 `ghost\content\themes\yamabuki-x.x.x`

3. 将这个目录添加到 `VSCode`

4. 复制缺少的文件，我这里主要缺少 `.` 开头的文件

   1. .git
   2. .vscode
   3. .yarn
   4. .gitignore
   5. .yarnrc.yml
   6. ...

5. 然后在你新添加的项目下执行 `git status` 看一下应该是没有任何改变的。

6. 安装下依赖

   ```shell
   yarn
   ```

7. 然后你就可以执行监控文件模式进行开发啦

   ```shell
   yarn dev
   # or
   yarn serve
   
   
   ```

   ```
   # 输出示例
   yarn dev
   [20:15:12] Using gulpfile W:\server\ghost\content\themes\yamabuki-0.1.1\gulpfile.js
   [20:15:12] Starting 'default'...
   [20:15:12] Starting 'css'...
   [20:15:13] Finished 'css' after 1.09 s
   [20:15:13] Starting 'js'...
   [20:15:13] Finished 'js' after 7.07 ms
   [20:15:13] Starting 'customJs'...
   [20:15:14] Version: webpack 4.46.0
   Built at: 02/25/2022 8:15:14 PM
        Asset      Size  Chunks                   Chunk Names
       app.js  11.7 KiB    main  [emitted]        main
   app.js.map  13.4 KiB    main  [emitted] [dev]  main
   Entrypoint main = app.js app.js.map
   [20:15:14] Finished 'customJs' after 1.02 s
   [20:15:14] Starting 'serve'...
   [20:15:14] Finished 'serve' after 7.72 ms
   [20:15:14] Starting 'cssWatcher'...
   [20:15:14] Starting 'hbsWatcher'...
   [20:15:14] Starting 'scssWatcher'...
   [20:15:14] Starting 'jsWatcher'...
   ```

### 基础文件解释



### ~~主题内需要替换的模板字符串~~

自己找字符改下就行。

~~`default.hbs`~~

~~$siteRecord.url$ - 备案信息链接地址~~

~~$siteRecord.name$ - 备案显示名字~~



## 暂存问题

1. 没有格式化支持，vscode、webstorm 对 handlebars 的格式化支持都不太好。

# Copyright & License

Copyright (c) 2013-2020 Ghost Foundation - Released under the [MIT license](LICENSE).
