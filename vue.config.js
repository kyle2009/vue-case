// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    devServer: {
        open: false, //浏览器自动打开页面
        proxy: {
            //配置跨域
            '/am': {
                target: "http://118.25.195.73:9999",
                changOrigin:true,
                pathRewrite:{
                    '^/am':'/'
                }
            }
        }
    }

}
