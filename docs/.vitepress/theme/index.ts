import DefaultTheme from 'vitepress/theme'
import "./style/index.css"; //引入自定义的样式
import Layout from './Layout.vue'
import { inBrowser } from 'vitepress'
import ArticleMetadata from "./components/ArticleMetadata.vue"
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { NProgress } from "nprogress-v2/dist/index.js"; // 进度条组件
import "nprogress-v2/dist/index.css"; // 进度条样式

import { h } from 'vue' // h函数
// 组件
import backtotop from "./components/backtotop.vue";
import notice from "./components/notice.vue";
import MouseClick from "./components/MouseClick.vue"
import MouseFollower from "./components/MouseFollower.vue"
import Busuanzi from "./components/Busuanzi.vue" // 导入不蒜子组件

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 指定组件使用layout-top插槽
      'layout-top': () => [h(MouseClick), h(MouseFollower)],
      'doc-footer-before': () => h(backtotop),
      // 添加不蒜子统计组件到H1标题下方
      'doc-after': () => h(Busuanzi)
    })
  },
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    // 非SSR环境下配置路由进度条
    if (inBrowser) {
      NProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => NProgress.start();
      router.onAfterRouteChange = () => {
        setTimeout(() => {
          NProgress.done();
        }, 100);
      };
    }

    app.component('ArticleMetadata', ArticleMetadata)
    app.component('Busuanzi', Busuanzi) // 注册不蒜子组件

    // 图片缩放
    if (inBrowser) {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    }

    // 不蒜子统计功能
    if (inBrowser) {
      // 加载不蒜子脚本的函数
      const loadBusuanziScript = () => {
        return new Promise((resolve) => {
          // 检查是否已经存在busuanzi对象
          if (typeof (window as any).busuanzi !== 'undefined') {
            resolve(true);
            return;
          }

          // 创建脚本元素
          const script = document.createElement('script');
          script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.js';
          script.async = true;
          script.charset = 'utf-8';
          script.crossOrigin = 'anonymous';

          script.onload = () => {
            resolve(true);
          };

          script.onerror = () => {
            console.warn('不蒜子统计脚本加载失败');
            resolve(false);
          };

          document.head.appendChild(script);
        });
      };

      // 获取统计数据的函数
      const fetchBusuanziStats = async () => {
        try {
          await loadBusuanziScript();

          setTimeout(() => {
            const busuanzi = (window as any).busuanzi;
            if (busuanzi && typeof busuanzi.fetch === 'function') {
              busuanzi.fetch();
            }
          }, 100);
        } catch (error) {
          console.warn('获取不蒜子统计数据时出错:', error);
        }
      };

      // 页面首次加载时初始化统计数据
      const initBusuanzi = () => {
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', () => {
            fetchBusuanziStats();
          });
        } else {
          fetchBusuanziStats();
        }
      };

      // 路由变化处理
      const handleRouteChange = async () => {
        if (typeof window !== 'undefined') {
          await fetchBusuanziStats();
        }
      };

      // 保存原始的路由处理函数
      const originalOnAfterRouteChanged = router.onAfterRouteChanged;

      router.onAfterRouteChange = (...args: any[]) => {
        if (originalOnAfterRouteChanged) {
          originalOnAfterRouteChanged.apply(router, args);
        }
        handleRouteChange().finally(() => {
          setTimeout(() => {
            NProgress.done();
          }, 100);
        });
      };

      initBusuanzi();
    }
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };

    // 只在浏览器环境中运行
    if (inBrowser) {
      onMounted(() => {
        initZoom();
      });
      watch(
        () => route.path,
        () => nextTick(() => initZoom())
      );
    }

    // giscus配置
    giscusTalk({
      repo: 'StarryCognet/AToolkit', //仓库
      repoId: 'R_kgDOQpevAQ', //仓库ID
      category: 'General', // 讨论分类
      categoryId: 'DIC_kwDOQpevAc4Cz3lm', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
    },
      {
        frontmatter, route
      },
      true
    );
  }
}
