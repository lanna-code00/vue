const state ={
    num: 1,
    name: 'Maryann'
};
const getters = {
    getnum(){
        return state.num;
    },
    getName(){
        return state.name
    }
};
const actions ={
    increase({commit}, val){
        commit('increasebyone', val)
    }, 
    decrease({commit}){
      commit('decreaseme')
    }
};
const mutations = {
    increasebyone(state, v){
       state.num = state.num + v;
    } ,
    
    decreaseme(state){
        state.num = state.num - 1;
    }
};
export default {state, getters, actions, mutations};