module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/color.scss";
          @import "@/scss/breakpoints.scss";
        `,
      },
    },
  },
  chainWebpack: (webpackConfig) => {
    webpackConfig.module
    .rule('md')
    .test(/\.md$/)
    .use('frontmatter-markdown-loader')
    .loader('frontmatter-markdown-loader')
    .options({
      mode: [require('frontmatter-markdown-loader/mode').VUE_COMPONENT],
      vue: {
        root: 'markdown-body'
      },
      markdownIt: {
        html: true,
        linkify: true,
        breaks: true,
        use: [
          [require('markdown-it-anchor'), {
            permalink: true,
            slugify: (s) => String(s).trim().toLowerCase().replace(/\s+/g, '-').replace(/([^\w\-]+)/g, ''),
          }],
          require('markdown-it-emoji'),
          require('markdown-it-highlightjs')
        ],
      }
    }, );
  },
};