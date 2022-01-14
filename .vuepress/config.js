const friendLink = require('./themeConfig/friendlink.js');
const nav = require('./themeConfig/nav.js');
const sidebar = require('./themeConfig/sidebar.js');
module.exports = {
    title: "千篇壹律",
    description: '不存在十全十美的文章，就如同不存在彻头彻尾的绝望',
    friendLink: '友情链接',
    dest: 'public',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: 'reco',
    themeConfig: {
        nav,
        sidebar,
        type: 'blog',
        // 博客设置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认 “标签”
            }
        },
        logo: '/logo.png',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        sidebar: 'auto',
        // 最后更新时间
        lastUpdated: '最后一次更新',
        // 作者
        author: '青墨',
        // 作者头像
        authorAvatar: '/avatar.png',
        // 备案号
        record: '未备案',
        // 项目开始时间
        startYear: '2021',
        friendLink
        /**
         * 密钥 (if your blog is private)
         */

        // keyPage: {
        //   keys: ['your password'],
        //   color: '#42b983',
        //   lineColor: '#42b983'
        // },

        /**
         * valine 设置 (if you need valine comment )
         */

        // valineConfig: {
        //   appId: '...',// your appId
        //   appKey: '...', // your appKey
        // }

    },
    markdown: {
        lineNumbers: true
    },

}