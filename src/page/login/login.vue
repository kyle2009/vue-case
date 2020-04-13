<template>
    <div id="login">
        <div class="loginWarp">
            <el-form ref="form" :model="form" label-width="80px">

            <img src="../../assets/logo.png" alt="" class="logo">
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
                        show-password>

                </el-input>
            </div>
            <div class="input yzm-input">
                <el-input
                        placeholder="输入验证码"
                        v-model="yzm"
                        >
                </el-input>
                <img :src="yzmImg" alt="" @click="getYZM()" class="yzmImg">
            </div>
            <div class="button">
                <el-button type="primary" size="medium" @click="onSubmit"  >登录</el-button>
            </div>

            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import api from '@/api/api.config.js';
    export default {
        name: "login",
        data(){
            return {
                user:'',
                password:'',
                yzm:'',
                yzmImg:'',
                captcha:'',
                captchaId:'',
                btnDisabled:false
            }
        },
        methods:{
            // 表单登录
            onSubmit:function () {
                // 禁用表单

                let that = this;
                // {"username":"admin","password":"bi@2020","captcha":"819311","captchaId":"GpfwTyILbnNgYjLS97C0"}
                axios.post(api.login,{
                    username: that.user,
                    password: that.password,
                    captcha:that.yzm,
                    captchaId:that.captchaId
                })
                    .then(function (response) {
                        console.log(response);
                        if (response.data.success){
                            // 登录成功
                            that.msgSuccess('登录成功');
                            // 保存token
                            localStorage.token=response.data.data.token;
                            // 跳转到admin页面
                            that.$router.push('/admin')
                        } else {
                            // 登录失败
                            that.$message.error(response.data.msg);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },

            // 登录成功提示
            msgSuccess(msg){
                this.$message({
                    message: msg,
                    type: 'success'
                });
            },

            // 出错提示
            msgError(error){
                this.$message.error(error);
            },

            // 获取验证码
            getYZM:function () {
                let that = this;
                axios.post(api.captcha)
                    .then(function (response) {
                        if (response.data.success){
                            // 请求成功,更换验证码图片
                            that.yzmImg = api.url+response.data.data.picPath;
                            that.captchaId = response.data.data.captchaId;
                        } else {
                            // 请求失败

                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        created() {
            // 请求验证码
            this.getYZM()
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
        max-width: 200px;
        margin-bottom: 20px;
    }
    .yzmImg {
        width: 120px;
        height: 40px;
    }
    .yzm-input {
        display: flex;
        justify-content: space-between;
    }
.yzm-input>input{
    min-width: 120px;
}
</style>
