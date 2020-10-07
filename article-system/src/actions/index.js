import axios from 'axios'

// 请求数据方法
export function fetchResource(){
    return axios.get("https://vue3-fjord-81553.herokuapp.com/api/resources")
}