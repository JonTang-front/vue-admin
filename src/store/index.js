/*
 * @Author: tangxiaoxin 
 * @Date: 2019-08-05 10:21:09 
 * @Last Modified by:   tangxiaoxin 
 * @Last Modified time: 2019-08-05 10:21:09 
 */

import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import state from './state';
import mutations from './mutations';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})