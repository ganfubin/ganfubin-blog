<template>
    <div id="app">
        <cmptHeader></cmptHeader>
        <div id="page-container" calss="wrapper">
            <cmptMenu :showMenu="false"></cmptMenu>
            <div class="page-wrapper">
                <keep-alive>
                    <router-view class="view"></router-view>
                </keep-alive>
            </div>
        </div> 
         <cmptFooter></cmptFooter>
    </div>
    
</template>
<script>
    import cmptHeader from './components/header.vue';
    import cmptMenu from './components/menu.vue';
    import cmptFooter from './components/footer.vue';
    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            cmptHeader,
            cmptMenu,
            cmptFooter
        }
    }
</script>
<style lang='scss'>
    /*项目后面可能会用到其他插件的sass文件*/
    @import '~element-ui/lib/theme-default/index.css';
    /* pc 端样式重置*/
    @import '~element-ui/lib/theme-default/reset.css';
    /* 移动端样式重置*/
    @import 'assets/style/_mobile-rest.scss';
    /*index中不包含reset样式*/
    /*@import './assets/theme/index.css';*/

    /* @import '~iview/dist/styles/iview.css';*/
    /*@import '~normalize.css/normalize.css';*/
    /*字体图标库*/


    $fa-font-path: "~font-awesome/fonts";
    @import "~font-awesome/scss/font-awesome";

    /*引入公共基础类*/
    @import 'assets/style/_common.scss';


</style>

<style scoped lang="scss">
    #app{
        height: 100%;
    }
    #page-container{
        padding-top: 44px;
    }
</style>
