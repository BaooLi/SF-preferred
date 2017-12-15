import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export let getCarousel = () => axios.get("/home/carousel");


export let getRecommend = (offset) => axios.get(`/public/recommend?offset=${offset}`);


export let dd = () => axios.post(`/public/cart`, {
    recommendID: "b4db0e3f-4098-4572-b648-8981f7b48337", userName: "zzz", count: 18

});
export let removeCar = () => axios.post(`/removeCart`, {
    recommendID: "dsads", userName: "zazasdas"
});

export let emptiedCart = () => axios.delete(`/emptiedCart?userName=dd`
);
export let findCart = () => axios.get(`/emptiedCart?userName=dd`);

axios.interceptors.response.use(res => res.data);