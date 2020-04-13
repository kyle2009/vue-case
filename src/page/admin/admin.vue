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

    export default {
        data(){
            return{

            }
        },
        components: {
            index,
            menuLeft
        },
        mounted(){

        },
        methods:{

        }
    }
</script>

<style scoped>
    .router-view {
        padding: 60px 0 0 260px;
    }

</style>
