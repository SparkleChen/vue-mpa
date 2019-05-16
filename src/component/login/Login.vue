<template>
    <el-container>
        <el-header class="review-header">
            <span class="title">Review管理系统</span>
        </el-header>
        <el-main>
            <div class="login-style">
                <p class="title">欢迎使用</p>
                <span class="login-tips">账号:</span>
                <el-input placeholder="请输入账号" v-model="account" clearable></el-input>
                <p class="login-error" v-if="haveAccount">请输入账号</p>
                <span class="login-tips">密码:</span>
                <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                <p class="login-error" v-if="havePassword">请输入密码</p>
                <div class="login-btn">
                    <el-button type="primary" @click="handleClickLogin">登录</el-button>
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script>
    import Vue from 'vue';
    import { Header,Main,Input,Button,Container } from 'element-ui';
    Vue.use(Input);
    Vue.use(Button);
    Vue.use(Container);
    Vue.use(Header);
    Vue.use(Main);
    export default {
        name: 'Login',
        components : {
            Button,
            Input,
            Header,
            Main,
            Container
        },
        computed : {
            haveAccount () {
                return this.account == '' && this.change;
            },
            havePassword() {
                return this.password == ''&& this.change;
            }
        },
        data () {
            return {
                account : '',
                password : '',
                change : false
            }
        },
        methods : {
            handleClickLogin (){
                this.change = true;
                if(!this.account && !this.password){
                    return
                }
            }
        }
    }
</script>

<style lang="stylus">
    .review-header
        padding : 0px;
        background-color : cornflowerblue;
        .title
            line-height : 60px;
            margin-left : 20px;
            color : white;
            font-size: 20px;
    .login-style
        position : absolute;
        top:40%;
        left : 50%;
        transform: translate(-50%, -50%);
        width : 20vw;
        .title
            font-size : 20px;
            padding-bottom : 10px;
            margin-bottom : 10px;
            border-bottom : 1px solid #d0cdff;
        .login-tips
            font-size : 16px;
            font-weight : bold;
        .login-error
            padding: 5px 0px;
            font-size : 16px;
            color : red;
        .login-btn
            text-align : center;
        .el-input
            margin : 10px 0px;
        .el-button
            width : 100px;
</style>