import {get,post} from './index';export function getCartData(username) {    return get(`/findCart?username=${username}`);}// userData:{username,recommendID,count,selected}export function countChange(userData) {    return post(`/public/cart`,userData);}//删除购物车 删除某一项 post请求，需要传的参数：userData:{username,recommendID}export function removeCart(userData) {    return post("/removeCart",userData)}//清空购物车 需要路径传参数:username         let username=req.query.username;// 读取数据，[userName:"",list:[]]，通过userName找到那条，并把数组中对应那条数据删除，写入文件。export function emptiedCart(username){    return get(`/emptiedCart?username=${username}`);}////查看，通过userName查看其中某一项，并返回这条数据：[userName:"",list:[]]，需要路径传参数 userNameexport function findCart(username) {    return  get(`/findCart?userName=${username}`);}