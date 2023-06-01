import { defineConfig } from 'vitepress'

export default defineConfig({

  // 网站基础配置
  title: "Axure 建站指南 - 世界是棵树", // 网站标题
  titleTemplate: 'Axure 建站指南 - 世界是棵树', // 网站标题后缀
  description: "axure,原型,产品经理,软件设计，网站，建站",// 网站描述 
  base: '/', // base url 构建的html部署的目录地址
  head: [
    ['link', { rel: 'icon', href: '/index/logo.svg' }],
  ],


  // 主题参数配置
  themeConfig: {
    // 主题基本设置
    siteTitle: '世界是棵树',// 左上角网站标题
    logo: '/index/logo.svg',// 左上角LOGO
    // 其他配置项


    // 顶部导航设置
    nav: [
      { text: '🏒 主站', link: '/index' },
      { text: '🏓 Axure 建站', link: '/axure/axure01' },
      { text: '🕹️ WordPress 建站', link: '/axure/axure02' },
    ],



    // 文章侧边导航栏设置
    sidebar: {
      '/axure/': [
        
        //1组菜单
        {
          // text: 'Axure 网站模板',
          items: [
            { text: 'Axure 建站概述', link: '/axure/axure01' },
            {
              text: 'Axure 网站模板',
              items: [
                { text: '我的世界 V1.3', link: 'axure/axure03' },
                { text: '互联网导航 V1.0', link: 'https://pmdaohang.com' },
                { text: '图书导航网站 V1.2', link: 'https://pmdaohang.com' },
                { text: '产品导航网 V1.0', link: '/axure/axure02' },
              ]              
            },
            {
              text: 'Axure 建站基础',
              items: [
                { text: '1. 个人网站设计与配置', link: 'https://pmdaohang.com' },                
                { text: '2. 个人网站域名选购', link: 'https://pmdaohang.com' },
                { text: '3. 部署：阿里云OSS部署', link: 'https://pmdaohang.com' },
                { text: '4. 部署：腾讯云COS部署', link: 'https://pmdaohang.com' },
                { text: '5. 部署：服务器宝塔部署', link: 'https://pmdaohang.com' },
                { text: '6. 建站进阶指南', link: 'https://pmdaohang.com' },

              ]
            },
            {
              text: 'Axure 建站进阶',
              items: [
                { text: '配置百度统计看网站数据', link: 'https://pmdaohang.com' },
                { text: '原型网站多端设配响应适配', link: 'https://pmdaohang.com' },
                
              ]
            },
            {
              text: 'Axure 建站高阶【💰️小报童】', 
              items: [
                { text: '🔔 关于小报童专栏订阅', link: 'https://pmdaohang.com/' },
                { text: '1. 搜索 SEO 收录配置', link: 'https://pmdaohang.com/' },
                { text: '2. 背景模糊效果', link: 'https://pmdaohang.com/' }
              ]
            }
          ]
        },

        // //1组菜单
        // {
        //   text: 'Axure 建站基础',
        //   items: [
        //     {
        //       text: 'Axure 建站基础',
        //       items: [
        //         { text: '1. 网站原型设计与配置', link: '/axure/axure01' },                
        //         { text: '2. 个人网站域名选购', link: '/axure/axure02' },
        //         { text: '3. 部署：阿里云OSS部署', link: '/axure/axure02' },
        //         { text: '4. 部署：腾讯云COS部署', link: '/axure/axure02' },
        //         { text: '5. 部署：服务器宝塔部署', link: '/axure/axure02' },
        //         { text: '6. 建站进阶指南', link: '/axure/axure02' },

        //       ]
        //     }
        //   ]
        // },

        //  //1组菜单
        //  {
        //   text: 'Axure 建站技巧',
        //   items: [
        //     {
        //       // text: 'Axure 建站技巧',
        //       items: [
        //         { text: '配置百度统计看网站数据', link: '/axure/axure02' },
        //         { text: '原型网站多端设配响应适配', link: '/axure/axure01' },
                
        //       ]
        //     }
        //   ]
        // },

        // //1组菜单
        // {
        //   // text: 'Axure 建站进阶',
        //   items: [
        //     {
        //       text: 'Axure 建站进阶【💰️小报童】', 
        //       items: [
        //         { text: '1. 搜索 SEO 收录配置', link: 'https://vite.pmdaohang.com/' },
        //         { text: '2. 背景模糊效果', link: 'https://vite.pmdaohang.com/' }
        //       ]
        //     }
        //   ]
        // },

        // { text: '素材资源推荐', link: '/axure/axure01' },

        // //1组菜单
        // {
        //   text: 'Axure 建站概述',
        //   items: [
        //     { text: 'Axure 部署指南', link: '/axure/axure02' }
        //   ]
        // },
        // //1组菜单
        // {
        //   text: 'Axure 建站专栏',
        //   items: [
        //     {
        //       // text: '',
        //       items: [
        //         { text: 'Axure 建站概述', link: '/axure/axure01' },
        //         { text: 'Axure 部署指南', link: '/axure/axure02' }
        //       ]
        //     }
        //   ]
        // },


      ]
    },



    // 文章内容设置
    outline: 'deep', // 在大纲中显示的标题级别
    outlineTitle: '目录', // 大纲的标题
    //上下篇文本
    docFooter: {

      prev: '上一篇',
      next: '下一篇',
    },




    // 页脚设置，有sidebar 时不显示
    footer: {
      // message: '🚀 ~ ~ 呜~ 呜~ 呜~ ~ 🚀</br>注意，瓜子、汽水儿、花生米儿，收收你的小短腿儿。',
      message: '~ ~ ~ 🚆 ~ ~ ~</br>注意，瓜子、汽水儿、花生米儿，收收你的小短腿儿。',
      copyright: 'Copyright © 2019-2023 <a href="https://pmdaohang.com" target="_blank">世界是棵树</a>'
    },



    // 友情链接
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],


  }
})
