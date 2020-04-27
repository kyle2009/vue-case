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
         <ve-line :grid="grid"  :data-empty="dataEmpty" :data="chartData" :settings="chartSettings"  :extend="extend"></ve-line>
     </div>
  </div>

</template>

<script>
    export default {
        data () {
            // 图表属性配置 -- start
            this.extend = {
                'xAxis.0.axisLabel.rotate':0,
            }
            this.grid = {
                x2: 20 // 图表右侧文字显示不全的解决办法
            }
            this.chartSettings = {
                area: true,
                xAxisType: 'time',
                labelMap: {
                    'time': '日期',
                    'time2':'',
                    'count':'',
                    'count2':this.$XH.getDay()
                },
                legendName: {
                    '日期': `API调用次数`
                }
            }
            // 图表属性配置 --- end
            return {
                isShowShiJianDuiBiHou:true, // 是否显示时间对比后
                textShiJianDuiBiHou:'取消对比',
                // 实时图表数据
                dataEmpty: false,
                chartData: {
                    columns: ['time', 'count','count2'],
                    rows: []
                },
                // 时间选择-时间对比前
                pickerOptionsPre: {

                    disabledDate:function (time) {
                        // 今天之后的日期不可选
                        return time.getTime() > Date.now() - 8.64e6;
                    }
                },
                // 初始显示数据-时间对比前
                value1: [
                    new Date(new Date().getFullYear(), new Date().getMonth() , new Date().getDate() , 0, 0,0),
                    new Date(new Date().getFullYear(), new Date().getMonth() , new Date().getDate() , 23, 59,59)
                ],
                // 初始显示数据-时间对比后
                pickerOptionsAfter: {
                    disabledDate:function (time) {
                        // 今天之后的日期不可选
                        return time.getTime() > Date.now() - 8.64e6;
                    }
                },
                value2: [
                    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() -1 , 0, 0,0),
                    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()-1 , 23, 59,59)
                ],
                // 粒度选择
                options: [{
                    value: 3,
                    label: '1小时颗粒度'
                }, {
                    value: 2,
                    label: '5分钟颗粒度'
                }, {
                    value: 1,
                    label: '1分钟颗粒度'
                }],
                lidu: 1,

                // 选择类型数据
                selectTypeList:[{
                    value: 1,
                    label: 'API调用次数'
                }, {
                    value: 3,
                    label: '登录次数'
                }, {
                    value: 6,
                    label: '扫码次数'
                }],
                selectTypeValue:1
            }
        },
        created() {

            // console.log(typeof this.$XH.formatDateTime(this.value1[0]))
           // 初始图表数据
          this.getShiShiShuJu()
        },
        methods:{
            // 时间对比
            shiJianDuiBi:function () {

                // 时间对比按钮时间对比时间切换
                if(!this.isShowShiJianDuiBiHou){
                    // 开启时间对比
                    this.isShowShiJianDuiBiHou = true
                    this.textShiJianDuiBiHou = '取消对比'
                    // 使用默认数据拉取数据

                } else {
                    // 取消时间对比
                    this.isShowShiJianDuiBiHou = false
                    this.textShiJianDuiBiHou = '时间对比'
                    // 去除时间对比拉取数据-单列数据

                }
                this.getShiShiShuJu()
            },
            // 获取选择类型的值
            getTypeValue:function(){
                // 拉取数据，并渲染图表数据
                this.getShiShiShuJu()
            },
            // 选择时间的值--前
            getTimeQian:async function(e){
                await  this.$XH.zyDateQuJian(e,this.lidu)
                this.getShiShiShuJu()
            },
            // 选择时间的值--后
            getTimeHou:async function(e){
                await  this.$XH.zyDateQuJian(e,this.lidu)
                this.getShiShiShuJu()
            },
            // 获取需要渲染的数据
            getShiShiShuJu: async function () {
                // 修改坐标名称
                this.chartSettings.labelMap['count'] = `${this.$XH.formatDateTimeDuan(this.value1[0])} 至 ${this.$XH.formatDateTimeDuan(this.value1[1])}`;
                this.chartSettings.labelMap['count2'] = `${this.$XH.formatDateTimeDuan(this.value2[0])} 至 ${this.$XH.formatDateTimeDuan(this.value2[1])}`
                // 进行时间区间比较；1分钟最大为1天1440；5分钟最大为3天864；1小时最大为30天720
                // 获取时间-前
                let preData = {
                    "Page": 1,
                    "PageSize": 1440,
                    "AppId":1,
                    "ActionId": this.selectTypeValue - 0,
                    "StartTime": this.$XH.formatDateTime(this.value1[0]),
                    "EndTime": this.$XH.formatDateTime(this.value1[1])
                }, res1;
                // 获取前-时间的数据
                res1 = await this.$Http.getActionMinuteList(preData);

                // 获取时间--后
                let afterDate = {}, res2; // 开启时间对比获取新的数据
                if (this.isShowShiJianDuiBiHou) {
                    // 开启了时间对比，获取对比时间的数据
                    afterDate = {
                        "Page": 1,
                        "PageSize": 1440,
                        "AppId": 1,
                        "ActionId": this.selectTypeValue - 0,
                        "StartTime": this.$XH.formatDateTime(this.value2[0]),
                        "EndTime": this.$XH.formatDateTime(this.value2[1])
                    }
                    // 获取时间--后 的数据
                    res2 = await this.$Http.getActionMinuteList(afterDate);

                } else {
                    res2 = [];
                }
                console.log(res1.list)
                console.log(res2.list)
                // 合并两个时间段的数组
                // this.chartData.rows['4-26'] = res1;
                // this.chartData.rows['4-27'] = res2;
                // res1.list.unshift({time:this.$XH.getToday()})
                // this.chartData.rows = res1.list
                for (let i = 0; i<1440; i++){
                    if (res1.list[i]){
                        res1.list[i]['time2'] = {}
                        res1.list[i]['time2'] = res2.list[i]? res1.list[i]['time'] : '';
                        res1.list[i]['count2'] = {}
                        res1.list[i]['count2'] = res2.list[i]? res1.list[i]['count'] : '';
                    } else  {
                        res1.list[i] = [];
                        res1.list[i]['count2'] = res2.list[i]? res1.list[i]['count'] : ''
                    }

                }
                console.log(res1)
                res1.list.unshift({time:this.$XH.getToday()})
                this.chartData.rows = res1.list
                // 根据不同的粒度调用不同的接口
                switch (this.lidu) {
                    case 1:
                        // 每分钟数据
                        // eslint-disable-next-line no-case-declarations
                        // let res = await this.$Http.getActionMinuteList(preData);
                        // res.list.unshift({time:this.$XH.getToday()}) // 数组补全
                        // this.chartData.rows = res.list
                        break;
                    case 2:
                        // 每5分钟数据

                        break;
                    case 3:
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
