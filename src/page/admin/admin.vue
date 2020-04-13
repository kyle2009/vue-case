<template>
    <div id="index">
        <index></index>
        <menuLeft></menuLeft>
        <div class="router-view">
<!--            <menuSub v-if="isShowMenuSub"></menuSub>-->
            <router-view></router-view>
        </div>
<!--        <div id="echarts"></div>-->
    </div>

</template>
<script>
    import index from '../../components/app-header.vue';
    import menuLeft from '../../components/menu-left';
    // import menuSub from './menu-sub';
    // import echarts from 'echarts';
    // import 'echarts/map/js/china.js';
    // import './assets/province/province.js';

    // var echarts = require('echarts');

    // 基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById('echarts'));
    // 绘制图表


    export default {
        data(){
            return{
                // isShowMenuSub:false
            }
        },
        components: {
            index,
            menuLeft
        },
        mounted(){
            // this.drawLine();
        },
        methods:{
            drawLine:function () {
                // 图表代码

                // 图表代码---end
            }
        }
    }
</script>

<style scoped>
    .router-view {
        padding: 60px 0 0 260px;
    }

</style>
