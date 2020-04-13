import axios from 'axios'
// import api from "./api.config";

// 记录和显示错误
function log (error) {
    console.log(error)
}

const instance = axios.create({
    baseURL: 'http://118.25.195.73:9999',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export function request (config) {

}
