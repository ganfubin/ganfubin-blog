<template>
	<div id="footer" v-show="isHomePage">
		<el-row class="footer-container text-center">
		    <el-col :xs="8"><i class="el-icon-menu"></i></el-col>
        <el-col :xs="8"><i class="el-icon-star-on"></i></el-col>
        <el-col :xs="8"><i class="el-icon-setting"></i></el-col>
		</el-row>
	</div>
</template>

<script>
    export default {
      name: 'footer',
      data() {
          return {

          }
      },
      computed: {
        isHomePage: function(){
          var titie = this.$store.getters.title;
          var flag = true;
          if(titie != '首页'){
            flag = false;
          }
          return flag;
        }
      }
    }
</script>
<style scoped lang="scss">
  #footer {
      width: 100%;
      background-color: hsla(0,0%,100%,.95);
      position: fixed;
      bottom: 0;
      left: 0;
      transition: all .3s ease;
      box-shadow: 0 0 4px rgba(0,0,0,.25);
      z-index: 2;
  }
 .footer-container {
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
 }
</style>