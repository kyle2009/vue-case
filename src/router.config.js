import home from './components/home.vue'
import login from './components/login.vue'
import indexMain from './components/index-main.vue'
import index from './components/index.vue'
import jichushuju from './components/data/jichushuju.vue'
import shishishuju from './components/data/shishishuju.vue'
import xingweishuju from './components/data/xingweishuju.vue'
import yewufenxi from './components/data/yewufenxi.vue'
import yonghuhuaxiang from './components/data/yonghuhuaxiang.vue'

export default {
    mode: 'history',
    routes:[
        // {path:'/home',component:home},
        {path:'/index',component:index,
            children: [
                // 当 /user/:id 匹配成功，
                // UserHome 会被渲染在 User 的 <router-view> 中
                { path: '/home', component: home },
                { path: '/indexMain', component: indexMain },
                // ...其他子路由
            ]
        },
        // {path:'/indexMain',component:indexMain},
        {path:'/jichushuju',component:jichushuju},
        {path:'/shishishuju',component:shishishuju},
        {path:'/xingweishuju',component:xingweishuju},
        {path:'/yewufenxi',component:yewufenxi},
        {path:'/yonghuhuaxiang',component:yonghuhuaxiang},
        {path:'/', component: login}
    ]
}
