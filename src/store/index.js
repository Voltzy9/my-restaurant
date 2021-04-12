import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

let queryUrl = "https://api.yelp.com/v3";
const apikey = 'KB3DOGeUTUxK6ocbYiihkD8XGX0Dag305BbYC69_k2dtItz1FpLXvEqR3YOlEY1COMQ56ekbngO3om-Y-ZPykdxwhqvwOzeqljbuCS5ckdKC-98Oil53hWkeeU9bYHYx'


Vue.use(Vuex)
const $api = axios.create({
  baseURL: queryUrl,
  headers: {
    Authorization:`Bearer ${apikey}`,
  },
});

export default new Vuex.Store({
  state: {
    restaurants: null,
    currentRestaurant: null,
  },
  mutations: {
    setRestaurant(state, restaurants){
      state.restaurants = restaurants;
    },
    setCurrentRestaurant(state, restaurant) {
      state.currentRestaurant = restaurant
    }
  },
  actions: {
    searchRestaurants({ commit }, parameters) {
      const urlParameters = {
        nameRestaurant: null,
        open: false,
        categories: 'restaurants',
      };

      if (parameters) {
        Object.keys(parameters).forEach((index) => {
          urlParameters[index] = parameters[index];
        });
      }

      let queryString = '';
      if (urlParameters.nameRestaurant) {
        queryString += `&term=${urlParameters.nameRestaurant}`;
      }
      queryString += `&open=${urlParameters.open}&categories=${urlParameters.categories}`;

      console.log(queryString);
      console.log(urlParameters);

      $api.get(`/businesses/search?location=Lyon&${queryString}`)
          .then(({ data }) => {
            commit('setRestaurant', data.businesses)
          })
    },

    getDetailRestaurant( { commit }, alias) {

      $api.get(`/businesses/${alias}`)
          .then(({ data }) => {
            commit('setCurrentRestaurant', data)
          })
    },
  },
  modules: {
  }
})
