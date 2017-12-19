import {get} from './index';

export function getListData() {
    return get('/list');
}
export function getClassificationData(keyWord,type){
    return get(`/public/classification?keyWord=${keyWord}&type=${type}`)
}