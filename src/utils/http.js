import axios from 'axios'
import qs from 'qs'
// 获取cookies
export const getCookie = (name) => {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

export const token = 'WjqUyayCKpX9kWKvoV9XUI20HrCKUd6ArdtFlgZcRAE';

export const baseURL = process.env.NODE_ENV === 'production' ? 'https://production.com/' : 'api/' 

/**
 * 防止请求重复提交（多次点击按钮）
 */
let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let CancelToken = axios.CancelToken;
let removePending = (config) => {
    for (let p in pending) {
        if (pending[p].u === config.url + '&' + config.method) { //当当前请求在数组中存在时执行函数体
            pending[p].f(); //执行取消操作
            pending.splice(p, 1); //把这条记录从数组中移除
        }
    }
}
const instance = axios.create({
    baseURL: baseURL,
    transformResponse: [function (data) {
        const res = JSON.parse(data);
        if(res.code===200){
            return res.result;
        }else{
            return res;
        }
      }],
});
//添加请求拦截器
instance.interceptors.request.use(config => {
    removePending(config); //在一个ajax发送前执行一下取消操作
    config.cancelToken = new CancelToken((c) => {
        // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
        pending.push({ u: config.url + '&' + config.method, f: c });
    });
    return config;
}, error => {
    return Promise.reject(error);
});

//添加响应拦截器
instance.interceptors.response.use(response => {
    removePending(response.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    return response;
}, error => {
    return { data: {} }; //返回一个空对象，主要是防止控制台报错
});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export const httpGet = (url, paramData) => {
    const params = {
        ...paramData,
        access_token: token
    }
    return instance({
        method: 'get',
        url: url,
        params: params,
    })
}

export const httpPost = (url, paramData) => {
    const data = {
        ...paramData,
        access_token: token
    }
    return instance({
        method: 'post',
        url: url,
        data: qs.stringify(data)
    })
}

