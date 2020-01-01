<template>
    <el-container  v-loading.fullscreen.lock="fullscreenLoading">
      <el-aside class="aside" :class="isCollapse ? 'collapse-aside' : 'extend-aside'">
        <div class="logo-wrapper">
          <img :src="logo" alt="logo" :style="{'margin-right': isCollapse? 0: '15px'}">
          <span v-show="!isCollapse">VUE ADMIN</span>
        </div>
        <div class="menu-wrapper">
            <el-menu
                :default-active="$route.path"
                :collapse="isCollapse"
                unique-opened
                router
                background-color="#2c3e50"
                text-color="#ffffff"
                @open="open"
                @close="close">
                <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
                    <el-menu-item :index="item.children[0].path" v-if="item.leaf" :key="index+'-k'">
                        <i :class="item.iconCls"></i>
                        <span>{{item.children[0].name}}</span>
                    </el-menu-item>
                    <el-submenu :index="index+''" v-if="!item.leaf" :key="index+'-k'">
                        <template slot="title">
                            <i :class="item.iconCls"></i>
                            <span slot="title">{{item.name}}</span>
                        </template>
                        <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">
                            {{child.name}}
                        </el-menu-item>
                    </el-submenu>
                </template>
            </el-menu>
        </div>
      </el-aside> 
      <el-container class="content-wrapper is-vertical">
        <el-header>
          <div class="header-wrapper">
            <div class="aside-toggle" @click="asideToggle">
              <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
            </div>
            <div class="user-wrapper">
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link user">
                  <span class="user-name">{{'hi，'+user.name}}</span>
                  <el-avatar :size="35" :src="user.avater || defaultAvater" fit="fill"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="signout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'index',
    data() {
      return {
        fullscreenLoading: true,
        defaultAvater: require('assets/image/user.png'),
        logo: require('assets/image/logo.png'),
        isCollapse: false
      }
    },
    computed: {
      ...mapGetters(['user'])
    },
    mounted() {
        this.fullscreenLoading = false;
    },
    methods: {
        asideToggle() {
            this.isCollapse = !this.isCollapse;
        },
        open(index, indexPath) {
            console.log(index, indexPath);
        },
        close(index, indexPath) {
            console.log(index, indexPath);
        },
        handleCommand(command) {
          if(command === 'signout'){
              this.signOut();
          }
        },
        signOut() {
            this.$confirm('确认退出吗？', '提示', {
              distinguishCancelAndClose: true
            })
            .then(() => {
              this.$router.push('/login');
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/_variable.scss';
.extend-aside{
    flex: 0 0 200px;
    width: 200px;
    i{
      transform: scale(1);
    }
    transition: all 0.3s;
}
.collapse-aside{
  flex: 0 0 60px;
  width: 60px;
  i{
    transform: scale(1.2);
  }
  transition: all 0.3s;
}
.aside{
    box-shadow: 0 0 28px 0 rgba(24,144,255,.1);
    z-index: 10;
    background-color: $color-background-menu;
    color: $color-color-menu;
    
    .logo-wrapper{
        width: 100%;
        height: 60px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        img{
            width: 30px;
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
    .menu-wrapper{
        text-align: left;
        border: none;
        height: calc(100vh - 60px);
        .el-menu{
            border: none;
            width: 100%;
            .el-menu-item{
                &.is-active{
                    background-color: #1890ff !important;
                    color: $color-color-menu;
                }
            }
            i{
                color: $color-color-menu;
            }
        }
    }
}
.content-wrapper{
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  .el-header{
    background-color: #fff;
    padding: 0;
    .header-wrapper{
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .aside-toggle{
        padding: 20px;
        color: #aaaaaa;
        font-size: 18px;
        &:hover{
          color: #1890ff;
          background-color: #f9f9fc;
        }
      }
      .user-wrapper{
        padding: 20px;
        .user{
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          .user-name{
            margin-right: 8px;
            font-size: 12px;
            color: #888888;
            &:hover{
              color: #1890ff;
            }
          } 
        }
      }
    }
  }
}
</style>

<style lang="scss">
  .el-menu{
    .el-submenu{
      .el-submenu__icon-arrow{
        color: #fff;
      }
    }
  }
</style>