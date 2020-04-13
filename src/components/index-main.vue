<template>
    <div id="app">
        <menuSub></menuSub>
        <router-view></router-view>


        <!--新增日线图-->
    </div>

</template>

<script>
    import menuSub from './menu-sub';
    export default {
        name: "index-main.vue",
        components:{
            menuSub
        },
        data () {
            return {
                chartData: {
                    columns: ['日期', '访问用户', '下单用户'],
                    rows: [
                        { '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },
                        { '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },
                        { '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }
                    ]
                }
            }
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
