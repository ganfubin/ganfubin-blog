<template>
    <div class="user-info pd-all" ref="userInfo">
        <!-- 未登录 -->
        <ul class="login-no" v-if="!userInfo">
            <li class="login js-login" data-url="/login" @click="login"><a >登录</a></li>
        </ul>
        <!-- 已登录 -->
        <div class="login-yes" v-if="userInfo" >
            <img :src="userImg"><span class="info">{{userInfo}}</span>
        </div>
    </div>
</template>
<script>
    export default {
      name: 'userInfo',
      data() {
          return {
           //userInfo: false
           userImg: require('assets/img/user.png')
          }
      },
      computed:{
          userInfo: function(){
              return this.$store.getters.userInfo;
          }
      },
      mounted: function () {
        this.$nextTick( () => {
          this.$dom = $(this.$refs.userInfo);
        })
      },
      methods: {
        login: function(){
          var _vm = this;
          var $this = _vm.$dom.find('.js-login');
          _vm.$store.dispatch('toggleMenu');
          var url = $this.data('url');
          var title = $this.find('a').text();
          _vm.$store.dispatch('toggleTitle', title);
          _vm.$router.push(url);

        }
      }
    }
</script>

<style lang="scss" scoped>
img{
  width: 30px;
  border-radius: 50%;
}
.info{
  position: absolute;
  top: 34px;
  left: 68px;
  font-size: 18px;

}

</style>
