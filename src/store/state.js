/*
 * @Author: tangxiaoxin 
 * @Date: 2019-08-05 10:21:30 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-08-10 09:50:28
 */

export default {
    user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {}
}