<template>
  <div id="app">
      <h1>实时数据</h1>
<!--      选择类型-->
      <div class="selectType">
          <el-select @change="getTypeValue" v-model="selectTypeValue" placeholder="选择类型">
              <el-option
                      v-for="item in selectTypeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
          </el-select>
      </div>
<!--选择时间-->
      <div class="selectWarp">
<!--时间选择-前-->
          <el-date-picker
                  @change="getTimeQian"
                  v-model="value1"
                  type="datetimerange"
                  :picker-options="pickerOptionsPre"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  align="right">
          </el-date-picker>
          <!--对比时间-后-->
          <div class="shiJianDuiBi-hou" v-if="isShowShiJianDuiBiHou" >
              <span class="shiJianDuiBi-txt">对比</span>
              <el-date-picker
                      @change="getTimeHou"
                      v-model="value2"
                      type="datetimerange"
                      :picker-options="pickerOptionsAfter"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      align="right">
              </el-date-picker>

          </div>
          <el-select v-model="lidu" placeholder="请选择" class="xh-margin-left-20 selectLiDU" >
              <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
          </el-select>

<!--时间对比-按钮-->
          <div class="rilitu">
              <el-button @click="shiJianDuiBi">{{ textShiJianDuiBiHou }}</el-button>
          </div>
      </div>

<!--数据图表-->
     <div class="tubiao">
         <ve-line :data="chartData" :settings="chartSettings"></ve-line>
     </div>
  </div>

</template>

<script>
    export default {
        data () {
            // 设置图表参数
            this.chartSettings = {
                metrics: ['API调用次数', '登录次数'],
                dimension: ['日期'],
                area: true
            }
            return {
                isShowShiJianDuiBiHou:false, // 是否显示时间对比后
                textShiJianDuiBiHou:'时间对比',
                // 实时图表数据
                chartData: {
                    columns: ['日期', 'API调用次数', '登录次数'],
                    rows: [
                        { '日期': '1/1', 'API调用次数': 1393, '登录次数': 1093},
                        { '日期': '1/2', 'API调用次数': 3530, '登录次数': 3230},
                        { '日期': '1/3', 'API调用次数': 2923, '登录次数': 2623},
                        { '日期': '1/4', 'API调用次数': 1723, '登录次数': 1423},
                        { '日期': '1/5', 'API调用次数': 3792, '登录次数': 3492},
                        { '日期': '1/6', 'API调用次数': 4593, '登录次数': 4293}
                    ]
                },
                // 时间选择-时间对比前
                pickerOptionsPre: {
                    shortcuts: [{
                        text: '最近1天',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', [start, end]);
                        }
                    },{
                        text: '最近3天',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 3);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近30天',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }],
                    disabledDate:function (time) {
                        // 今天之后的日期不可选
                        return time.getTime() > Date.now() - 8.64e6;
                    }
                },
                // 初始显示数据-时间对比前
                value1: [
                    new Date(new Date().getFullYear(), new Date().getMonth() , new Date().getDate() -1 , new Date().getHours(), new Date().getMinutes(),new Date().getSeconds()),
                    new Date(new Date().getFullYear(), new Date().getMonth() , new Date().getDate() , new Date().getHours(), new Date().getMinutes(),new Date().getSeconds())
                ],
                // 初始显示数据-时间对比后
                pickerOptionsAfter: {
                    shortcuts: [{
                        text: '对比前1天',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 48);
                            picker.$emit('pick', [start, end]);
                        }
                    },{
                        text: '对比前3天',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 3);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '对比前30天',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }],
                    disabledDate:function (time) {
                        // 今天之后的日期不可选
                        return time.getTime() > Date.now() - 8.64e6;
                    }
                },
                value2: [
                    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() -2 , new Date().getHours(), new Date().getMinutes(),new Date().getSeconds()),
                    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()-1 , new Date().getHours(), new Date().getMinutes(),new Date().getSeconds())
                ],
                // 粒度选择
                options: [{
                    value: '60',
                    label: '1小时颗粒度'
                }, {
                    value: '5',
                    label: '5分钟颗粒度'
                }, {
                    value: '1',
                    label: '1分钟颗粒度'
                }],
                lidu: '1',

                // 选择类型数据
                selectTypeList:[{
                    value: '1',
                    label: 'API调用次数'
                }, {
                    value: '3',
                    label: '登录次数'
                }, {
                    value: '6',
                    label: '扫码次数'
                }],
                selectTypeValue:'1'
            }
        },
        created() {
          this.getShiShiShuJu({
              "Page": 1,
              "PageSize": 10,
              "AppId": 1,
              "ActionId": this.selectTypeValue,
              "StartTime": this.$XH.formatDateTime(this.value1[0]),
              "EndTime": this.$XH.formatDateTime(this.value1[1])
          })
        },
        methods:{
            // 显示/隐藏时间对比
            shiJianDuiBi:function () {
                if(!this.isShowShiJianDuiBiHou){
                    this.isShowShiJianDuiBiHou = true
                    this.textShiJianDuiBiHou = '取消对比'
                } else {
                    this.isShowShiJianDuiBiHou = false
                    this.textShiJianDuiBiHou = '时间对比'
                }

            },
            // 获取选择类型的值
            getTypeValue:function(e){
                // e 获取选择类型的值
                console.log(e)
                // 获取时间开始和结束--前
                console.log(this.$XH.formatDateTime(this.value1[0]))
                // 获取时间开始和接收--后
                if(this.isShowShiJianDuiBiHou){
                    // 开启了数据比较
                } else {
                    // 没有开启数据比较
                }
            },
            // 选择时间的值--前
            getTimeQian:function(){

            },
            // 选择时间的值--后
            getTimeHou:function(){

            },
            // 获取需要渲染的数据
            getShiShiShuJu: async function () {
                // 进行时间区间比较
                // 1分钟最大为1天1440；5分钟最大为3天864；1小时最大为30天720

                let preData = {
                    "Page": 1,
                    "PageSize": 10,
                    "AppId": 1,
                    "ActionId": this.selectTypeValue - 0,
                    "StartTime": this.$XH.formatDateTime(this.value1[0]),
                    "EndTime": this.$XH.formatDateTime(this.value1[1])
                };
                let afterDate = {};
                if (this.isShowShiJianDuiBiHou) {
                    // 开启了时间对比，获取对比时间的数据
                    afterDate = {
                        "Page": 1,
                        "PageSize": 10,
                        "AppId": 1,
                        "ActionId": this.selectTypeValue - 0,
                        "StartTime": this.$XH.formatDateTime(this.value2[0]),
                        "EndTime": this.$XH.formatDateTime(this.value2[1])
                    }
                }
                let res2 = await this.$Http.getActionMinuteList(afterDate);
                console.log(res2)
                switch (this.lidu) {
                    case '1':
                        // 每分钟数据
                        // eslint-disable-next-line no-case-declarations
                        let res = await this.$Http.getActionMinuteList(preData);
                        console.log(res.list)
                        // this.huoYueData.rows = this.$XH.toZiDingYiTitle(res.list,'日期','人数');
                        break;
                    case '5':
                        // 每5分钟数据

                        break;
                    case '60':
                        // 每小时数据

                        break;
                    default:
                        this.$message('API接口匹配颗粒度失败');
                }
            },
        }
    }
</script>

<style scoped>
    #app{
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
        margin-top: 10px;
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

    .selectType {
        margin-top: 40px;
    }
    .shiJianDuiBi-hou {
        display: inline-block;
    }
    .shiJianDuiBi-txt {
        display: inline-block;
        margin: 0 10px;
        font-size: 14px;
        color: #909399;
    }
    .selectLiDU {
        width: 130px;
    }
</style>
