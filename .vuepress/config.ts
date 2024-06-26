import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: 'https://cn-sy1.rains3.com/xtremewave/XtremeWave.png' }]],  
  title: 'XtremeWave官方网站',
  description: "Among Us Mod 出色贡献者",
  bundler: viteBundler(),
  theme: recoTheme({
    home: 'index.md',
    primaryColor: '#586fd7',
    catalogTitle: '目录',
    repo: 'XtremeWave/XtremeWaveSite',
    docsRepo: 'https://github.com/XtremeWave/XtremeWaveSite',
    docsBranch: 'main',
    style: "@vuepress-reco/style-default",
    logo: "https://cn-sy1.rains3.com/xtremewave/XtremeWave.png",
    author: "XtremeWave",
    authorAvatar: "https://cn-sy1.rains3.com/xtremewave/XtremeWave.png",
    navbar: [
      {text: '首页', link: '/'},
      {text: '关于', link: '/about'},
      {text: '赞助', link: '/donate'},
      {
        text: 'XtremeWave项目',
        children: [
          {text: 'TOHEX', link: 'https://tohex.cc'},
          {text: 'TONEX', link: 'https://tonex.cc'},
        ],
      },
      {text: '服务状态', link: 'https://status.qingfengawa.me/status/xtremewave'},
    ],
    bulletin: {
      body: [
        { type: 'title', content: 'XtremeWave项目“TONEX文档”暂时暂停开发的通知' },
        {
          type: 'text',
          content: `因开发者个人原因,TONEX文档项目将暂时停止维护,感谢您的理解。<br><i>我们不会无限期停更该项目。</i>`,
          style: 'font-size: 12px;'
        },
        { type: 'hr' },
        { type: 'title', content: 'XtremeWave网站开发招募' },
        {
          type: 'text',
          content: `若您想要加入我们,在您阅读完<a href="https://www.xtreme.net.cn/933187.html">'加入XtremeWave'</a>文章后,请联系QingFeng。`,
          style: 'font-size: 12px;'
        },
        { type: 'hr' },
        {
          type: 'buttongroup',
          children: [
            { text: '赞赏', link: '/donate' },
          ],
        },
      ],
    },
    friendshipLinks: [
      {
        title: 'TONEX',
        logo: 'https://cn-sy1.rains3.com/xtremewave/TONEX.jpg',
        link: 'https://tonex.cc',
      },
      {
        title: 'TOHEX',
        logo: 'https://cn-sy1.rains3.com/xtremewave/XtremeWave.png',
        link: 'https://tohex.cc',
      },
    ],
  }),
});