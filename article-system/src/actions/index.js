import axios from 'axios'

// 请求数据方法
export function fetchResources(){
    return axios.get("/api/resources").then((res) => res.data)
}
