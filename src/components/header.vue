<template>
	<div id="header">
		<el-row class="header-container" >
		    <el-col :xs="24">
          <div class="toolbar-left" :style="leftIcon" @click="toggleMenu"></div>
          <div v-text="title" class="text-center"></div>
		    </el-col>
		</el-row>
	</div>
</template>

<script>
    export default {
      name: 'header',
      data() {
          return {
            leftIcon: {background: "url(" + require('assets/img/nav_icon.png') + ") no-repeat 50%"}
          }
      },
      computed: {
        title: function(){
          return this.$store.getters.title;
        }
      },
      mounted: function () {
        //this.renderTitle();
      },
      methods: {
        toggleMenu: function(){
          this.$store.dispatch('toggleMenu');
        },
        renderTitle: function(){
          var routeName= (this.$route.name || '').toLocaleLowerCase();
          var title = '';

          switch (routeName)
          {
            case 'home' :
              title = '首页';
              break;

              case 'about' :
              title = '关于';
              break;

              case 'login' :
              title = '登录';
              break;

              default : 
              title = '首页';
          }
          this.$store.dispatch('toggleTitle', title);
        }
      },
      watch: {
          '$route': 'renderTitle'
      }
    }
</script>
<style scoped lang="scss">
  #header {
      width: 100%;
      background-color: hsla(0,0%,100%,.95);
      position: fixed;
      top: 0;
      left: 0;
      transition: all .3s ease;
      box-shadow: 0 0 4px rgba(0,0,0,.25);
      z-index: 2;
  }
 .header-container {
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
 }
 .toolbar-left{
    width: 49px;
    height: 44px;
    position: absolute;
    background-size: 19px 16px !important;
    margin: 0;
    z-index: 1;
    top: 0;
    left: 0;
 }
</style>