import { defineStore } from 'pinia'
import { ref } from 'vue'
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

    return {
      token,
      setToken,
      removeToken
    }
  },
  {
    persist: true
  }
)
