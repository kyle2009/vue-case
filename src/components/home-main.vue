<template>
    <div id="app">

        <!--通知模块-->
        <div class="tongGao">
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark">
                        <h3>平台公告</h3>
                    </div></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple">
                    <div class="msg-item">
                        <router-link :to="{ name: 'Announce', params: { userId: 123 }}">小程序管理后台新增页面收录设置的开关</router-link>
                        <span>2019-03-29</span>
                    </div>
                </div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">
                    <div class="msg-item">
                        <router-link :to="{ path: '/announce', query: { plan: 'private' }}">
                            小程序管理后台新增页面收录设置的开关
                        </router-link>
                        <a href=""></a>
                        <span>2019-03-29</span>
                    </div>
                </div>
                </el-col>
                <!--                如果公告数>5条，则显示查看更多公告按钮-->
                <el-col :span="12" v-show="false">
                    <a href="">查看更多公告</a>
                </el-col>
            </el-row>
            <p v-show="false">暂无数据</p>
        </div>
        <!--概览数据-->
        <div class="gaiLanShuJu">
            <el-row>
                <el-col :span="24">
                    <h3>概览数据</h3>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="data_overview_item">
                        <p class="data_overview_title">访问人数</p>
                        <p class="data_overview_desc">44466</p>
                        <ul class="data_overview_percent">
                            <li class="data_overview_percent_item">
                                <div class="data_overview_percent_item_inner"><label>日</label>
                                    <p class="tips_global"><span class="mini_tips success">8.1%↑</span></p>
                                </div>
                            </li>
                            <li class="data_overview_percent_item">
                                <div class="data_overview_percent_item_inner"><label>周</label>
                                    <p class="tips_global"><span class="mini_tips warn">0.53%↓</span></p>
                                </div>
                            </li>
                            <li class="data_overview_percent_item">
                                <div class="data_overview_percent_item_inner"><label>月</label>
                                    <p class="tips_global"><span class="mini_tips success">12.69%↑</span></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="data_overview_item">
                        <p class="data_overview_title">新访问人数</p>
                        <p class="data_overview_desc">44466</p>
                        <ul class="data_overview_percent">
                            <li class="data_overview_percent_item">
                                <div class="data_overview_percent_item_inner"><label>日</label>
                                    <p class="tips_global"><span class="mini_tips success">8.1%↑</span></p>
                                </div>
                            </li>
                            <li class="data_overview_percent_item">
                                <div class="data_overview_percent_item_inner"><label>周</label>
                                    <p class="tips_global"><span class="mini_tips warn">0.53%↓</span></p>
                                </div>
                            </li>
                            <li class="data_overview_percent_item">
                                <div class="data_overview_percent_item_inner"><label>月</label>
                                    <p class="tips_global"><span class="mini_tips success">12.69%↑</span></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="data_overview_item">
                        <p class="data_overview_title">总添加人数</p>
                        <p class="data_overview_desc">44466</p>
                        <ul class="data_overview_percent">
                            <li class="data_overview_percent_item">
                                <div class="data_overview_percent_item_inner"><label>日</label>
                                    <p class="tips_global"><span class="mini_tips success">8.1%↑</span></p>
                                </div>
                            </li>
                            <li class="data_overview_percent_item">
                                <div class="data_overview_percent_item_inner"><label>周</label>
                                    <p class="tips_global"><span class="mini_tips warn">0.53%↓</span></p>
                                </div>
                            </li>
                            <li class="data_overview_percent_item">
                                <div class="data_overview_percent_item_inner"><label>月</label>
                                    <p class="tips_global"><span class="mini_tips success">12.69%↑</span></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="data_overview_item">
                        <p class="data_overview_title">新添加人数</p>
                        <p class="data_overview_desc">44466</p>
                        <ul class="data_overview_percent">
                            <li class="data_overview_percent_item">
                                <div class="data_overview_percent_item_inner"><label>日</label>
                                    <p class="tips_global"><span class="mini_tips success">8.1%↑</span></p>
                                </div>
                            </li>
                            <li class="data_overview_percent_item">
                                <div class="data_overview_percent_item_inner"><label>周</label>
                                    <p class="tips_global"><span class="mini_tips warn">0.53%↓</span></p>
                                </div>
                            </li>
                            <li class="data_overview_percent_item">
                                <div class="data_overview_percent_item_inner"><label>月</label>
                                    <p class="tips_global"><span class="mini_tips success">12.69%↑</span></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="gaiLanShuJu">
            <el-row>
                <el-col :span="12">
                    <h3>活跃用户</h3>
                </el-col>
                <el-col :span="12">
                    <h3>新增用户</h3>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class="huoYueTuBiao">
                        <div v-if="huoYueData.rows.length">
                            <ve-line :data="huoYueData"></ve-line>
                        </div>
                        <div v-else>
                            <p>目前没有数据</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="XinZhenTuBiao">
                        <div v-if="xinZengData.rows.length">
                            <ve-line :data="xinZengData"></ve-line>
                        </div>
                        <div v-else>
                            <p>目前没有数据</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!--活跃日线图-->

        <!--新增日线图-->
    </div>

</template>

<script>
    export default {
        name: "index-main",
        components:{

        },
        data () {
            return {
                // 参考数据
                // chartData: {
                //     columns: ['日期', '访问用户', '下单用户'],
                //     rows: [
                //         { '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },
                //         { '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },
                //         { '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }
                //     ]
                // },
                xinZengData:{
                    columns: ['日期', '人数'],
                    rows:[]
                },
                huoYueData:{
                    columns: ['日期', '人数'],
                    rows:[]
                },
            }
        },
        created() {
            console.log(this.$XH.getDay())
            // 渲染新增用户数
            this.getXinZengList({
                "Page": 1,
                "PageSize": 30,
                "AppId": 1,
                "ActionId": 5,
                "StartTime": "2020-04-07 17:00:00",
                "EndTime": this.$XH.getDay()
            })
            // 渲染活跃用户数
            this.getActionDailyList({
                "Page": 1,
                "PageSize": 30,
                "AppId": 1,
                "ActionId": 4,
                "StartTime": "2020-04-07 17:00:00",
                "EndTime": this.$XH.getDay()
            });
        },
        methods:{
            // 获取活跃用户
            async getActionDailyList(data){
                // eslint-disable-next-line no-unused-vars
                let res = await this.$Http.getActionDailyList(data);
                console.log(res.list)
                this.huoYueData.rows = this.$XH.toZiDingYiTitle(res.list,'日期','人数');

            },
            // 获取新增用户数
            async getXinZengList(data){
                // eslint-disable-next-line no-unused-vars
                let res = await this.$Http.getActionDailyList(data);
                console.log(res.list)
                this.xinZengData.rows = this.$XH.toZiDingYiTitle(res.list,'日期','人数');

            },
        }
    }
</script>

<style scoped>
    .warn {
        color: #F56C6C;
    }
    .success {
        color: #67C23A;
    }
    .data_overview_percent_item {
        text-align: center;
    }
    ul.data_overview_percent {
        width: 100px;
        margin: 0 auto;
    }
    .data_overview_percent_item_inner label{
        width: 2em;
        float: left;
        color: #909399;
    }
    .data_overview_desc {
        font-size: 28px;
        color: #353535;
    }
    .data_overview_title {
        color: #909399;
    }
    .data_overview_item{
        text-align: center;
        font-size: 14px;
        color: #353535;
    }
    #app {
        max-width: 1280px;
        margin: 0 auto;
    }
    .tongGao,.gaiLanShuJu {
        box-sizing: border-box;
        padding:0 40px 40px 40px;
        background: #ffffff;
        border-radius: 4px;
        border: 1px solid #e7e7eb;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        margin-top: 40px;
        margin-bottom: 40px;
    }
    #app h3 {
        color: #353535;
        font-weight: normal;
    }
    .tongGao ul{
        display: flex;
        justify-content: space-between;
    }
    .tongGao ul  li{
        width: 50%;
    }
    .msg-item {
        display: flex;
        height: 45px;
        line-height: 45px;
        justify-content: space-between;
        padding-right: 40px;
    }
    .msg-item span {
        color: darkgray;
        font-size: 14px;
    }
    .msg-item a {
        font-size: 14px;
        color: #353535;
        text-decoration: none;
    }

    .msg-item a:hover {
        color: #2c3e50;
        text-decoration: underline;
    }
</style>
