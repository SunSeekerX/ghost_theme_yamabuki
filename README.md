# Ghost Theme Yamabuki

参考：[PrimulaGhost](https://themeix.com/livedemo?theme=PrimulaGhost)

预览：[https://yoouu.cn/](https://yoouu.cn/)

## 主题特色

- Twikoo 评论系统的支持
- 简约清新的日系风格
- 代码高亮
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

### 编译打包

项目根目录下执行

```bash
yarn zip
```

### 上传主题

打包之后的文件位于`${app}/dist/`，通过`ghost`后台上传即可。

### 配置

**Env copyright text**

copyright 标识

**Env icp text**

icp 备案号

**Env twikoo id**

twikoo 评论 id

> 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）

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

## 暂存问题

1. 没有格式化支持，vscode、webstorm 对 handlebars 的格式化支持都不太好。

# Copyright & License

Copyright (c) 2013-2022 Ghost Foundation - Released under the [MIT license](LICENSE).
