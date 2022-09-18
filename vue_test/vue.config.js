module.exports = {
    pages: {
        index: {
            // 入口
            entry: 'src/main.js',
        },
    },
    lintOnSave: false,   //关闭语法检查
    // 开启代理服务器(方式一)
    /*devServer: {
        proxy: 'http://localhost:5000'
    }*/
    // 开启代理服务器(方式二)
    devServer: {
        proxy: {
            '/atguigu': {
                target: 'http://localhost:5000',
                pathRewrite: { '^/atguigu': '' },//重写任何以 "/atguigu" 开头的路径
                ws: true,   //用于支持websocket
                changeOrigin: true  //用于控制请求头中的host值
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/demo': '' },  //重写任何以 "/demo" 开头的路径
                ws: true,   //用于支持websocket
                changeOrigin: true  //用于控制请求头中的host值
            },
        }
    }
}