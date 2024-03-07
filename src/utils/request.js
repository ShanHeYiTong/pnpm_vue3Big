import router from '@/router'
import { useUserStore } from '@/stores'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  //TODO  1 基础地址 超时时间
  baseURL,
  timeout: 10000
})

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    //TODO 2 携带token
    const useStore = useUserStore()
    if (useStore.token) {
      config.headers.Authorization = useStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

//响应拦截器
instance.interceptors.response.use(
  (res) => {
    //TODO 3处理业务失败  4 摘取核心响应数据
    if (res.data.code === 0) {
      return res
    }
    ElMessage.error(res.data.message || '服务器异常')
    return Promise.reject(res.data)
  },
  (err) => {
    //错误特殊情况 401 权限不足的时候
    if (err.response?.status === 401) {
      router.push('./login')
    }

    //错误默认情况
    ElMessage.error(err.response.data.message || '服务器异常')
    return Promise.reject(err)
  }
)

export default instance

export { baseURL }
