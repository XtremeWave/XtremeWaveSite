import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { Xicon } from '@carbon/icons-react';

export default defineUserConfig({
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: 'https://cn-sy1.rains3.com/xtremewave/XtremeWave.png' }]],  
  title: 'XtremeWave官方网站',
  description: "Among Us Mod 优秀领导者",
  bundler: viteBundler(),
  theme: recoTheme({
    home: 'index.md',
    primaryColor: '#59a3e2',
    catalogTitle: '目录',
    repo: 'XtremeWave/XtremeWaveite',
    docsRepo: 'https://github.com/XtremeWave/XtremeWaveSite',
    docsBranch: 'main',
    lastUpdated: 'false',
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
          {text: 'TOHEX', link: 'https://tonex.cc'},
          {text: 'TONEX', link: 'https://tohex.cc'},
        ],
      },
    ],
    bulletin: {
      body: [
        { type: 'title', content: 'XtremeWave网站开发招募' },
        {
          type: 'text',
          content: `在您阅读完<a herf="https://www.xtreme.net.cn/933187.html">本文章</a>后,请联系QingFeng。`,
          style: 'font-size: 12px;'
        },
        { type: 'hr' },
        {
          type: 'buttongroup',
          children: [
            { text: '打赏', link: '/donate' }
          ]
        }
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