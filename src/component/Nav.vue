<template>
    <el-row :gutter="20" class="header-style">
        <el-col :span="4" class="el-col-style"><div class="grid-content bg-purple">
            <span class="review-title">管理系统</span>
        </div></el-col>
        <el-col :span="16" class="el-col-style"><div class="grid-content bg-purple">
            <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="cornflowerblue"
                    text-color="white"
                    active-text-color="white">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">详情页</el-menu-item>
            </el-menu>
        </div></el-col>
        <el-col :span="4" class="el-col-style">
            <div class="grid-content bg-purple">
            <span class="review-login" @click="handleLogin">登录</span>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import Vue from 'vue';
    import { Header,Row,Col,Menu, MenuItem,Submenu } from 'element-ui';
    Vue.use(Header);
    Vue.use(Menu);
    Vue.use(MenuItem);
    Vue.use(Submenu);
    Vue.use(Row);
    Vue.use(Col);
    export default {
        components : {
            Header,
            Menu,
            MenuItem,
            Submenu,
            Row,
            Col
        },
        props : {
            activeIndex : {
                type: String,
                // 对象或数组默认值必须从一个工厂函数获取
                default: function () {
                    return "1"
                }
            }
        },
        data() {
            return {

            };
        },
        computed : {
            getActiveIndex () {
                return this.activeIndex
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                switch (key) {
                    case '1' :
                        window.location.href='/review/home';
                        break;
                    case '2' :
                        window.location.href='/review/detail';
                }
            },
            handleLogin () {
                window.location.href='/review/login';
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus">
    .el-menu.el-menu--horizontal
        border-bottom: solid 1px cornflowerblue;
    .header-style
        background-color: cornflowerblue;
        .el-col-style
            padding : 0px;
            .review-title
                line-height : 60px;
                color : white;
                font-size : 20px;
                padding-left : 20px;
            .review-login
                line-height  : 60px;
                color : white;
                cursor : pointer;
</style>