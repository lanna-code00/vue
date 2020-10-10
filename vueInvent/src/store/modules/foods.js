import axios from 'axios';

const state = {
    foods: []
};

const getters = {
    allfoods: state => state.foods 
};

const actions = {
   async fetchallfoods({ commit }) {
       const response = await axios.get(
        'http://localhost/vuefolder/vueInvent/src/assets/food_php/getfood.php'
        );
      console.log(response.data);
      commit('allfoods', response.data)
   },

   async addfood({ commit }, formData) {
       const response = await axios.post('http://localhost/vuefolder/vueInvent/src/assets/food_php/insertfood.php',
        formData,
        {
          headers: {
                    'Content-Type': 'multipart/form-data'
                }
        }
    );
       console.log(response.data);
       commit('insertfood', response.data)
   }

};

const mutations = {
    allfoods: (state, foods) => (state.foods = foods),
    insertfood: (state, food) => state.foods.unshift(food),
};

export default {
    state,
    getters,
    actions,
    mutations,
}