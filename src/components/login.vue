<template>
    <div id="login">
        <div class="loginWarp">
            <img src="../assets/logo.png" alt="" class="logo">
            <div class="input">
                <el-input
                        placeholder="请输入账号"
                        v-model="user"
                        clearable>
                </el-input>
            </div>
            <div class="input">
                <el-input
                        placeholder="请输入密码"
                        v-model="password"
                        clearable>
                </el-input>
            </div>
            <div class="button">
                <el-button type="primary" size="medium">登录</el-button>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                user:'',
                password:''
            }
        },
        methods:{
            login:function () {
                // alert('登录成功')
                // this.$router.push('index')
                this.$data.isPage = false
            }
        }
    }
</script>

<style scoped>
#login{
    width: 100%;
    height: 100vh;
    background: #409EFF;
    color: #e7e7eb;
}
    .loginWarp {
        background: #ffffff;
        padding: 40px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column ;
        justify-content: center;
        align-items: center;
    }
    .logo {
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
    }
    .input {
        margin-bottom: 20px;
    }

</style>
