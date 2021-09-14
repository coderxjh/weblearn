//1.引入express
const { request, response } = require('express');
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头    设置运行跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO GET');
});

app.post('/server', (request, response) => {
    //设置响应头    设置运行跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Header', '*');

    //设置响应体
    response.send('HELLO POST');
});

app.all('/server', (request, response) => {
    //设置响应头    设置运行跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应体
    response.send('HELLO POST');
});

app.all('/json-server', (request, response) => {
    //设置响应头    设置运行跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置可以自定义响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    //响应一个数据
    const data = {
        name: 'atguigu'
    };
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});

//针对IE缓存
app.get('/ie', (request, response) => {
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send("HELLO IE -3");
});

//延迟响应
app.all('/delay', (request, response) => {
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置可以自定义响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setTimeout(1000, function () {
        // 设置响应体
        response.send("延迟响应");
    })
});

//jQuery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    const data = { name: '尚硅谷' };
    // response.send("Hello jQuery AJAX");
    response.send(JSON.stringify(data));
})

//axios服务
app.all('/axios-server', (request, response) => {
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    // 设置响应体
    const data = { name: '尚硅谷' };
    // response.send("Hello jQuery AJAX");
    response.send(JSON.stringify(data));
})

//jsonp服务
app.all('/jsonp-server',(request,response)=>{
    // response.send('console.log("hello jsonp")');
    const data = {
        name: '尚硅谷atguigu'
    };
    //将数据转换为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handler(${str})`)
})

app.all('/check-username',(request,response)=>{
    const data ={
        exist:1,
        msg:'用户名已经存在'
    };
    let str = JSON.stringify(data);
    response.send(`handle(${str})`);
})

//4. 监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中');
})