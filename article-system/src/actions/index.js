import axios from 'axios'

// 请求数据方法
export function fetchResources(){
    return axios.get("/api/resources").then((res) => res.data)
}

// 更新数据方法
// 传入对应id，及新内容
export function updateResource(id, resource){
    return axios
        .patch(`/api/resources/${id}`, resource)
        .then((res) => res.data)
        .catch((error) => {
            // 返回错误信息
            return Promise.reject(error?.response?.data)
        })
}

// 删除数据
// 传入要删除数据的id
export function deleteResource(id){
    return axios
        .delete(`/api/resources/${id}`)
        .then((res) => res.data)
        .catch((error) => {
            // 返回错误信息
            return Promise.reject(error?.response?.data)
        })
}