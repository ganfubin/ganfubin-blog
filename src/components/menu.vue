<template>
    <section id="menu" ref="menu">
    	<div class="shade-page" v-show="menuState" @click="toggleMenu"></div>
    	<div class="nav-list pd-all" :class="{'show':menuState}">
	        <cmptUserInfo></cmptUserInfo>
	        <ul class="list-ul pd-all js-menu-ul">
                <li data-url="/"><i class="fa fa-home mg-rgt-xs"></i>首页</li>
	        	<li data-url="/about"><i class="fa fa-cog mg-rgt-xs"></i>数据抓取</li>
	        	<li data-url="/about"><i class="fa fa-area-chart mg-rgt-xs"></i>数据分析</li>
	        	<li data-url="/about"><i class="fa fa-git mg-rgt-xs"></i>关于</li>
	        </ul>   		
    	</div>
    </section>
</template>
<script>
	import cmptUserInfo from 'components/user-info.vue';
    export default {
        components: {
            cmptUserInfo
        },
        computed:{
            menuState: function(){
                return this.$store.getters.menuState;
            }
        },
        mounted: function () {
        	var _vm = this;
        	this.$nextTick( () => {
                var $dom = $(this.$refs.menu);
                this.$dom = $dom;
                $dom.find('.js-menu-ul li').click(function(){
                    _vm.$store.dispatch('toggleMenu');

                   	var $this = $(this);
                   	var url = $this .data('url');
                    var title = $this.text();
                    _vm.$store.dispatch('toggleTitle', title);

                   	_vm.$router.push(url);
                });
            })
        },
        methods: {
	        toggleMenu: function(){
	          this.$store.dispatch('toggleMenu');
	        }
	    }
    };
</script>

<style lang="scss" scoped>
    /*侧边栏*/
    .list-ul{
        clear: both;
    }
    .nav-list {
        position: fixed;
        top: 0;
        bottom: 0;
        left: -200px;
        width: 170px;
        background-color: #fff;
        color: #313131;
        transition: all .3s ease;
        z-index: 5;
        &.show {
            transform: translateX(200px);
        }
    }

    /*遮罩层*/
    .shade-page{
	    position: fixed;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    background: rgba(0,0,0,.4);
	    z-index: 3;
    }

    /*侧边栏列表*/
    
    .list-ul {
        border-top: 1px solid #d4d4d4;
        overflow: hidden;
        li{
            padding: 5px;
            cursor: pointer;
        }

    }
</style>