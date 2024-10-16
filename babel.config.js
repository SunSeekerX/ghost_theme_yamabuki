module.exports = function (api) {
  // `api.cache` 是 Babel 的一个优化功能
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        // 根据目标环境进行编译（如浏览器版本）
        targets: '> 0.25%, not dead',
        // 使用 core-js 实现 polyfill，仅加载使用到的 polyfill
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ]

  const plugins = [
    // 支持可选链操作符（?.）
    '@babel/plugin-proposal-optional-chaining',

    // 支持空值合并操作符（??）
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ]

  // 如果是生产环境，可以添加更多优化插件
  if (process.env.NODE_ENV === 'production') {
    plugins.push('babel-plugin-transform-remove-console') // 移除生产环境的 console.log
  }

  return {
    presets,
    plugins,
  }
}
