<template>
  <div class="login-conternal">
    <el-form
      ref="loginRef"
      :model="LoginForm"
      label-width="100px"
      class="demo-ruleForm"
      :rules="loginRules"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="LoginForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="LoginForm.password" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="LoginForm.code" />
        <img :src="data.captchaImg" alt="" @click="getCode" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getlogins">提交</el-button>
        <el-button>获取密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue'
import {getCodes, getLogin} from '../../api/login'
import {useRouter} from 'vue-router'
const router = useRouter()
const loginRef = ref()
const LoginForm = reactive({
  username: 'test',
  password: '1234567',
  code: ''
})
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '密码为必填项'
    }
  ],
  code: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入验证码'
    }
  ]
})
const data = reactive({
  token: '',
  captchaImg: ''
})

async function getCode() {
  const res = await getCodes()
  data.token = res.data.data.token
  data.captchaImg = res.data.data.captchaImg
}
getCode()
async function getlogins() {
  if (!loginRef.value) return
  await loginRef.value.validate(async (valid) => {
    if (valid) {
      const res = await getLogin({
        username: LoginForm.username,
        password: LoginForm.password,
        token: data.token,
        code: LoginForm.code
      })
      console.log(res)
      localStorage.setItem('token', res.headers.authorization)
      if (res.data.code === 200) {
        router.push('/')
      } else {
        alert(res.data.msg)
      }
    } else {
      alert('123')
    }
  })
}
</script>

<style lang="scss" scoped>
.login-conternal {
  background-color: #fafafa;
  height: 100%;
  overflow: hidden;
  .demo-ruleForm {
    height: 100%;
    margin: 250px auto;
    width: 600px;
    padding: 0 100px;
    box-sizing: border-box;
    .el-input {
      width: 300px;
      height: 40.8px;
    }
    .el-button {
      padding: 12px 20px;
      height: 40px;
    }
  }
}
</style>
