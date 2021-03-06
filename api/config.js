// 引入依赖包
import axios from 'axios'
import qs from 'qs'
import config from './../config'

// 创建axios实例
axios.create({
  // baseURL: config.baseURL, // 因为我本地做了反向代理
  timeout: 10000
  // responseType: 'json'
  // withCredentials: true, // 是否允许带cookie这些
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  // }
})

// 添加接口请求拦截器
axios.interceptors.request.use(config => {
  // 放置发送请求前，需要修改的内容
  if (config.sendForm) { config.data = qs.stringify(config.data) };
  // 验证时候有token，有则加入请求头部
  // if (sessionStorage.getItem('token')) { config.headers.Authorization = sessionStorage.getItem('token') };
  // 使用form表单提交
  if (config.formData) {
    // config.responseType = 'blob'
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    const params = new FormData()
    for (let key of Object.keys(config.data)) {
      params.append(key, config.data[key])
    }
    config.data = params
  }
  // 返回请求数据
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加接口响应拦截器
axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  switch (response.status) {
    case 401:
      // router.push('/')
      break
    default: break
  }
  return response
}, error => {
  // 对响应错误做点什么
  // console.log(error.response)
  switch (error.response.status) {
    case 401:
      // router.push('/login')
      break
    case 500:
      // router.push('/login')
      break
    // default: alert('系统错误！'); break
  }
  return Promise.reject(error)
})

// axios.defaults.withCredentials = true

export default (url, method, data, sendForm, formData) => {
  // 初始化数据
  // const _env = env
  const _url = url || '/'
  const _method = method || 'get'
  const _data = data || {}
  const _sendForm = sendForm || false
  const _formData = formData || false
  // 返回axios实例
  if (_method === 'get') {
    return axios({
      url: `${config.serverUrl}${_url}`,
      method: _method,
      params: _data,
      sendForm: _sendForm,
      formData: _formData,
      withCredentials: true
    }).then(response => response.data)
  } else {
    return axios({
      url: `${config.serverUrl}${_url}`,
      method: _method,
      data: _data,
      sendForm: _sendForm,
      formData: _formData,
      withCredentials: true
    }).then(response => response.data)
  }
}
