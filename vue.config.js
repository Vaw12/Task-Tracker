module.exports = {
    devServer: {
        proxy: {
        '^/api': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            logLevel: 'debug',
            pathRewrite: { '^/api': '/' },
            },
        },
    },
    client: {
        overlay: {
          warnings: false,
          errors: false,
        },
  
        // or
        overlay: false,
      }
  }