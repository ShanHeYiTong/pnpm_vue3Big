<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="账号">
          <el-input
            v-model="formInline.username"
            type="text"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="formInline.password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router'

const formInline = ref({
  username: 'admin',
  password: 'password',
  repassword: ''
})

const onSubmit = () => {
  console.log('submit!')

  if (formInline.value.username === 'admin') {
    console.log(formInline.value.username)
    console.log(formInline.value.password)
    return router.push('/')
  }
}
// import { ref } from 'vue'

// const rules = {
//   username: [
//     { required: true, message: '请输入用户名', trigger: 'blue' },
//     { min: 5, max: 10, message: '用户名必须是5-10位的字符', trigger: 'blur' }
//   ],
//   password: [
//     { required: true, message: '请输入密码', trigger: 'blue' },
//     {
//       pattern: /^\S{6,15}$/,
//       message: '密码必须是6-15位的非空字符',
//       trigger: 'blur'
//     }
//   ]
// }
</script>

<style>
.login-page {
  width: 100%;
  height: 100%;
}
.bg {
  background-color: aquamarine;
}
.form {
}
</style>
