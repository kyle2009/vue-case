<template>
    <div id="home">
        <el-row :gutter="40">
        <el-col :span="itemCol">
            <div class="itemBox" @click="hpjy">
                    <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
                    <h3>和平精英</h3>
                    <p>文字描述信息</p>
            </div>
        </el-col>

        <el-col :span="itemCol">

            <div class="itemBox">
                <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
                <h3>新斗罗大陆</h3>
                <p>文字描述信息</p>
            </div>

        </el-col>
    </el-row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                itemCol:6,
                circleUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
            }
        },
        methods:{
            hpjy:function () {
                this.$parent.isShowMenuSub = true;
                this.$router.push('homeMain');
            }
        }
    }
</script>

<style>
    #home {
        box-sizing: border-box;
        padding: 40px;
    }
    .itemBox {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        background: #ffffff;
        padding: 20px;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    .itemBox:hover{
        background: #409EFF;
        color: #ffffff;
        cursor: pointer;
    }
</style>
