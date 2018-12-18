import axios from 'axios'
import qs from 'qs'
// 获取cookies
export const getCookie = (name) => {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
const token = getCookie('_app_token_v3');
export const baseURL = process.env.NODE_ENV === 'production' ? 'https://api.example.com/' : 'api/' 
axios.defaults.baseURL = baseURL
if(token){
    axios.defaults.headers.common['Authorization'] = token
}
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export const httpGet = (url,params) => {
    return axios({
        method: 'get',
        url: url,
        params:params,
    })
}

export const httpPost = (url,data) => {
    return axios({
        method: 'post',
        url: url,
        data: qs.stringify(data)
    })
}

