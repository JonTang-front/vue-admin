<template>
    <div class="login-wrapper" v-loading.fullscreen.lock="fullscreenLoading">
        <div class="login-logo">
            <img :src="logo" alt="logo">
            <span>VUE ADMIN</span>
        </div>
        <div class="login-form">
            <el-form 
                :model="loginForm" 
                :rules="rules" 
                ref="loginForm" 
                size="small" 
                status-icon>
                <el-form-item label="" prop="username">
                    <el-input v-model="loginForm.username" placeholder="用户名" @keyup.enter.native="login"></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input type="password" v-model="loginForm.password" placeholder="密码" @keyup.enter.native="login"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button  type="primary" size="small" class="login-btn" @click="login">登 录</el-button>
                </el-form-item>
            </el-form>
        </div>        
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
    data() {
        return {
            fullscreenLoading: true,
            logo: require('assets/image/logo.png'),
            loginForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { max: 15, message: '用户名长度不能超过15', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 8, max: 16, message: '请输入8-16位用户密码', trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
        this.fullscreenLoading = false;
    },
    methods: {
        login() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.setUser({
                        name: this.loginForm.username, 
                        password: this.loginForm.password
                    });
                    this.$router.push('/home');
                } else {
                    return false;
                }
            });
        },
        ...mapMutations({
            setUser: 'SET_USER'
        })
    }
}
</script>
<style lang="scss" scoped>
@import 'assets/css/_variable.scss';
.login-wrapper{
    width: 280px;
    height: 300px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 100px;
    border: none;
    border-radius: 4px;
    padding: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -140px;
    background-color: #ffffff;
    .login-logo{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        margin: 10px 0 40px 0;
        img{
            width: 50px;
            margin-right: 15px;
        }
        span{
            vertical-align: text-bottom;
            font-size: 16px;
            text-transform: uppercase;
            display: inline-block;
            font-weight: 700;
            color: #1890ff;
            background-image: -webkit-gradient(linear,37.219838% 34.532506%,36.425669% 93.178216%,from(#29cdff),to(#0a60ff),color-stop(.37,#148eff));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    .login-form{
        .login-btn{
            width: 100%;
            font-size: $font-size-medium;
        }
    }
}
</style>
