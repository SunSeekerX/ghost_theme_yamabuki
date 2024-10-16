/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './partials/**/*.hbs', // 精确匹配 src 目录中的 hbs 模板文件
    './src/js/**/*.js', // 精确匹配 src/js 目录中的 JS 文件
    './*.hbs', // 项目根目录中的 hbs 文件
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        'PomeloFont',
        'Noto Serif SC',
        'georgia',
        '"ui-sans-serif"',
        '"system-ui"',
        '"-apple-system"',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'serif',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        '"Liberation Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    container: {
      center: true,
      padding: '2.5rem',
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
    },
    extend: {
      maxWidth: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
