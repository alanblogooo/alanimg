import { defineConfig } from 'vitepress'

export default defineConfig({

  // 网站基础配置
  title: "Axure 建站指南 - 世界是棵树", // 网站标题
  titleTemplate: 'Axure 建站指南 - 世界是棵树', // 网站标题后缀
  description: "axure,原型,产品经理,软件设计，网站，建站",// 网站描述 
  base: '/blog', // base url 构建的html部署的目录地址
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // 添加百度统计代码
    ['script', {},
      `
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?62a39705ef8e88f06af5554623337a89";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
    })();
    `
    ],
  ],
  

  // 主题参数配置
  themeConfig: {
    // 主题基本设置
    logo: '/index/logo.svg',// 左上角LOGO
    siteTitle: '世界是棵树',// 左上角网站标题
    // 其他配置项


    // 顶部导航设置
    nav: [
      // { text: '🏒 主站', link: '/index' },
      // { text: '🏒 最近更新', link: '/recent' },
      { text: '🖥️ Axure 建站', link: '/post//axure/001axure' },
      { text: '🧭 产品常逛', link: 'https://hao.pmdaohang.com/' },
    ],



    // 文章侧边导航栏设置
    sidebar: {
      '/post/axure/': [

        //1组菜单
        {
          // text: 'Axure 网站模板',
          items: [
            { text: 'Axure 建站指南', link: '/post/axure/001axure' },
            {
              text: 'Axure 网站模板',
              items: [
                { text: '我的世界 V1.3&nbsp;💰️', link: '/post/axure/002wodeshijie' },
                { text: 'Be博客 V1.0', link: '/post/axure/006beboke' },
                { text: '互联网导航 V1.0', link: '/post/axure/003hulianwang' },
                { text: '图书导航网站 V1.2', link: '/post/axure/004tushu' },
                { text: '产品导航网 V1.0', link: '/post/axure/005wangzhi' },
              ]
            },
            {
              text: 'Axure 建站基础',
              items: [
                { text: 'A 设计：网站设计与配置', link: '/post/axure/007webdesign' },
                { text: 'B 域名：网站域名选购', link: '/post/axure/008yuming' },
                { text: 'C 部署：阿里云OSS', link: '/post/axure/009oss' },
                { text: 'C 部署：腾讯云COS', link: '/post/axure/010cos' },
                // { text: 'C 部署：服务器宝塔', link: 'https://pmdaohang.com' },
                // { text: 'C 部署：Vercel💰️', link: 'https://pmdaohang.com' },
              ]
            },
            {
              text: 'Axure 建站进阶',
              items: [
                { text: '网站用百度统计查看流量', link: '/post/axure/011tongji' },
                { text: 'Axure8 多端自适应视图', link: '/post/axure/013zishiying' },
                { text: 'Axure9 多端自适应视图', link: '/post/axure/012shipei' },
                // { text: '网站搜索收录SEO配置&nbsp;💰️', link: '' },

              ]
            },
            // {
            //   text: 'Axure 网站设计', 
            //   items: [                
            //     { text: '背景模糊效果&nbsp;💰️', link: '' },
            //   ]
            // }
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



    // 设置编辑链接
    editLink: {
      pattern: 'https://blog.pmdaohang.com',
      text: '首页'
    },

    // 设置文章最后更新时间
    // lastUpdated: {
    //   text: '更新时间',
    //   formatOptions: {
    //     dateStyle: 'short',
    //     timeStyle: 'short'
    //   }
    // },



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
      message: '~ ~ ~ 🚆 ~ ~ ~ <br> 注意，瓜子、汽水儿、花生米儿，收收你的小短腿儿。',
      // copyright: 'Copyright © 2019-2023 <a href="https://pmdaohang.com" target="_blank">世界是棵树</a>&nbsp;&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2023018310号-1</a><br><img src="https://visitor-badge.laobi.icu/badge?page_id=pmdaohang_home&left_color=%23000000&right_color=%2327bba0&left_text=view" style="display: inline-block;" alt="世界是棵树">',
      copyright: 'Copyright©2023&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2023018310号-1</a><br><img src="https://visitor-badge.laobi.icu/badge?page_id=pmdaohang_home&left_color=%23000000&right_color=%2327bba0&left_text=view" style="display: inline-block;" alt="世界是棵树">',
    },



    // 友情链接
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],




  }
})


