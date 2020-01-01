/*
 * @Author: tangxiaoxin 
 * @Date: 2019-08-05 10:02:34 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-08-07 13:39:28
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'login',
            path: '/login',
            hidden: true,
            component: () => import('components/login')
        },
        {
            path: '/',
            redirect: '/home',
            hidden: true
        },
        {
            name: 'index',
            path: '/',
            iconCls: 'el-icon-s-home',
            leaf: true,
            component: () => import('components/index'),
            children: [
                {
                    name: '首页',
                    path: '/home',
                    component: () => import('components/home')
                }
            ]
        },
        {
            name: '产品',
            path: '/',
            iconCls: 'el-icon-menu',
            leaf: false,
            component: () => import('components/index'),
            children: [
                {
                    name: '支付宝',
                    path: '/alipay',
                    component: () => import('components/alipay')
                },
                {
                    name: '百度地图',
                    path: '/baidumap',
                    component: () => import('components/baidumap')
                }
            ]
        },
        {
            name: 'index',
            path: '/',
            iconCls: 'el-icon-s-tools',
            leaf: true,
            component: () => import('components/index'),
            children: [
                {
                    name: '设置',
                    path: '/config',
                    component: () => import('components/config')
                }
            ]
        }
    ]
})