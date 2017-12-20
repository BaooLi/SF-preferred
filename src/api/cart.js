import {get,post} from './index';

//购物车接口
export function getCartData() {
    return get('/findCart?userName=hh');
}

export function countChange(userData) {//{uName,id,count}
    return post(`/public/cart`,userData);
}
