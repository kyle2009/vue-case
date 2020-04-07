<template>
    <div id="app" >
        <ul class="menu-sub">
            <li>性别及年龄分布</li>
            <li>区域分布</li>
            <li>来源分析</li>
        </ul>
<!-- 性别分布-->
            <div class="xingbie item-box">
                <h3>性别分布</h3>

                <div class="select-box">
                    <el-select class="margin-R40" v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>

                    <el-select v-model="value2" placeholder="请选择">
                        <el-option
                                v-for="item in options2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>

                    <span class="tips-font">2020-04-01至2020-04-01</span>
                </div>

                <el-row class="xingbie-fenbu ">
                    <el-col :span="12"><ve-pie :data="xingbie"></ve-pie></el-col>
                    <el-col :span="12">
                        <el-table
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column
                                    prop="date"
                                    label="性别"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="用户数"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    label="占比">
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>

            </div>


<!--        年龄分布-->
        <el-row class="item-box">
            <h3>年龄分布</h3>
            <el-col :span="12">
                <ve-ring :data="nianling"></ve-ring>
            </el-col>
            <el-col :span="12"></el-col>
        </el-row>

<!--        区域分布-->
        <el-row class="item-box">

            <h3>区域分布</h3>
            <el-col :span="12">
<!--                地图 canvas-->
                <div id="chinamap" style="height: 100vh;">

                </div>
            </el-col>
            <el-col :span="12"></el-col>
        </el-row>

<!--        来源分布-->
        <div class="item-box">
            <h3>来源分布</h3>
            <ve-histogram :data="laiyuan"></ve-histogram>
        </div>
    </div>

</template>

<script>
    import echarts from 'echarts'
    import '../../assets/china.js';
    import '../../assets/province/province.js';

    export default {
        data () {

            return {

                xingbie: {
                    columns: ['性别', '人数'],
                    rows: [
                        { '性别': '男', '人数': 1393 },
                        { '性别': '女', '人数': 3530 },
                        { '性别': '未知', '人数': 2923 }
                    ]
                },
                nianling: {
                    columns: ['日期', '访问用户'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393 },
                        { '日期': '1/2', '访问用户': 3530 },
                        { '日期': '1/3', '访问用户': 2923 },
                        { '日期': '1/4', '访问用户': 1723 },
                        { '日期': '1/5', '访问用户': 3792 },
                        { '日期': '1/6', '访问用户': 4593 }
                    ]
                },
                laiyuan: {
                    columns: ['日期', '访问用户', '下单用户', '下单率'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                        { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                        { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                        { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                        { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                        { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                    ]
                },
                tableData: [{
                    date: '男',
                    name: '100',
                    address: '50%'
                }, {
                    date: '女',
                    name: '100',
                    address: '50%'
                }, {
                    date: '未知',
                    name: '0',
                    address: '0%'
                }],
                options: [{
                    value: '选项1',
                    label: '新增用户'
                }, {
                    value: '选项2',
                    label: '活跃用户'
                }],
                options2: [{
                    value: '选项1',
                    label: '昨天'
                }, {
                    value: '选项2',
                    label: '最近7天'
                },
                    {
                        value: '选项2',
                        label: '最近30天'
                    }],
                value: '活跃用户',
                value2: '昨天'
            }
        },
        mounted() {

            var myChart = echarts.init(document.getElementById('chinamap'));
            // var myChart = this.chart1

            function randomValue() {
                return Math.round(Math.random()*1000);
            }

            var provinces = [
                '北京',
                '天津',
                '上海',
                '重庆',
                '河北',
                '河南',
                '云南',
                '辽宁',
                '黑龙江',
                '湖南',
                '安徽',
                '山东',
                '新疆',
                '江苏',
                '浙江',
                '江西',
                '湖北',
                '广西',
                '甘肃',
                '山西',
                '内蒙古',
                '陕西',
                '吉林',
                '福建',
                '贵州',
                '广东',
                '青海',
                '西藏',
                '四川',
                '宁夏',
                '海南',
                '台湾',
                '香港',
                '澳门'
            ];

            var optionChina = {
                visualMap: {
                    min: 0,
                    max: 1000,
                    text: ['High', 'Low'],
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ['rgb(217, 236, 255)','#409EFF']
                    }
                },
                geo: {
                    map: 'china',
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: 'rgba(0,0,0,0.4)'
                            }
                        }
                    },


                },
                series : [
                    {
                        name: 'categoryA',
                        type: 'map',
                        geoIndex: 0,
                        tooltip: {show: false},
                        data:[
                            {name: '北京', value: randomValue()},
                            {name: '天津', value: randomValue()},
                            {name: '上海', value: randomValue()},
                            {name: '重庆', value: randomValue()},
                            {name: '河北', value: randomValue()},
                            {name: '河南', value: randomValue()},
                            {name: '云南', value: randomValue()},
                            {name: '辽宁', value: randomValue()},
                            {name: '黑龙江', value: randomValue()},
                            {name: '湖南', value: randomValue()},
                            {name: '安徽', value: randomValue()},
                            {name: '山东', value: randomValue()},
                            {name: '新疆', value: randomValue()},
                            {name: '江苏', value: randomValue()},
                            {name: '浙江', value: randomValue()},
                            {name: '江西', value: randomValue()},
                            {name: '湖北', value: randomValue()},
                            {name: '广西', value: randomValue()},
                            {name: '甘肃', value: randomValue()},
                            {name: '山西', value: randomValue()},
                            {name: '内蒙古', value: randomValue()},
                            {name: '陕西', value: randomValue()},
                            {name: '吉林', value: randomValue()},
                            {name: '福建', value: randomValue()},
                            {name: '贵州', value: randomValue()},
                            {name: '广东', value: randomValue()},
                            {name: '青海', value: randomValue()},
                            {name: '西藏', value: randomValue()},
                            {name: '四川', value: randomValue()},
                            {name: '宁夏', value: randomValue()},
                            {name: '海南', value: randomValue()},
                            {name: '台湾', value: randomValue()},
                            {name: '香港', value: randomValue()},
                            {name: '澳门', value: randomValue()}
                        ]
                    }
                ]
            };

            myChart.setOption(optionChina);

            myChart.on('click', (params) => {
                var curName = params.name;
                console.log(curName);

                // indexOf 如果要检索的字符串值没有出现，则该方法返回 -1。
                if (provinces.indexOf(curName) > -1) {
                    // 切换地图
                    var optionProvince = JSON.parse(JSON.stringify(optionChina));
                    optionProvince.geo.map = curName;
                    myChart.setOption(optionProvince);
                } else {
                    myChart.setOption(optionChina);
                }
            })
        }
    }
</script>

<style scoped>

    #chinamap {
        height: 100%;
    }

#app{
    max-width: 1280px;
    margin: 0 auto;
}
    .menu-sub {
        display: flex;
        font-size: 14px;
        color: #909399;
        margin-top: 10px;
    }
.menu-sub>li{
    padding-right: 40px;
    margin-right: 40px;
    border-right: 1px solid #E4E7ED;
}
.menu-sub>li:hover{
    color: #409EFF;
    cursor: pointer;
}
    .item-box{
        margin-top: 40px;
        padding: 40px 0px;
        border: 1px solid #DCDFE6;
        border-radius: 4px;
        background: #ffffff;
    }
    .item-box>h3{
        margin:0 0 40px 40px;
        padding: 0;
        font-size: 20px;
        font-weight: normal;
        color: #353535;
    }
    .select-box {
        margin: 0 0 40px 40px;
    }
    .margin-R40{
        margin-right: 40px;
    }
    .tips-font {
        font-size: 14px;
        color: #909399;
        display: inline-block;
        margin-left: 40px;
    }
</style>
