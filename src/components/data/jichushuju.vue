<template>
    <div id="app">
        <h1>基础数据</h1>
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
                metrics: ['API调用次数', '登录次数','扫码次数'],
                dimension: ['日期']
            }
            return {
                chartData: {
                    columns: ['日期', 'API调用次数', '登录次数', '扫码次数'],
                    rows: [
                        { '日期': '1/1', 'API调用次数': 1393, '登录次数': 1093, '扫码次数': 2000},
                        { '日期': '1/2', 'API调用次数': 3530, '登录次数': 3230, '扫码次数': 2200},
                        { '日期': '1/3', 'API调用次数': 2923, '登录次数': 2623, '扫码次数': 2400},
                        { '日期': '1/4', 'API调用次数': 1723, '登录次数': 1423, '扫码次数': 2500},
                        { '日期': '1/5', 'API调用次数': 3792, '登录次数': 3492, '扫码次数': 2700 },
                        { '日期': '1/6', 'API调用次数': 4593, '登录次数': 4293, '扫码次数': 3000 }
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
