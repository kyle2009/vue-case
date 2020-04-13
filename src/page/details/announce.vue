<template>
    <div id="announce">
        <div class="back">
            <el-link @click="back"><i class="el-icon-back"></i>返回</el-link>
        </div>
        <h1 class="h1">标题</h1>
        <div class="date"><i class="el-icon-time"></i>2020-4-7 12:42:23</div>
        <div class="body">
            小程序管理后台新增页面收录设置的开关，开发者可根据业务需要进行设置：

            1. 小程序管理后台-设置-基本设置-页面收录设置，可对你的小程序帐号进行收录的开启和关闭的设置。

            2. 更新微信开发者工具，可对 sitemap 进行特定页面的配置，可参考小程序开发文档。

            3. 此设置默认开启。若小程序中存在不适合展示的内容，或开发者不希望使用微信展示其小程序，建议开发者自行关闭该设置。查看详情。
        </div>
        {{ msg }}--{{ path }}
    </div>
</template>

<script>
    export default {
        name: "announce",
        data(){
            return{
                msg:this.$route.params,
                path:this.$route.query
            }
        },
        methods:{
            back:() =>{
                this.$router.back(-1)
            }
        }
    }

</script>

<style scoped>
#announce{
    text-align: center;
    max-width: 1200;
    color: #353535;
}
.el-icon-back ,.el-icon-time{
    margin-right: 5px;
}
    .h1 {
        font-size: 20px;
        margin-bottom: 40px;
    }
    .back{
        box-sizing: border-box;
        width: 100%;
        text-align: left;
        padding: 40px;
    }
    .body {
        max-width: 1200px;
        margin: 0 auto;
        font-size: 14px;
        text-align: left;
        line-height: 2;
        color: #353535;
    }
    .date {
        color: #909399;
        font-size: 14px;
        margin: 40px auto;
    }
</style>
