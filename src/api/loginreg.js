import axios from 'axios';
import api from './api.config';

function loginReq(that) {
    console.log(that)
    // 判断值是否为空
    if (that.user.trim() === ''){that.$message.error('请输入用户名'); return;}
    if (that.password.trim() === ''){that.$message.error('请输入密码'); return;}
    if (that.yzm.trim() === ''){that.$message.error('请填写验证码'); return;}

    // {"username":"admin","password":"bi@2020#04","captcha":"819311","captchaId":"GpfwTyILbnNgYjLS97C0"}
    // 禁用提交按钮，避免重复提交
    that.btnDisabled = true;
    // 提交表单
    axios.post(api.login,{
        username: that.user,
        password: that.password,
        captcha:that.yzm,
        captchaId:that.captchaId
    })
        .then(function (response) {
            console.log(response);
            // 启用提交按钮
            that.btnDisabled = false;
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
            // 启用提交按钮
            that.btnDisabled = false;
            console.log(error);
        });
}

export {
    loginReq
}
