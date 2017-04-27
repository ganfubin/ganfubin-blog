<template>
  <div id="login" ref="login">
    <div class="bg-container" :style="loginBg">
      <div class="form-container">
        <el-form :model="form" :rules="rules">
          <el-form-item >
              <el-input v-model="form.account" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item >
              <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="login" class="btn-submit">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    import utilDom from 'utils/dom.js';
    import utilWab from 'utils/webapp.js';
    export default {
    data() {
        return {
          form: {
            account: '',
            password: ''
          },
          loginBg: {background: "url(" + require('assets/img/login-bg.jpg') + ") no-repeat 100% 100%"},
          rules: {
            account: [
              { required: true, message: '账号不能为空', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '密码不能为空', trigger: 'blur' }
            ]
          }
        }
    },
    mounted: function(){
        this.$nextTick( () => {
               var $dom = $(this.$refs.login);
               this.$dom = $dom;
               this.initBgHeight($dom);
            })
        
    },
    methods:{
        initBgHeight: function($dom){
          utilDom.setModuleHeight($dom, 'height');
        },
        login: function(){
          // 获取已有账号密码
          var _vm = this;
          let params = { 
                account : _vm.form.account,
                password : _vm.form.password
              };

          if(params.account == '' || params.password == ''){
              console.log('账号密码不能为空==== 暂时没有做验证');
              return false;

          }
          utilWab.ajax({
            url:'/api/login/findAccount/'+params.account +'/'+ params.password,
            type: 'GET',
            success: function(result){
              if(result.status == 200){
                var data = result.data || [];
                  if(data.length){
                    data = data[0] || {};
                    window.sessionStorage.setItem('userAccount', data.account)
                    _vm.$store.dispatch('userInfo', data.account);
                    _vm.$router.go(-1);
                  }
              }
              
            },
            error: function(result){
              console.log(result);
            }
          });
        }
      }
    }
</script>
<style lang="scss" scoped>
  .bg-container{
    background-size: cover !important;
    height: 100%;
    display: table;
    width: 100%;
  }
  .form-container{
    padding: 10%;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
  .btn-submit{
    width: 100%
  }

</style>