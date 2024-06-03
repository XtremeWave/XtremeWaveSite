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
    home: '/index.md',
    repo: 'XtremeWave/TownOfNewEpic_XtremeSite',
    docsRepo: 'https://github.com/XtremeWave/XtremeWaveSite',
    docsBranch: 'main',
    style: "@vuepress-reco/style-default",
    logo: "https://cn-sy1.rains3.com/xtremewave/XtremeWave.png",
    author: "XtremeWave",
    authorAvatar: "https://cn-sy1.rains3.com/xtremewave/XtremeWave.png",
    navbar: [
      {text: '首页', link: '/'},
    ],
    bulletin: {
     body: [
       {
         type: "text",
         content: `XtremeWaveWebSite 6.0上线辣!<br>6.0主要与TONEX官方网站统一风格,其余改动也不是很大。`,
         style: "font-size: 12px;",
       },
       {
         type: "hr",
       },
       {
         type: "buttongroup",
         children: [
           {
             text: "赞助",
             link: "https://www.xtreme.net.cn/donate",
           },
         ],
       },
     ],
    },
    //commentConfig: {
    //  type: 'valine',
    //  options: {
    //    appId: 'xxx',
    //    appKey: 'xxx',
    //    placeholder: '填写邮箱可以收到回复提醒哦！',
    //    verify: true,
    //    notify: true,
    //    recordIP: true,
    //    hideComments: true
    //  },
    //}, 
  }),
});