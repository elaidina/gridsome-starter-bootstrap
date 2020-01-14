module.exports = {
  siteName: "Pictures from Europe",
  siteDescription: "A collectionof beautiful places in Europe.",
  siteUrl: "https://picturesfromeurope.netlify.com",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "BlogPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-72659574-10"
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080
  }
};
