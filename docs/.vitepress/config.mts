import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';
import { pagefindPlugin, chineseSearchOptimize } from 'vitepress-plugin-pagefind'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "StarryMikuDocs",
  description: "StarryMikuDocs - 个人知识沉淀，长篇教程与技术笔记",
  // 添加 lastUpdated 配置
  lastUpdated: true,
  // 忽略死链检查（README 中的本地地址等）
  ignoreDeadLinks: true,
  //fav图标
  // head: [
  //   ['link', { rel: 'icon', href: '/logo.png' }],
  //   ['meta', { name: 'baidu-site-verification', content: 'codeva-vzfHzHbtqr' }]
  // ],
  head: [
    // PNG 格式图标（96x96）
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' }],

    // SVG 格式（现代浏览器首选）
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],

    // 传统 ICO 格式（兼容旧浏览器）
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],

    // iOS Safari 主屏幕图标（最关键）
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],

    // iOS 应用标题（可选）
    ['meta', { name: 'apple-mobile-web-app-title', content: 'StarryMikuDocs' }],

    // Web App Manifest（Android/Chrome PWA 用）
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ],
  // 站点地图
  sitemap: {
    hostname: 'https://docs.starrymiku.com',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebarMenuLabel: "菜单",
    outlineTitle: "页面内容",
    darkModeSwitchLabel: "切换主题",

    //编辑本页
    editLink: {
      pattern: 'https://github.com/StarryCognet/starry-docs/edit/main/docs/:path',
      text: '在GitHub编辑本页'
    },

    //上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      },
    },

    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: 'https://starrymiku.com' },
      { text: 'GitHub', link: 'https://github.com/StarryCognet' }
    ],

    sidebar: generateSidebar({
      /*
       * For detailed instructions, see the links below:
       * https://vitepress-sidebar.jooy2.com/guide/api
       */
      documentRootPath: '/docs', //文档根目录路径
      // scanStartPath: null, // 扫描开始路径，设为null则默认从documentRootPath开始
      // resolvePath: null, // 解析路径，用于解决相对路径
      // useTitleFromFileHeading: true, // 是否使用文件标题作为菜单标题
      // useTitleFromFrontmatter: true, // 是否使用frontmatter中的title作为菜单标题
      // frontmatterTitleFieldName: 'title', // frontmatter中标题字段的名称
      // useFolderTitleFromIndexFile: false, //是否使用层级首页文件名做分级标题
      // useFolderLinkFromIndexFile: false, //是否链接至层级首页文件
      hyphenToSpace: true,           // 是否将连字符转换为空格
      // underscoreToSpace: true,       // 是否将下划线转换为空格
      // capitalizeFirst: false,        // 是否将首字母大写
      // capitalizeEachWords: false,    // 是否将每个单词首字母大写
      collapsed: false, //折叠组关闭状态
      collapseDepth: 2, //折叠组2级菜单
      // sortMenusByName: false,           // 是否按名称排序菜单
      // sortMenusByFrontmatterOrder: false, // 是否按frontmatter中的order字段排序
      // sortMenusByFrontmatterDate: false, // 是否按frontmatter中的日期字段排序
      // sortMenusOrderByDescending: false,  // 是否降序排列
      // sortMenusOrderNumericallyFromTitle: false, // 是否从标题中提取数字进行排序
      // sortMenusOrderNumericallyFromLink: false, // 是否从链接中提取数字进行排序
      // frontmatterOrderDefaultValue: 0,    // frontmatter中order字段的默认值
      // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'], //手动排序，文件夹不用带后缀
      removePrefixAfterOrdering: false, //删除前缀，必须与prefixSeparator一起使用
      prefixSeparator: '.', //删除前缀的符号
      // 配置项：排除特定文件
      // excludeFiles: ['first.md', 'secret.md'],  // 指定要排除的文件名列表
      // 配置项：根据frontmatter字段名排除文件
      // excludeFilesByFrontmatterFieldName: 'exclude',  // 指定用于排除文件的frontmatter字段名
      // 配置项：排除特定文件夹
      // excludeFolders: ['secret-folder'],  // 指定要排除的文件夹名列表
      // 配置项：是否包含点文件（以点开头的文件）
      // includeDotFiles: false,  // false表示不包含点文件
      // 配置项：是否包含根目录下的索引文件
      // includeRootIndexFile: false,  // false表示不包含根目录下的索引文件
      // includeFolderIndexFile: false, //是否包含层级主页
      // includeEmptyFolder: false,  // 是否包含空文件夹，设为false则隐藏空文件夹
      // rootGroupText: 'Contents',  // 根分组的显示文本，用于标识主目录名称
      // rootGroupLink: 'https://github.com/jooy2',  // 根分组的链接地址，可指向外部资源
      // rootGroupCollapsed: false,  // 根分组默认是否折叠，false表示默认展开状态
      // convertSameNameSubFileToGroupIndexPage: false,  // 是否将同名子文件转换为分组索引页面
      // folderLinkNotIncludesFileName: false,  // 文件夹链接是否包含文件名，false表示完整路径
      // keepMarkdownSyntaxFromTitle: false,  // 是否保留标题中的Markdown语法，false表示自动转换
      // debugPrint: false,
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/StarryCognet/starry-docs' }
    ],
  },
  markdown: {
    // 组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      }
    }
  },
  vite: {
    plugins: [
      pagefindPlugin({
        // ✅ 必须开启中文优化，否则中文搜索效果很差
        customSearchQuery: chineseSearchOptimize,

        // 自定义UI文本
        btnPlaceholder: '搜索知识库',
        placeholder: '搜索文章、教程...',
        emptyText: '没有找到相关内容',
        heading: '共找到 {{searchResult}} 条结果',

        // 排除不需要索引的元素
        excludeSelector: [
          'img',                    // 排除图片alt文本
          'a.header-anchor',         // 排除锚点链接
          '.vp-doc h1',             // 可选：排除h1标题（通常是页面标题）
          '.vp-footer',             // 排除页脚
        ]
      })
    ]
  }
})