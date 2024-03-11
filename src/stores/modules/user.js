import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user.js'
//pinia 持久化安装包
// pnpm add pinia-plugin-persistedstate -D
//用户模块  token setToken removeToken
export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }
    const user = ref({})
    const getUser = async () => {
      const res = await userGetInfoService() // 请求获取数据
      user.value = res.data.data
    }

    return {
      token,
      setToken,
      removeToken,
      getUser
    }
  },
  {
    persist: true
  }
)
