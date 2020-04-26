import home from './components/home.vue'
import login from './page/login/login.vue'
import indexMain from './components/index-main.vue'
import jichushuju from './components/data/jichushuju.vue'
import shishishuju from './components/data/shishishuju.vue'
import xingweishuju from './components/data/xingweishuju.vue'
import yewufenxi from './components/data/yewufenxi.vue'
import yonghuhuaxiang from './components/data/yonghuhuaxiang.vue'
import homeMain from './components/home-main.vue'
import Announce from './page/details/announce.vue'
import error from './page/404/404'
import admin from './page/admin/admin'

export default {
    // mode: 'history',  // 打包时需要注释掉，否则打包的静态文件无法运行。
    routes:[
        // {path:'/home',component:home},
        {path:'/admin',component:admin,
            children: [
                // 当 /user/:id 匹配成功，
                {path:'',component:home},
                // UserHome 会被渲染在 User 的 <router-view> 中
                { path: '/home', component: home },
                {path:'/Announce',name:'Announce',component:Announce},
                { path: '/indexMain', component: indexMain,
                    children:[
                        {path:'/jichushuju',component:jichushuju},
                        {path:'/shishishuju',component:shishishuju},
                        {path:'/xingweishuju',component:xingweishuju},
                        {path:'/yewufenxi',component:yewufenxi},
                        {path:'/yonghuhuaxiang',component:yonghuhuaxiang},
                        {path:'/homeMain',component:homeMain},
                    ]
                },
                // ...其他子路由
            ]
        },
        {path:'/',component:login},
        {path:'*', component: error}
    ]
}
