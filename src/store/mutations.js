/*
 * @Author: tangxiaoxin 
 * @Date: 2019-08-05 10:21:18 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-08-10 09:49:09
 */

import * as types from './mutation-types'

export default {
    [types.SET_USER](state, user) {
        state.user = user;
        sessionStorage.setItem('user', JSON.stringify(user));
    }
}