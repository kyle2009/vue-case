import {Message,MessageBox,Loading } from 'element-ui';
import axios from 'axios'
import service from './contact.api.js'
import apiurl from './api.config.js'

// 实例axios对象
let instance = axios.create({
    baseURL:apiurl.url,
    timeout:3000
})
// 获取token
if (localStorage.token){
    instance.defaults.headers['x-token'] = localStorage.token;
} else {
    MessageBox({
        message:'获取token失败，请重新登录'
    })
}


const Http = {}; // 包裹请求方法的容器

// 循环获取请求的数据
try {
    for ( let key in service){
        let api = service[key];

        Http[key] = async function(data) {
            let response = await instance.post(api.url,data)
            return response
        }
    }
} catch (e) {
    Message({
        message: e,
    })
}


// 请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    Loading.service({
        text:'loading...'
    });

    return config;
}, function (error) {

    // 对请求错误做些什么
    Message({
        message: '恭喜你，这是一条成功消息',
        type: 'warning'
    })
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    Loading.service({}).close()
    if (response.data.success){
        // 获取数据成功
        return response.data.data;
    } else {
        // 获取数据失败
        MessageBox({
            message:response.data.msg
        })
    }

}, function (error) {
    // 对响应错误做点什么
    MessageBox({
        message:error
    })
    return Promise.reject(error);
});

export default Http
