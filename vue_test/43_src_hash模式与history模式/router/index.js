// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About';
import Home from '../pages/Home';
import Message from '../pages/Message';
import News from '../pages/News';
import Detail from '../pages/Detail';

// 创建并暴露一个路由器
const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { isAuth: true, title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [{
                name: 'xinwen',
                path: 'news',
                component: News,
                meta: { isAuth: true, title: '新闻' },
                // beforeEnter(to, from, next) {
                //     console.log('独享路由守卫', to, from)
                //     // 判断切换的路由是否需要进行权限控制
                //     if (to.meta.isAuth) {
                //         // 权限控制的具体规则
                //         if (localStorage.getItem('school') === 'atguigu') {
                //             next()
                //         } else {
                //             alert('学校名不对，无权限查看')
                //         }
                //     } else {
                //         // 放行
                //         next()
                //     }
                // }
            },
            {
                name: 'xiaoxi',
                path: 'message',
                component: Message,
                meta: { isAuth: true, title: '消息' },
                children: [
                    {
                        name: 'xiangqing',
                        path: 'detail',  //使用占位符声明接收params参数
                        component: Detail,
                        props($route) {
                            return { id: $route.query.id, title: $route.query.title }
                        },
                        meta: { title: '详情' }
                    }
                ]
            }
            ]
        }
    ]
})
// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     console.log('前置路由守卫', to, from)
//     // 判断切换的路由是否需要进行权限控制
//     if (to.meta.isAuth) {
//         // 权限控制的具体规则
//         if (localStorage.getItem('school') === 'atguigu') {
//             next()
//         } else {
//             alert('学校名不对，无权限查看')
//         }
//     } else {
//         // 放行
//         next()
//     }
// })
// 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title || '硅谷系统' //修改网页的title
})

export default router