const navbar = require('./config/navbar')

const sidebar = require('./config/sidebar')

import {
  defaultTheme
} from '@vuepress/theme-default'

// 注意: base的值为github仓库的名称
module.exports = {
  base: '/blogSite/',
  /* 基础虚拟路径: */
  dest: 'dist',
  /* 打包文件基础路径, 在命令所在目录下 */
  title: 'blog', // 标题
  description: 'Typescript', // 标题下的描述
  theme: defaultTheme({
    // 在这里进行配置
    navbar,
    sidebar
  })

}