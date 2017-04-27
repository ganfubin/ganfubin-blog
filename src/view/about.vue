<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="请输入账号">
              <el-input v-model="form.account"></el-input>
          </el-form-item>
          <el-form-item label="请输入密码">
              <el-input v-model="form.password"></el-input>
          </el-form-item>
      </el-form>
      <el-button type="primary" @click="login">Primary</el-button>
  </div>
</template>

<script>
    export default {
    data() {
        return {
          form:{
             account : '',
             password : ''
          }
        }
    },
    methods:{
      login() {
        // 获取已有账号密码
        this.$http.get('api/login/getAccount')
          .then((response) => {
            // 响应成功回调
            console.log(response)
            let params = { 
              account : this.form.account,
              password : this.form.password
            };
            // 创建一个账号密码
            return this.$http.post('/api/login/createAccount',params);
          })
          .then((response) => {
            console.log(response)
          })
          .catch((reject) => {
            console.log(reject)
          });
        }
      }
    }
</script>