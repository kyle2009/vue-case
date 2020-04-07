<template>
    <div id="app">
        <h1>行为数据</h1>
        <!--      功能菜单-->
        <div class="selectWarp">
            <el-select v-model="value1"  placeholder="请选择类型">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <span class="duibi-text">对比</span>
            <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
            </el-date-picker>

            <div class="rilitu">
                <el-select v-model="value2"  placeholder="请选择类型">
                    <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>

        <!--    数据图表-->
        <div class="tubiao">
            <ve-line :data="chartData" :settings="chartSettings"></ve-line>
        </div>
    </div>

</template>

<script>
    export default {
        data () {
            this.chartSettings = {
                metrics: ['扫码次数', '扫码人数','抽奖次数','抽奖人数','设置题目次数','设置题目人数','关注公众号的次数','关注公众号的人数'],
                dimension: ['日期']
            }
            return {
                chartData: {
                    columns: ['日期', '扫码次数', '扫码人数','抽奖次数','抽奖人数','设置题目次数','设置题目人数','关注公众号的次数','关注公众号的人数'],
                    rows: [
                        { '日期': '1/1', '扫码次数': 1393, '扫码人数': 1193, '抽奖次数': 2100, '抽奖人数': 1393, '设置题目次数': 1093, '设置题目人数': 2000, '关注公众号的次数': 1393, '关注公众号的人数': 1093},
                        { '日期': '1/2', '扫码次数': 1493, '扫码人数': 1293, '抽奖次数': 2200, '抽奖人数': 1393, '设置题目次数': 1093, '设置题目人数': 2000, '关注公众号的次数': 1393, '关注公众号的人数': 1093},
                        { '日期': '1/3', '扫码次数': 1593, '扫码人数': 1393, '抽奖次数': 2300, '抽奖人数': 1393, '设置题目次数': 1093, '设置题目人数': 2000, '关注公众号的次数': 1393, '关注公众号的人数': 1093},
                        { '日期': '1/4', '扫码次数': 1693, '扫码人数': 1493, '抽奖次数': 2400, '抽奖人数': 1393, '设置题目次数': 1093, '设置题目人数': 2000, '关注公众号的次数': 1393, '关注公众号的人数': 1093},
                        { '日期': '1/5', '扫码次数': 1793, '扫码人数': 1593, '抽奖次数': 2500, '抽奖人数': 1393, '设置题目次数': 1093, '设置题目人数': 2000, '关注公众号的次数': 1393, '关注公众号的人数': 1093},
                        { '日期': '1/6', '扫码次数': 1893, '扫码人数': 1693, '抽奖次数': 2600, '抽奖人数': 1393, '设置题目次数': 1093, '设置题目人数': 2000, '关注公众号的次数': 1393, '关注公众号的人数': 1093},
                        { '日期': '1/7', '扫码次数': 1993, '扫码人数': 1793, '抽奖次数': 2700, '抽奖人数': 1393, '设置题目次数': 1093, '设置题目人数': 2000, '关注公众号的次数': 1393, '关注公众号的人数': 1093}
                    ]
                },
                options: [{
                    value: '选项1',
                    label: '最近7天'
                }, {
                    value: '选项2',
                    label: '最近30天'
                }, {
                    value: '选项3',
                    label: '自定义'
                }],
                options2: [{
                    value: '选项1',
                    label: '1分钟'
                },{
                    value: '选项1',
                    label: '5分钟'
                },{
                    value: '选项1',
                    label: '小时'
                }, {
                    value: '选项2',
                    label: '日'
                }, {
                    value: '选项3',
                    label: '周'
                }, {
                    value: '选项3',
                    label: '月'
                }],
                value1: [],
                value2: '小时'
            }
        }
    }
</script>

<style scoped>
    #app{
        max-width: 1200px;
        background: #ffffff;
        border-radius: 4px;
        padding: 40px;
        border: 1px solid #DCDFE6;
        margin: 40px auto 0;
    }
    #app h1 {
        margin: 0;
        padding: 0;
        font-size: 20px;
        font-weight: normal;
    }
    .selectWarp {
        margin-top: 40px;
    }
    .tubiao {
        margin-top: 40px;
    }
    .duibi-text {
        display: inline-block;
        margin: 0 40px;
        font-size: 14px;
        color: #909399;
    }
    .rilitu {
        float: right;
    }
</style>
